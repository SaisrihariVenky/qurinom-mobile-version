import React, { useState } from 'react';
import { DemoRequest } from '../types';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, defaultProduct = 'qhr' }) => {
  const [formData, setFormData] = useState<DemoRequest>({
    fullName: '',
    email: '',
    company: '',
    teamSize: '50-250',
    product: defaultProduct,
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSandboxActive, setIsSandboxActive] = useState(false);
  const [simulatedClocked, setSimulatedClocked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setIsSandboxActive(false);
    setSimulatedClocked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#131B2E] border border-[#1F2C47] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-4 bg-[#0E1524] border-b border-[#1F2C47] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6A3D] animate-ping" />
            <h3 className="font-display font-bold text-white text-base tracking-wide">
              {submitted ? 'Demo Sandbox Provisioned' : 'Book a Live Platform Demo'}
            </h3>
          </div>
          <button 
            onClick={handleReset}
            className="w-8 h-8 rounded-full bg-[#1A253E] border border-[#1F2C47] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 overflow-y-auto flex flex-col gap-4">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="p-3 rounded-xl bg-[#0E1524] border border-[#1F2C47] text-xs text-slate-300 flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#38BDF8] text-[20px] shrink-0">speed</span>
                <span>Get a guided 1-on-1 walkthrough with our platform architect & instant sandbox access.</span>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Alex Mercer"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full h-10 px-3 rounded-xl bg-[#0E1524] border border-[#1F2C47] text-white text-xs placeholder:text-slate-500 focus:border-[#FF6A3D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Work Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="alex@enterprise.corp"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-10 px-3 rounded-xl bg-[#0E1524] border border-[#1F2C47] text-white text-xs placeholder:text-slate-500 focus:border-[#FF6A3D] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Company Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Acme Global"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-10 px-3 rounded-xl bg-[#0E1524] border border-[#1F2C47] text-white text-xs placeholder:text-slate-500 focus:border-[#FF6A3D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Team Size
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full h-10 px-2 rounded-xl bg-[#0E1524] border border-[#1F2C47] text-white text-xs focus:border-[#FF6A3D] focus:outline-none"
                  >
                    <option value="1-50">1 - 50 staff</option>
                    <option value="50-250">50 - 250 staff</option>
                    <option value="250-1000">250 - 1,000 staff</option>
                    <option value="1000+">1,000+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Product of Interest
                </label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full h-10 px-2 rounded-xl bg-[#0E1524] border border-[#1F2C47] text-white text-xs focus:border-[#FF6A3D] focus:outline-none"
                >
                  <option value="qhr">QHR - HR Management & Payroll Engine</option>
                  <option value="storeflaunt">StoreFlaunt - Video Commerce Mesh</option>
                  <option value="weevids">WeeVids - Creator Video Infrastructure</option>
                  <option value="my-holy-trip">My Holy Trip - Sacred Cultural Telemetry</option>
                  <option value="snapp-buddy">Snapp Buddy - Event AI Optics</option>
                  <option value="custom">Bespoke Enterprise Suite</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-11 rounded-xl bg-[#FF6A3D] hover:bg-[#FF5420] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#FF6A3D]/25 transition-all active:scale-[0.98]"
                >
                  <span>Request Live Architecture Demo</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col gap-4 text-center py-2">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-[32px]">check_circle</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white">Sandbox Node Ready!</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Welcome aboard, <strong className="text-white">{formData.fullName || 'Innovator'}</strong>. Your dedicated test sandbox for <span className="text-[#FF6A3D] font-mono uppercase">{formData.product}</span> has been provisioned.
                </p>
              </div>

              {/* Instant Interactive Sandbox Simulator */}
              <div className="p-3.5 bg-[#0E1524] border border-[#1F2C47] rounded-xl text-left flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono border-b border-[#1F2C47] pb-2">
                  <span className="text-[#38BDF8]">SANDBOX: #QHR-STAGE-04</span>
                  <span className="text-emerald-400">STATUS: ACTIVE</span>
                </div>

                <div className="text-xs text-slate-300 flex items-center justify-between">
                  <span>Simulate Mobile Geofenced Clock-In:</span>
                  <button
                    onClick={() => setSimulatedClocked(!simulatedClocked)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      simulatedClocked 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-[#FF6A3D] text-white'
                    }`}
                  >
                    {simulatedClocked ? 'Clocked In (Verified)' : 'Punch Clock-In'}
                  </button>
                </div>

                {simulatedClocked && (
                  <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5 animate-in fade-in">
                    <span className="material-symbols-outlined text-[14px]">pin_drop</span>
                    <span>GPS Lock: 17.4399° N, 78.3758° E (HQ Perimeter Verified)</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleReset}
                className="w-full h-10 rounded-xl bg-[#131B2E] border border-[#1F2C47] text-white text-xs font-semibold hover:bg-[#1A253E] transition-all"
              >
                Close & Return to Platform
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
