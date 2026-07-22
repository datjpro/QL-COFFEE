import React, { useState } from 'react';
import { X, Gift, Sparkles, Copy, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SideBanners: React.FC = () => {
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('COFFEEDI-SAN');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <>
      {/* Left Vertical Side Banner */}
      {showLeft && (
        <aside
          className="fixed left-3 top-28 z-30 hidden 2xl:block w-48 rounded-2xl overflow-hidden bg-[#251B17] border border-[#D4A373]/40 shadow-2xl transition-all duration-300 animate-fade-rise"
          aria-label="Khuyến mãi bên trái"
        >
          <div className="relative h-64 overflow-hidden bg-[#1C1310]">
            <img
              src="./images/coffee_promo_left.jpg"
              alt="Cà Phê Di Sản Promo"
              className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#251B17] via-transparent to-transparent" />
            <button
              onClick={() => setShowLeft(false)}
              className="absolute top-2 right-2 p-1.5 rounded-full liquid-glass text-[#FBF5ED] hover:text-[#D4A373] transition-colors"
              title="Đóng banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#D4A373] text-[#120C0A] text-[9px] font-extrabold uppercase">
              Tặng Phin Mạ Vàng
            </div>
          </div>

          <div className="p-3.5 space-y-2 text-center">
            <h4 className="font-serif text-xs font-bold text-[#E6C280] leading-snug">
              Hành Trình Hạt Vàng
            </h4>
            <p className="text-[10px] text-[#FBF5ED]/70 leading-tight">
              Tặng Phin Rose Gold 304 cho đơn hàng từ 500.000đ.
            </p>
            <Link
              to="/promotions"
              className="inline-flex items-center justify-center gap-1 w-full py-1.5 rounded-xl bg-gradient-to-r from-[#D4A373] to-[#E6C280] text-[#120C0A] text-[10px] font-extrabold hover:opacity-90 transition-opacity"
            >
              <span>Xem ưu đãi</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </aside>
      )}

      {/* Right Vertical Side Banner */}
      {showRight && (
        <aside
          className="fixed right-3 top-28 z-30 hidden 2xl:block w-48 rounded-2xl overflow-hidden bg-[#251B17] border border-[#D4A373]/40 shadow-2xl transition-all duration-300 animate-fade-rise"
          aria-label="Khuyến mãi bên phải"
        >
          <div className="relative h-64 overflow-hidden bg-[#1C1310]">
            <img
              src="./images/coffee_promo_right.jpg"
              alt="Vàđà Coffee Club Promo"
              className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#251B17] via-transparent to-transparent" />
            <button
              onClick={() => setShowRight(false)}
              className="absolute top-2 right-2 p-1.5 rounded-full liquid-glass text-[#FBF5ED] hover:text-[#D4A373] transition-colors"
              title="Đóng banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#E07A5F] text-[#FBF5ED] text-[9px] font-extrabold uppercase">
              Giảm 15% Bạn Mới
            </div>
          </div>

          <div className="p-3.5 space-y-2 text-center">
            <h4 className="font-serif text-xs font-bold text-[#E6C280] leading-snug">
              Vàđà Heritage Club
            </h4>
            <div className="p-1.5 rounded-lg bg-[#1C1310] border border-[#3A2B24] font-mono text-[10px] font-bold text-[#D4A373]">
              COFFEEDI-SAN
            </div>
            <button
              onClick={handleCopy}
              className={`w-full py-1.5 rounded-xl text-[10px] font-extrabold transition-all flex items-center justify-center gap-1 ${
                copiedCode ? 'bg-emerald-500 text-white' : 'bg-[#D4A373] text-[#120C0A] hover:bg-[#E6C280]'
              }`}
            >
              {copiedCode ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>Đã sao chép</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Sao chép mã 15%</span>
                </>
              )}
            </button>
          </div>
        </aside>
      )}
    </>
  );
};
