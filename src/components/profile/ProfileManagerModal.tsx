import React, { useState, useRef } from 'react';
import { UserProfile } from '../../types';
import { storageService } from '../../services/storageService';
import { soundEffects } from '../../services/soundEffects';
import { X, UserCheck, Plus, Download, Upload, Shield, Settings, Sliders, Check } from 'lucide-react';

interface ProfileManagerModalProps {
  activeProfile: UserProfile;
  allProfiles: UserProfile[];
  onClose: () => void;
  onProfileSwitched: (newProfile: UserProfile) => void;
  onProfilesUpdated: () => void;
}

const AVATAR_OPTIONS = ['🦊', '🐼', '🐱', '🐶', '🐯', '🐰', '🦁', '🐻', '🌸', '🍙', '🍣', '🗾'];

export const ProfileManagerModal: React.FC<ProfileManagerModalProps> = ({
  activeProfile,
  allProfiles,
  onClose,
  onProfileSwitched,
  onProfilesUpdated
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [newAvatar, setNewAvatar] = useState('🦊');

  // Setting values
  const [gatekeeper, setGatekeeper] = useState(activeProfile.settings.gatekeeperEnabled);
  const [autoAudio, setAutoAudio] = useState(activeProfile.settings.autoPlayAudio);
  const [speechRate, setSpeechRate] = useState(activeProfile.settings.speechRate);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const handleSwitchProfile = (p: UserProfile) => {
    soundEffects.playFlip();
    storageService.setActiveProfileId(p.id);
    onProfileSwitched(p);
  };

  const handleCreateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    soundEffects.playVictory();
    const created = storageService.createProfile(newName.trim(), newAvatar);
    onProfileSwitched(created);
    onProfilesUpdated();
    setIsCreating(false);
    setNewName('');
  };

  const handleSaveSettings = () => {
    const updated: UserProfile = {
      ...activeProfile,
      settings: {
        ...activeProfile.settings,
        gatekeeperEnabled: gatekeeper,
        autoPlayAudio: autoAudio,
        speechRate
      }
    };
    storageService.updateProfile(updated);
    onProfileSwitched(updated);
    soundEffects.playCorrect();
    onClose();
  };

  const handleExport = () => {
    soundEffects.playCorrect();
    const json = storageService.exportBackup();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nihon_study_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const ok = storageService.importBackup(content);
        if (ok) {
          soundEffects.playVictory();
          setImportStatus('Khôi phục dữ liệu thành công!');
          onProfilesUpdated();
          setTimeout(() => {
            window.location.reload();
          }, 800);
        } else {
          soundEffects.playIncorrect();
          setImportStatus('File không đúng định dạng!');
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()} style={{ height: '88vh' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: 800 }}>Quản Lý Hồ Sơ & Cài Đặt</h2>
          <button
            onClick={onClose}
            style={{
              background: 'var(--bg-elevated)',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              padding: '6px',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Profile Switcher Section */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '13px', fontWeight: 800 }}>Chọn thành viên học ({allProfiles.length}/3)</span>
            {!isCreating && allProfiles.length < 5 && (
              <button
                onClick={() => setIsCreating(true)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--accent-primary)',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Plus size={14} /> Thêm người
              </button>
            )}
          </div>

          {/* Profile Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {allProfiles.map((p) => {
              const isSelected = p.id === activeProfile.id;
              return (
                <div
                  key={p.id}
                  onClick={() => handleSwitchProfile(p)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: isSelected ? 'rgba(99, 102, 241, 0.2)' : 'var(--bg-elevated)',
                    border: isSelected ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px' }}>{p.avatar}</span>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {p.name} {isSelected && <span style={{ fontSize: '11px', color: 'var(--accent-primary)' }}>• Đang dùng</span>}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        Cấp độ: {p.currentLevel} • Streak: {p.streak} ngày 🔥
                      </div>
                    </div>
                  </div>

                  {isSelected && <UserCheck size={20} color="var(--accent-primary)" />}
                </div>
              );
            })}
          </div>

          {/* New Profile Form */}
          {isCreating && (
            <form
              onSubmit={handleCreateProfile}
              style={{
                marginTop: '12px',
                padding: '14px',
                background: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 800 }}>Chọn ảnh đại diện:</div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {AVATAR_OPTIONS.map((av) => (
                  <button
                    key={av}
                    type="button"
                    onClick={() => setNewAvatar(av)}
                    style={{
                      fontSize: '20px',
                      padding: '6px',
                      borderRadius: '8px',
                      border: newAvatar === av ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                      background: newAvatar === av ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                      cursor: 'pointer'
                    }}
                  >
                    {av}
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder="Nhập tên thành viên..."
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                style={{
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '13px',
                  outline: 'none'
                }}
                required
              />

              <div style={{ display: 'flex', gap: '8px' }}>
                <button type="submit" className="btn-primary" style={{ flex: 1, padding: '8px' }}>
                  Tạo hồ sơ
                </button>
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="btn-secondary"
                  style={{ flex: 1, padding: '8px' }}
                >
                  Hủy
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Learning Settings */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '13px', fontWeight: 800, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sliders size={16} /> Tùy chọn học tập
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Gatekeeper toggle */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 14px',
                background: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700 }}>Kỷ luật mở khóa (Gatekeeper)</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  {gatekeeper ? 'Bắt buộc đạt ≥80% Boss Exam mới mở bài tiếp' : 'Mở khóa tự do tất cả bài học'}
                </div>
              </div>
              <input
                type="checkbox"
                checked={gatekeeper}
                onChange={(e) => setGatekeeper(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
              />
            </div>

            {/* Auto play audio toggle */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 14px',
                background: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700 }}>Tự động phát âm thanh</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Tự đọc từ vựng khi lật mặt sau Flashcard
                </div>
              </div>
              <input
                type="checkbox"
                checked={autoAudio}
                onChange={(e) => setAutoAudio(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
              />
            </div>

            {/* Speech rate slider */}
            <div
              style={{
                padding: '10px 14px',
                background: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 700 }}>
                <span>Tốc độ đọc tiếng Nhật</span>
                <span style={{ color: 'var(--accent-primary)' }}>{speechRate}x</span>
              </div>
              <input
                type="range"
                min="0.7"
                max="1.2"
                step="0.1"
                value={speechRate}
                onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
              />
            </div>

            <button onClick={handleSaveSettings} className="btn-primary" style={{ width: '100%' }}>
              Lưu cài đặt
            </button>
          </div>
        </div>

        {/* Backup & Restore JSON (Crucial for 2-3 users syncing) */}
        <div>
          <div style={{ fontSize: '13px', fontWeight: 800, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Download size={16} /> Sao lưu & Đồng bộ (JSON)
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button onClick={handleExport} className="btn-secondary" style={{ padding: '12px' }}>
              <Download size={16} />
              Xuất dữ liệu
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="btn-secondary"
              style={{ padding: '12px' }}
            >
              <Upload size={16} />
              Nhập dữ liệu
            </button>

            <input
              type="file"
              ref={fileInputRef}
              accept=".json"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>

          {importStatus && (
            <div style={{ marginTop: '8px', fontSize: '12px', textAlign: 'center', color: 'var(--accent-emerald)', fontWeight: 700 }}>
              {importStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
