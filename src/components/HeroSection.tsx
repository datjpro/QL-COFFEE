import React from 'react';
import { ArrowRight, Flame, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#120C0A] via-[#1C1310] to-[#120C0A]">
      
      {/* Background Ambient Glow & Steam Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4A373]/10 rounded-full blur-[120px] pointer-events-none animate-crema-pulse" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#E07A5F]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Steam lines floating upwards */}
      <div className="absolute top-1/3 left-1/4 w-1 h-20 bg-gradient-to-t from-transparent via-[#FBF5ED]/20 to-transparent animate-steam-1 rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-28 bg-gradient-to-t from-transparent via-[#D4A373]/30 to-transparent animate-steam-2 rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-1 h-16 bg-gradient-to-t from-transparent via-[#E6C280]/20 to-transparent animate-steam-3 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#251B17] border border-[#D4A373]/30 text-[#D4A373] text-xs font-semibold uppercase tracking-wider shadow-inner">
              <Flame className="w-4 h-4 text-[#E07A5F] animate-pulse" />
              <span>Di Sản Cà Phê Việt • Hái Chín 100% Thủ Công</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-[#FBF5ED]">
              Tươi Nguyên Vẹn Vị <br />
              <span className="crema-gradient-text">Cà Phê Cao Nguyên</span> Việt Nam
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#FBF5ED]/70 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Từ những nông trường <strong className="text-[#D4A373]">Đắk Lắk</strong> &amp; <strong className="text-[#D4A373]">Cầu Đất</strong> ở độ cao 1,650m. Chúng tôi gin giữ phương pháp rang mộc thủ công, mang đến ly cà phê phin đậm đà chuẩn gu Việt.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#catalog"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4A373] via-[#E6C280] to-[#D4A373] text-[#120C0A] font-bold text-sm hover:shadow-[0_0_25px_rgba(212,163,115,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Khám Phá Các Loại Hạt</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#phin-customizer"
                className="w-full sm:w-auto px-8 py-4 rounded-full liquid-glass text-[#FBF5ED] hover:text-[#D4A373] font-semibold text-sm hover:border-[#D4A373]/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Trải Nghiệm Pha Phin 3D</span>
              </a>
            </div>

            {/* Feature Bullet Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#3A2B24]/60 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#D4A373] shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-bold text-[#FBF5ED]">100% Fine Robusta</p>
                  <p className="text-[10px] text-[#FBF5ED]/50">Chọn lọc kỹ càng</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#D4A373] shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-bold text-[#FBF5ED]">Rang Mộc Mới</p>
                  <p className="text-[10px] text-[#FBF5ED]/50">Trong 48 giờ</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-5 h-5 text-[#D4A373] shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-bold text-[#FBF5ED]">Giao Nhanh 2H</p>

                  <p className="text-[10px] text-[#FBF5ED]/50">Nội thành Toàn quốc</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#D4A373]/20 via-transparent to-[#E07A5F]/20 blur-xl" />

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-[#D4A373]/30 shadow-2xl bg-[#251B17] group">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&auto=format&fit=crop&q=80"
                  alt="Ly Cà Phê Di Sản Việt Nam"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120C0A] via-[#120C0A]/20 to-transparent" />

                {/* Floating Tag 1: Specialty Quality */}
                <div className="absolute top-4 left-4 liquid-glass px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold text-[#FBF5ED]">Specialty Grade (85+ SCA)</span>
                </div>

                {/* Floating Tag 2: Best Seller Highlight */}
                <div className="absolute bottom-6 left-6 right-6 liquid-glass p-4 rounded-2xl border border-[#D4A373]/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-[#D4A373]">Sản Phẩm Nổi Bật</p>
                      <h4 className="text-base font-bold text-[#FBF5ED]">Arabica Cầu Đất Honey</h4>
                      <p className="text-xs text-[#FBF5ED]/70">Hương hoa nhài &amp; Hậu vị mật ong</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-[#E6C280]">185.000đ</span>
                      <span className="block text-[10px] text-[#FBF5ED]/40 line-through">220.000đ</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
