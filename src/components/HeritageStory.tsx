import React from 'react';
import { Compass, Sparkles, Sun, Award, Coffee, BookOpen } from 'lucide-react';

export const HeritageStory: React.FC = () => {
  const milestones = [
    {
      year: '1857',
      title: 'Hạt Cà Phê Đầu Tiên Cắm Rễ',
      desc: 'Cây cà phê được các linh mục người Pháp đưa vào Việt Nam, tìm thấy thổ nhưỡng hoàn hảo tại vùng đất đỏ bazan cao nguyên.',
    },
    {
      year: '1920s',
      title: 'Văn Hóa Pha Phin Sài Gòn & Hà Nội',
      desc: 'Chiếc Phin kim loại ra đời, tạo nên nhịp sống thong thả vừa ngắm từng giọt cà phê rơi vừa thưởng thức không khí phố phường.',
    },
    {
      year: '1946',
      title: 'Huyền Thoại Cà Phê Trứng Hà Thành',
      desc: 'Cụ Nguyễn Văn Giang sáng tạo ra món cà phê trứng bọt mịn huyền thoại tại khách sạn Metropole để thay thế sữa tươi khan hiếm.',
    },
    {
      year: '2026',
      title: 'Vàđà Coffee - Đưa Di Sản Ra Thế Giới',
      desc: 'Ứng dụng chuẩn Specialty 85+ SCA cho hạt Fine Robusta Đắk Lắk & Arabica Cầu Đất, khẳng định vị thế cà phê Việt Nam toàn cầu.',
    },
  ];

  return (
    <section id="heritage" className="py-20 bg-[#120C0A] relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#E07A5F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#251B17] border border-[#D4A373]/30 text-[#D4A373] text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Hành Trình Di Sản Cà Phê Việt</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FBF5ED]">
            Từng Giọt Đắng Mang Thần Thái <span className="crema-gradient-text">Đất Trời Cao Nguyên</span>
          </h2>
          <p className="text-sm text-[#FBF5ED]/70 mt-3 leading-relaxed">
            Việt Nam là thủ phủ Robusta số 1 thế giới. Chúng tôi tự hào lưu giữ quy trình chế biến mộc, tôn vinh công sức của những người nông dân Đắk Lắk &amp; Lâm Đồng.
          </p>
        </div>

        {/* Heritage Grid: Timeline & Map */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Timeline List */}
          <div className="lg:col-span-7 space-y-6">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#251B17] border border-[#3A2B24] hover:border-[#D4A373]/50 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="px-3 py-2 rounded-2xl bg-[#1C1310] border border-[#D4A373]/40 text-[#D4A373] font-serif font-extrabold text-sm shrink-0 group-hover:scale-105 transition-transform">
                  {item.year}
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#FBF5ED] group-hover:text-[#D4A373] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#FBF5ED]/70 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Origin Regions Card */}
          <div className="lg:col-span-5 bg-[#251B17] p-8 rounded-3xl border border-[#D4A373]/30 shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#3A2B24]">
              <Sun className="w-6 h-6 text-[#D4A373]" />
              <div>
                <h3 className="font-serif text-lg font-bold text-[#FBF5ED]">
                  Vùng Trồng Cà Phê Đặc Sản
                </h3>
                <p className="text-xs text-[#FBF5ED]/60">Độ cao bazan &amp; khí hậu sương mù</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#1C1310] border border-[#3A2B24] space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-[#E6C280]">
                  <span>🌋 Buôn Ma Thuột (Đắk Lắk)</span>
                  <span>Cao 800m</span>
                </div>
                <p className="text-xs text-[#FBF5ED]/60">
                  Đất đỏ Bazan cổ đại. Thủ phủ Fine Robusta hương socola &amp; caramel đắng đằm.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1C1310] border border-[#3A2B24] space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-[#E6C280]">
                  <span>🏔️ Cầu Đất (Đà Lạt)</span>
                  <span>Cao 1,650m</span>
                </div>
                <p className="text-xs text-[#FBF5ED]/60">
                  Thung lũng sương mù quanh năm. Nơi sinh trưởng của Arabica bourbon thanh nhã, thơm hoa nhài.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1C1310] border border-[#3A2B24] space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-[#E6C280]">
                  <span>👑 Cố Đô Huế &amp; Phố Cổ Hà Nội</span>
                  <span>Ẩm Thực Di Sản</span>
                </div>
                <p className="text-xs text-[#FBF5ED]/60">
                  Côi nguồn của Cà Phê Muối biển và Cà Phê Trứng bọt mịn nức tiếng.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
