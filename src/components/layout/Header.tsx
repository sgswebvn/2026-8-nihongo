import React from 'react';
import { UserProfile, JLPTLevel } from '../../types';
import { Flame, Volume2, VolumeX, Moon, Sun, Users } from 'lucide-react';
import { soundEffects } from '../../services/soundEffects';

interface HeaderProps {
  activeProfile: UserProfile;
  currentLevel: JLPTLevel;
  onLevelChange: (level: JLPTLevel) => void;
  onOpenProfileManager: () => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeProfile,
  currentLevel,
  onLevelChange,
  onOpenProfileManager,
  onToggleTheme,
  isDarkMode
}) => {
  const toggleSound = () => {
    soundEffects.enabled = !soundEffects.enabled;
    if (soundEffects.enabled) {
      soundEffects.playCorrect();
    }
  };

  return (
    <header className="app-header">
      {/* User profile selector button */}
      <button
        onClick={onOpenProfileManager}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-full)',
          padding: '4px 10px 4px 6px',
          color: 'var(--text-primary)',
          cursor: 'pointer'
        }}
        title="Đổi tài khoản học viên"
      >
        <span style={{ fontSize: '18px' }}>{activeProfile.avatar}</span>
        <span style={{ fontSize: '12px', fontWeight: 700, maxWidth: '80px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {activeProfile.name.split(' ')[0]}
        </span>
        <Users size={13} color="var(--text-muted)" />
      </button>

      {/* Level selector N5 / N4 switch */}
      <div
        style={{
          display: 'flex',
          background: 'var(--bg-elevated)',
          padding: '3px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-subtle)'
        }}
      >
        {(['N5', 'N4'] as JLPTLevel[]).map((lvl) => (
          <button
            key={lvl}
            onClick={() => onLevelChange(lvl)}
            style={{
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: currentLevel === lvl ? 'var(--accent-primary)' : 'transparent',
              color: currentLevel === lvl ? '#fff' : 'var(--text-muted)',
              fontSize: '11px',
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Stats & controls: Streak, Sound, Theme */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Streak badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            padding: '4px 8px',
            borderRadius: 'var(--radius-full)',
            color: 'var(--accent-gold)',
            fontSize: '12px',
            fontWeight: 800
          }}
          title={`Chuỗi học: ${activeProfile.streak} ngày liên tiếp!`}
        >
          <Flame size={15} fill="currentColor" />
          <span>{activeProfile.streak}</span>
        </div>

        {/* Audio sound toggle */}
        <button
          onClick={toggleSound}
          style={{
            background: 'transparent',
            border: 'none',
            color: soundEffects.enabled ? 'var(--text-primary)' : 'var(--text-muted)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '4px'
          }}
          title={soundEffects.enabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
        >
          {soundEffects.enabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>

        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '4px'
          }}
          title={isDarkMode ? 'Chuyển sang sáng' : 'Chuyển sang tối'}
        >
          {isDarkMode ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>
    </header>
  );
};
