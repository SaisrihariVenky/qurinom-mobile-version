import React from 'react';
import { ProductItem } from '../types';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onBookDemo: (productId: string) => void;
  onNavigateToQHR?: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onBookDemo,
  onNavigateToQHR
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#131B2E] border border-[#1F2C47] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-4 py-3 bg-[#0E1524] border-b border-[#1F2C47] flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#FF6A3D]" />
            <span className="font-mono text-xs font-semibold text-white truncate">{product.categoryLabel}</span>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#1A253E] border border-[#1F2C47] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex flex-col">
          {/* Hero Banner */}
          <div className="relative h-44 w-full bg-[#0F1626]">
            <img 
              src={product.heroImage} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-transparent to-black/40" />
            <div className="absolute top-3 inset-x-3 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-orange-500/90 text-white font-mono text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md">
                {product.badge}
              </span>
              <span className="px-2 py-0.5 rounded bg-black/60 text-slate-300 font-mono text-[10px] border border-white/10 backdrop-blur-md">
                {product.version}
              </span>
            </div>
            <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 border border-white/10 backdrop-blur-md text-[11px] text-emerald-300 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {product.statusBadge}
            </div>
          </div>

          <div className="p-4 flex flex-col gap-4">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white tracking-tight">{product.name}</h3>
                <span className="font-mono text-[10px] text-[#38BDF8] px-2 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30">
                  PRODUCTION READY
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {product.longDesc}
              </p>
            </div>

            {/* Live Telemetry Card */}
            <div className="p-3 bg-[#0E1524] border border-[#1F2C47] rounded-xl flex flex-col gap-2">
              <div className="flex items-center justify-between border-b border-[#1F2C47] pb-1.5">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Telemetry Mesh Data</span>
                <span className="font-mono text-[10px] text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded border border-[#38BDF8]/20">
                  {product.telemetry.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="p-2 bg-[#131B2E] border border-[#1F2C47] rounded-lg">
                  <span className="text-[10px] font-mono text-slate-400 block">{product.telemetry.label1}</span>
                  <div className="text-sm font-bold text-white mt-0.5">{product.telemetry.value1}</div>
                </div>
                <div className="p-2 bg-[#131B2E] border border-[#1F2C47] rounded-lg">
                  <span className="text-[10px] font-mono text-slate-400 block">{product.telemetry.label2}</span>
                  <div className="text-sm font-bold text-[#FF6A3D] mt-0.5">{product.telemetry.value2}</div>
                </div>
              </div>
            </div>

            {/* Core Capabilities */}
            <div>
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-2">
                Core Architectural Capabilities
              </span>
              <div className="flex flex-col gap-2">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <span className="material-symbols-outlined text-[16px] text-[#FF6A3D] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {product.tags.map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-[#0E1524] border border-[#1F2C47] text-[11px] font-mono text-slate-300">
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col gap-2">
              {product.id === 'qhr' && onNavigateToQHR ? (
                <button
                  onClick={() => {
                    onClose();
                    onNavigateToQHR();
                  }}
                  className="w-full h-11 rounded-xl bg-[#FF6A3D] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#FF6A3D]/25 active:scale-[0.98] transition-all"
                >
                  <span>Open Full QHR Platform Hub</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              ) : null}

              <button
                onClick={() => {
                  onClose();
                  onBookDemo(product.id);
                }}
                className="w-full h-11 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#FF6A3D]/20 active:scale-[0.98] transition-all"
              >
                <span>Book Live Architecture Demo for {product.name}</span>
                <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              </button>

              <button
                onClick={onClose}
                className="w-full h-10 rounded-xl bg-[#0E1524] border border-[#1F2C47] text-slate-300 hover:text-white text-xs font-medium active:scale-[0.98] transition-all"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
