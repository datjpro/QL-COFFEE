import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      name: 'Trần Minh Hoàng',
      role: 'Barista & Coffee Lover (Sài Gòn)',
      comment: 'Hạt Arabica Cầu Đất rang mộc rất tròn vị. Thơm nức mùi hoa trắng và hậu vị ngọt lịm. Pha Pour-over hay Espresso đều đỉnh!',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      rating: 5,
      productName: 'Arabica Cầu Đất Specialty',
    },
    {
      name: 'Nguyễn Thị Hương',
      role: 'Khách hàng thân thiết (Hà Nội)',
      comment: 'Cà Phê Muối đóng chai cực kỳ béo ngậy. Đặt giao hàng 2h nhận được chai lạnh ngắt, kem muối mặn nhẹ hòa với vị cà phê phin đằm.',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80',
      rating: 5,
      productName: 'Cà Phê Muối Cố Đô Huế',
    },
    {
      name: 'Phạm Đức Anh',
      role: 'Kiến trúc sư (Đà Nẵng)',
      comment: 'Chiếc Phin Mạ Vàng PVD đục lỗ vi mô pha cực kỳ đều, không hề bị nghẽn giọt. Bộ hộp quà thùng gỗ mua biếu sếp khen hết lời!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
      rating: 5,
      productName: 'Hộp Quà Cà Phê Di Sản',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-[#1C1310] border-t border-[#3A2B24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#251B17] border border-[#D4A373]/30 text-[#D4A373] text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-[#D4A373]" />
            <span>18.500+ Khách Hàng Hài Lòng</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#FBF5ED]">
            Cảm Nhận Từ <span className="crema-gradient-text">Tín Đồ Cà Phê</span> Việt
          </h2>
        </div>

        {/* Reviews Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#251B17] border border-[#3A2B24] flex flex-col justify-between space-y-4 hover:border-[#D4A373]/50 transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-[#D4A373]/20 absolute top-4 right-4" />
              
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#E6C280]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E6C280] text-transparent" />
                  ))}
                </div>
                <p className="text-xs text-[#FBF5ED]/80 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#3A2B24] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#D4A373]"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#FBF5ED] flex items-center gap-1">
                      <span>{rev.name}</span>
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                    </h4>
                    <p className="text-[10px] text-[#FBF5ED]/50">{rev.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
