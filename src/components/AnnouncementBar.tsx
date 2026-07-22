import React, { useState } from 'react';
import { Tag, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnnouncementBar: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-[#D4A373] via-[#E6C280] to-[#D4A373] text-[#120C0A] text-xs font-bold py-1.5 px-4 relative z-50 flex items-center justify-between shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center text-[11px] sm:text-xs">
        <Sparkles className="w-3.5 h-3.5 shrink-0 animate-pulse" />
        <span>Ưu đãi Cà Phê Di Sản: Nhập mã <u className="font-extrabold tracking-wider">COFFEEDI-SAN</u> giảm ngay 15% + Miễn phí vận chuyển đơn từ 300k!</span>
        <Link to="/promotions" className="underline ml-2 hover:opacity-80">
          Xem chi tiết →
        </Link>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="p-1 hover:bg-black/10 rounded-full transition-colors ml-2"
        aria-label="Đóng thông báo"
      >
        <X className="w-3.5 h-3.5 text-[#120C0A]" />
      </button>
    </div>
  );
};
