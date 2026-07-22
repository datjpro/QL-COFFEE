import React, { useState } from 'react';
import { Tag, Gift, Sparkles, Copy, Check, ArrowRight, ShieldCheck, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PromotionsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const campaigns = [
    {
      id: 'camp-1',
      badge: 'Chương Trình Khai Xuân',
      title: 'Tặng Phin Inox 304 Rose Gold Mạ Vàng',
      desc: 'Áp dụng cho mọi đơn hàng từ 500.000đ. Phin được đục lỗ vi mô 0.5mm mạ vàng PVD không rỉ cao cấp.',
      code: 'PHINGOLD500K',
      discount: 'Tặng Phin 180k',
      expiry: '31/08/2026',
      image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 'camp-2',
      badge: 'Ưu Đãi Bạn Mới',
      title: 'Giảm 15% Đơn Hàng Đầu Tiên',
      desc: 'Thưởng thức các dòng hạt mộc Cầu Đất & Đắk Lắk tuyển chọn với ưu đãi đặc quyền người yêu cà phê mới.',
      code: 'COFFEEDI-SAN',
      discount: 'Giảm 15% Tổng đơn',
      expiry: 'Vĩnh viễn',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 'camp-3',
      badge: 'Chiến Dịch Bền Vững ECO',
      title: 'Đổi Phin Cũ - Nhận Voucher Phin Mạ Vàng',
      desc: 'Mang chiếc Phin cà phê cũ bất kỳ tới showroom Hà Nội / Sài Gòn / Đà Lạt để đổi Voucher 50.000đ mua Phin Mạ Vàng Rose Gold mới.',
      code: 'ECOPHIN50K',
      discount: 'Giảm 50.000đ',
      expiry: '31/12/2026',
      icon: <Recycle className="w-5 h-5 text-emerald-400" />,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 'camp-4',
      badge: 'Combo Thử Vị 3 Miền',
      title: 'Bộ Tuyển Chọn Đắk Lắk, Cầu Đất & Cố Đồ Huế',
      desc: 'Tiết kiệm 20% khi đặt combo 3 hũ rang mộc đặc sản kèm công thức pha chuẩn từ Barista.',
      code: 'COMBOHERITAGE',
      discount: 'Tiết kiệm 20%',
      expiry: 'Hàng tháng',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#251B17] border border-[#D4A373]/30 text-[#D4A373] text-xs font-semibold uppercase tracking-wider mb-3">
          <Gift className="w-3.5 h-3.5" />
          <span>Chiến Dịch Khuyến Mãi &amp; Tri Ân</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#FBF5ED]">
          Ưu Đãi <span className="crema-gradient-text">Cà Phê Di Sản</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#FBF5ED]/70 mt-2">
          Các chương trình tri ân được thiết kế tinh tế, không làm phiền trải nghiệm thưởng thức cà phê của bạn.
        </p>
      </div>

      {/* Campaign Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {campaigns.map((camp) => (
          <div
            key={camp.id}
            className="rounded-3xl bg-[#251B17] border border-[#3A2B24] overflow-hidden flex flex-col justify-between hover:border-[#D4A373]/50 transition-all duration-300 shadow-xl group"
          >
            <div>
              {/* Campaign Image */}
              <div className="relative h-48 w-full overflow-hidden bg-[#1C1310]">
                <img
                  src={camp.image}
                  alt={camp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#D4A373] text-[#120C0A] text-xs font-extrabold uppercase shadow">
                  {camp.badge}
                </div>
              </div>

              {/* Campaign Details */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#E6C280] font-bold">
                  <span>Mức ưu đãi: {camp.discount}</span>
                  <span className="text-[#FBF5ED]/40 font-normal">Hạn dùng: {camp.expiry}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#FBF5ED] group-hover:text-[#D4A373] transition-colors">
                  {camp.title}
                </h3>

                <p className="text-xs text-[#FBF5ED]/70 leading-relaxed">
                  {camp.desc}
                </p>
              </div>
            </div>

            {/* Code Copy & CTA Footer */}
            <div className="p-6 pt-0 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#1C1310] border border-[#3A2B24] font-mono text-xs font-bold text-[#E6C280]">
                <Tag className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>{camp.code}</span>
              </div>

              <button
                onClick={() => handleCopy(camp.code)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  copiedCode === camp.code
                    ? 'bg-emerald-500 text-white'
                    : 'bg-[#D4A373] text-[#120C0A] hover:bg-[#E6C280]'
                }`}
              >
                {copiedCode === camp.code ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Đã chép mã</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Sao chép mã</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA to Products */}
      <div className="mt-16 text-center bg-[#1C1310] p-8 rounded-3xl border border-[#3A2B24]">
        <h3 className="font-serif text-xl font-bold text-[#FBF5ED]">Sẵn sàng trải nghiệm vị đầm nguyên bản?</h3>
        <p className="text-xs text-[#FBF5ED]/60 mt-1 mb-4">Áp dụng mã ưu đãi vừa chép trực tiếp trong giỏ hàng của bạn.</p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#E6C280] text-[#120C0A] font-extrabold text-xs hover:scale-105 transition-transform"
        >
          <span>Khám phá sản phẩm ngay</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
