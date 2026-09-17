import React from 'react';
import { ActiveTab } from '../../types';
import { Home, BookOpen, Layers, Type, Trophy } from 'lucide-react';

interface BottomNavProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  mistakeCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  mistakeCount
}) => {
  const tabs = [
    { id: 'home' as ActiveTab, label: 'Trang chủ', icon: Home },
    { id: 'lessons' as ActiveTab, label: 'Giáo trình', icon: BookOpen },
    { id: 'flashcard' as ActiveTab, label: 'Thẻ từ', icon: Layers },
    { id: 'kanji' as ActiveTab, label: 'Hán tự', icon: Type },
    { id: 'team' as ActiveTab, label: 'Nhóm & Thi', icon: Trophy, badge: mistakeCount > 0 ? mistakeCount : undefined }
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`nav-item ${isActive ? 'active' : ''}`}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'relative' }}>
              <Icon size={20} className="nav-icon" />
              {tab.badge !== undefined && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-8px',
                    background: 'var(--accent-ruby)',
                    color: '#fff',
                    fontSize: '9px',
                    fontWeight: 800,
                    borderRadius: 'var(--radius-full)',
                    minWidth: '15px',
                    height: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 3px',
                    boxShadow: '0 2px 5px rgba(239, 68, 68, 0.4)'
                  }}
                >
                  {tab.badge}
                </span>
              )}
            </div>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
