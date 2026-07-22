import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

export const CoffeeSearchEmpty: React.FC = () => {
  return (
    <div className="text-center py-16 px-4 bg-[#1C1310] rounded-3xl border border-[#3A2B24] max-w-md mx-auto my-8">
      <div className="w-16 h-16 rounded-full bg-[#251B17] border border-[#3A2B24] flex items-center justify-center mx-auto mb-4 text-[#D4A373]">
        <SearchX className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-serif font-bold text-[#FBF5ED] mb-2">
        Không tìm thấy hạt cà phê phù hợp
      </h3>
      <p className="text-xs text-[#FBF5ED]/60 mb-6 leading-relaxed">
        Rất tiếc, không có sản phẩm nào khớp với tìm kiếm của bạn. Hãy thử chọn mức rang hoặc danh mục khác xem sao!
      </p>
      <button
        onClick={() => window.location.reload()}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4A373] text-[#120C0A] text-xs font-bold hover:bg-[#E6C280] transition-colors"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Đặt lại bộ lọc</span>
      </button>
    </div>
  );
};
