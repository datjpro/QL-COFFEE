import React, { useState } from 'react';
import { Coffee, MapPin, Phone, Mail, Send, Github, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer id="footer" className="bg-[#120C0A] text-[#FBF5ED] pt-16 pb-8 border-t border-[#3A2B24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#3A2B24]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4A373] to-[#E6C280] p-0.5">
                <div className="w-full h-full bg-[#120C0A] rounded-full flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-[#D4A373]" />
                </div>
              </div>
              <span className="font-serif text-2xl font-bold text-[#FBF5ED]">
                VÀĐÀ<span className="text-[#D4A373]">.</span>COFFEE
              </span>
            </div>

            <p className="text-xs text-[#FBF5ED]/60 leading-relaxed max-w-sm">
              Thương hiệu Cà Phê Di Sản Việt Nam. Cam kết 100% hạt cà phê hái chín thủ công từ Đắk Lắk &amp; Cầu Đất, giữ trọn hương vị đậm đà truyền thống.
            </p>

            <div className="space-y-1.5 text-xs text-[#FBF5ED]/70">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>Trụ sở chính: 123 Tràng Tiền, Q. Hoàn Kiếm, Hà Nội</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>Hotline đặt hàng 2H: 1900 6868</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>Email hỗ trợ: cskh@vadacoffee.vn</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#D4A373] uppercase tracking-wider">
              Danh Mục Sản Phẩm
            </h4>
            <ul className="space-y-2 text-xs text-[#FBF5ED]/70">
              <li><a href="#catalog" className="hover:text-[#D4A373]">Arabica Cầu Đất Specialty</a></li>
              <li><a href="#catalog" className="hover:text-[#D4A373]">Fine Robusta Đắk Lắk</a></li>
              <li><a href="#catalog" className="hover:text-[#D4A373]">Cà Phê Muối Cố Đô Huế</a></li>
              <li><a href="#catalog" className="hover:text-[#D4A373]">Set Cà Phê Trứng Hà Nội</a></li>
              <li><a href="#catalog" className="hover:text-[#D4A373]">Phin Inox Rose Gold 304</a></li>
            </ul>
          </div>

          {/* Branch Locator */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#D4A373] uppercase tracking-wider">
              Hệ Thống Phủ Sóng
            </h4>
            <ul className="space-y-2 text-xs text-[#FBF5ED]/70">
              <li>📍 <strong>Hà Nội:</strong> 123 Tràng Tiền, Hoàn Kiếm</li>
              <li>📍 <strong>Sài Gòn:</strong> 45 Lý Tự Trọng, Quận 1</li>
              <li>📍 <strong>Đà Lạt:</strong> 12 Trần Phú, Phường 3</li>
              <li>📍 <strong>Đà Nẵng:</strong> 88 Bạch Đằng, Hải Châu</li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#D4A373] uppercase tracking-wider">
              Nhận Ưu Đãi 15%
            </h4>
            <p className="text-xs text-[#FBF5ED]/60">
              Đăng ký email để nhận mã giảm giá <strong className="text-[#E6C280]">COFFEEDI-SAN</strong> cho đơn hàng đầu tiên.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Nhập email của bạn..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1C1310] text-[#FBF5ED] text-xs px-3 py-2.5 rounded-xl border border-[#3A2B24] focus:outline-none focus:border-[#D4A373]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#D4A373] text-[#120C0A] rounded-lg text-xs font-bold hover:bg-[#E6C280]"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400">
                  ✓ Đăng ký thành công! Mã ưu đãi: COFFEEDI-SAN
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Copyright & Tech Info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FBF5ED]/50 gap-4">
          <p>© 2026 Vàđà Coffee Vietnam. Được thiết kế chuyên nghiệp theo chuẩn UI-PROMPT-ENGINEERING-SKILL.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#D4A373]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Sẵn sàng chạy Demo trên GitHub Pages
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
