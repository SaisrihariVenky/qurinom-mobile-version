import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onSelectTab }) => {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-[#0B0F19]/95 backdrop-blur-xl border-t border-[#1F2C47]">
      <div className="flex items-center justify-around h-14 max-w-md mx-auto px-2">
        {/* Overview */}
        <button
          onClick={() => onSelectTab('overview')}
          className={`flex flex-col items-center justify-center gap-0.5 flex-1 min-h-[44px] transition-colors relative ${
            activeTab === 'overview' ? 'text-[#FF6A3D] font-semibold' : 'text-slate-400 hover:text-white'
          }`}
        >
          {activeTab === 'overview' && (
            <span className="absolute -top-1 w-6 h-0.5 bg-[#FF6A3D] rounded-full" />
          )}
          <span className="material-symbols-outlined text-[20px]">dashboard</span>
          <span className="font-mono text-[9px] tracking-wider uppercase">Overview</span>
        </button>

        {/* Products */}
        <button
          onClick={() => onSelectTab('products')}
          className={`flex flex-col items-center justify-center gap-0.5 flex-1 min-h-[44px] transition-colors relative ${
            activeTab === 'products' ? 'text-[#FF6A3D] font-semibold' : 'text-slate-400 hover:text-white'
          }`}
        >
          {activeTab === 'products' && (
            <span className="absolute -top-1 w-6 h-0.5 bg-[#FF6A3D] rounded-full" />
          )}
          <span className="material-symbols-outlined text-[20px]">apps</span>
          <span className="font-mono text-[9px] tracking-wider uppercase">Products</span>
        </button>

        {/* Solutions */}
        <button
          onClick={() => onSelectTab('solutions')}
          className={`flex flex-col items-center justify-center gap-0.5 flex-1 min-h-[44px] transition-colors relative ${
            activeTab === 'solutions' ? 'text-[#FF6A3D] font-semibold' : 'text-slate-400 hover:text-white'
          }`}
        >
          {activeTab === 'solutions' && (
            <span className="absolute -top-1 w-6 h-0.5 bg-[#FF6A3D] rounded-full" />
          )}
          <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
          <span className="font-mono text-[9px] tracking-wider uppercase">Solutions</span>
        </button>

        {/* Company */}
        <button
          onClick={() => onSelectTab('company')}
          className={`flex flex-col items-center justify-center gap-0.5 flex-1 min-h-[44px] transition-colors relative ${
            activeTab === 'company' ? 'text-[#FF6A3D] font-semibold' : 'text-slate-400 hover:text-white'
          }`}
        >
          {activeTab === 'company' && (
            <span className="absolute -top-1 w-6 h-0.5 bg-[#FF6A3D] rounded-full" />
          )}
          <span className="material-symbols-outlined text-[20px]">domain</span>
          <span className="font-mono text-[9px] tracking-wider uppercase">Company</span>
        </button>
      </div>
    </nav>
  );
};
