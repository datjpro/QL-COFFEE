import React from 'react';
import { HeritageStory } from '../components/HeritageStory';
import { MapPin, Phone, Mail, Award, ShieldCheck, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      
      {/* About Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#251B17] border border-[#D4A373]/30 text-[#D4A373] text-xs font-semibold uppercase tracking-wider mb-2">
          <Award className="w-3.5 h-3.5" />
          <span>Về Chúng Tôi</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#FBF5ED]">
          Gìn Giữ &amp; Tôn Vinh <span className="crema-gradient-text">Cà Phê Di Sản Việt Nam</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#FBF5ED]/70 mt-3 leading-relaxed">
          Vàđà Coffee ra đời từ tình yêu sâu sắc với đất trời cao nguyên Việt Nam. Chúng tôi cam kết 100% hạt cà phê hái chín thủ công, rang mộc và bảo tồn tinh hoa văn hóa pha Phin truyền thống.
        </p>
      </div>

      {/* Philosophy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-[#251B17] border border-[#3A2B24] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#1C1310] border border-[#D4A373]/40 flex items-center justify-center text-[#D4A373]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#FBF5ED]">100% Hái Chín Thủ Công</h3>
            <p className="text-xs text-[#FBF5ED]/60 leading-relaxed">
              Từng trái cà phê đỏ mọng được người nông dân hái tỉ mỉ bằng tay tại Đắk Lắk &amp; Cầu Đất, loại bỏ hoàn toàn hạt xanh chát.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#251B17] border border-[#3A2B24] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#1C1310] border border-[#D4A373]/40 flex items-center justify-center text-[#D4A373]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#FBF5ED]">Rang Mộc Mới 48H</h3>
            <p className="text-xs text-[#FBF5ED]/60 leading-relaxed">
              Không hương liệu tổng hợp, không độn bơ hay đậu nành. Rang mộc thủ công trong mẻ nhỏ giữ trọn hương vị nguyên bản.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#251B17] border border-[#3A2B24] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#1C1310] border border-[#D4A373]/40 flex items-center justify-center text-[#D4A373]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#FBF5ED]">Phát Triển Bền Vững</h3>
            <p className="text-xs text-[#FBF5ED]/60 leading-relaxed">
              Hỗ trợ sinh kế người nông dân vùng cao, áp dụng mô hình nông nghiệp tuần hoàn và giảm thiểu túi rác nhựa.
            </p>
          </div>
        </div>
      </div>

      {/* Heritage Timeline Component */}
      <HeritageStory />

    </div>
  );
};
