import React from 'react';
import { TabType } from '../types';
import { BRAND_LOGO } from '../data/products';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenDemo: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  activeTab,
  onSelectTab,
  onOpenDemo,
}) => {
  if (!isOpen) return null;

  const navItems: { id: TabType; label: string; icon: string; badge?: string }[] = [
    { id: 'overview', label: 'Platform Overview', icon: 'dashboard' },
    { id: 'products', label: 'Products Catalog', icon: 'apps', badge: '5 Flagships' },
    { id: 'qhr', label: 'QHR Enterprise HR', icon: 'badge', badge: 'Flagship' },
    { id: 'solutions', label: 'Enterprise Solutions', icon: 'precision_manufacturing' },
    { id: 'company', label: 'About Qurinom', icon: 'domain' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div 
        className="w-full max-w-xs bg-[#0B0F19] border-l border-[#1F2C47] h-full flex flex-col justify-between p-5 shadow-2xl animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-6">
          {/* Top header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#1F2C47]">
            <img src={BRAND_LOGO} alt="Qurinom Solutions" className="h-7 w-auto object-contain" />
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#131B2E] border border-[#1F2C47] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest px-2 mb-1">
              NAVIGATION
            </span>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === item.id
                    ? 'bg-[#FF6A3D] text-white shadow-md shadow-[#FF6A3D]/25'
                    : 'text-slate-300 hover:text-white hover:bg-[#131B2E]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                    activeTab === item.id ? 'bg-black/25 text-white' : 'bg-[#131B2E] text-[#38BDF8] border border-[#1F2C47]'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Quick Demo CTA */}
          <div className="p-3.5 rounded-xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Instant Sandbox Node</span>
            </div>
            <p className="text-[11px] text-slate-300">
              Test live biometric attendance and payroll reconciliation in real-time.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenDemo();
              }}
              className="w-full h-9 rounded-lg bg-gradient-to-r from-orange-400 to-amber-300 text-[#0B0F19] font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[16px]">play_circle</span>
              <span>Launch Live Demo</span>
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="border-t border-[#1F2C47] pt-4 flex flex-col gap-1 text-[10px] font-mono text-slate-400">
          <div>QURINOM SOLUTIONS PVT. LTD.</div>
          <div className="text-slate-500">SOC2 TYPE II • ISO 27001 COMPLIANT</div>
        </div>
      </div>
    </div>
  );
};
