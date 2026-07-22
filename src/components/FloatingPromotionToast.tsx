import React, { useState } from 'react';
import { Gift, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePersistentState } from '../hooks/usePersistentState';

export const FloatingPromotionToast: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = usePersistentState<boolean>('vada_toast_dismissed', false);
  const [copied, setCopied] = useState(false);

  if (dismissed) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText('COFFEEDI-SAN');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="liquid-glass text-[#FBF5ED] px-4 py-2.5 rounded-full border border-[#D4A373]/40 shadow-xl flex items-center gap-2 hover:scale-105 transition-all text-xs font-semibold group"
        >
          <Gift className="w-4 h-4 text-[#D4A373] group-hover:rotate-12 transition-transform" />
          <span>🎁 Đang có 4 ưu đãi hấp dẫn</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </button>
      ) : (
        <div className="w-80 bg-[#251B17] border border-[#D4A373]/50 rounded-2xl p-4 shadow-2xl space-y-3 animate-fade-rise text-[#FBF5ED] relative">
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-3 right-3 text-[#FBF5ED]/40 hover:text-[#D4A373]"
            title="Tắt quảng cáo (Lưu trạng thái khi F5)"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4A373]" />
            <h4 className="font-serif text-sm font-bold text-[#E6C280]">
              Mã Ưu Đãi Đặc Quyền
            </h4>
          </div>

          <p className="text-xs text-[#FBF5ED]/70 leading-relaxed">
            Giảm <strong className="text-[#D4A373]">15%</strong> cho đơn hàng đầu tiên. Sử dụng mã trong giỏ hàng:
          </p>

          <div className="flex items-center justify-between p-2 rounded-xl bg-[#1C1310] border border-[#3A2B24]">
            <span className="font-mono text-xs font-bold text-[#E6C280] tracking-wider">
              COFFEEDI-SAN
            </span>
            <button
              onClick={handleCopyCode}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-colors ${
                copied ? 'bg-emerald-500 text-white' : 'bg-[#D4A373] text-[#120C0A] hover:bg-[#E6C280]'
              }`}
            >
              {copied ? 'Đã sao chép!' : 'Sao chép'}
            </button>
          </div>

          <div className="pt-2 border-t border-[#3A2B24] flex items-center justify-between text-[11px]">
            <Link to="/promotions" onClick={() => setIsOpen(false)} className="text-[#D4A373] hover:underline">
              Xem tất cả 4 ưu đãi →
            </Link>
            <button onClick={() => setIsOpen(false)} className="text-[#FBF5ED]/40 hover:text-[#FBF5ED]">
              Thu nhỏ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
