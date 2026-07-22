import React, { useState } from 'react';
import { BookOpen, Sparkles, Compass, Flame, Droplets, Award, Search, ChevronRight, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export const KnowledgePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'processing' | 'terroir' | 'recipes' | 'glossary'>('comparison');
  const [searchFilter, setSearchFilter] = useState('');

  const glossaries = [
    { term: 'Specialty Coffee (Cà phê Đặc Sản)', desc: 'Cà phê đạt từ 85 điểm trở lên trên thang điểm 100 theo tiêu chuẩn của Hiệp hội Cà phê Đặc sản Thế giới (SCA).' },
    { term: 'Fine Robusta', desc: 'Dòng hạt Robusta chất lượng cao, hái chín 100% thủ công, không lỗi hạt, mang vị ngọt đằm và hương socola nguyên bản.' },
    { term: 'Bloom Time (Thời gian nở)', desc: 'Giai đoạn rót 20% lượng nước nóng đầu tiên vào bột cà phê trong 30-45 giây để giải phóng CO2 trước khi chiết xuất.' },
    { term: 'Honey Process (Chế biến Mật ong)', desc: 'Quy trình sơ chế giữ lại một phần lớp nhầy đường của vỏ trái cà phê khi phơi nắng, tạo hậu vị ngọt lịm như mật.' },
    { term: 'Terroir (Thổ dưỡng & Khí hậu)', desc: 'Tổng hòa yếu tố tự nhiên gồm độ cao, loại đất bazan, nhiệt độ ban đêm và lượng mưa tạo nên hương vị đặc trưng của vùng trồng.' },
    { term: 'Chlorogenic Acid (CGA)', desc: 'Hợp chất chống oxy hóa tự nhiên có hàm lượng rất cao trong hạt Fine Robusta Việt Nam.' },
  ];

  const filteredGlossary = glossaries.filter(
    (g) => g.term.toLowerCase().includes(searchFilter.toLowerCase()) || g.desc.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#251B17] border border-[#D4A373]/30 text-[#D4A373] text-xs font-semibold uppercase tracking-wider mb-3">
          <BookOpen className="w-3.5 h-3.5 text-[#E6C280]" />
          <span>Bách Khoa Toàn Thư Cà Phê Việt</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#FBF5ED]">
          Cẩm Nang &amp; <span className="crema-gradient-text">Kiến Thức Chuyên Sâu</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#FBF5ED]/70 mt-3 leading-relaxed">
          Khám phá sự khác biệt giữa Robusta &amp; Arabica, các phương pháp sơ chế thủ công, bản đồ thổ nhưỡng cao nguyên và công thức pha chế di sản.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#3A2B24] scrollbar-none">
        <button
          onClick={() => setActiveTab('comparison')}
          className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'comparison'
              ? 'bg-[#D4A373] text-[#120C0A] shadow-lg'
              : 'bg-[#251B17] text-[#FBF5ED]/70 hover:text-[#FBF5ED]'
          }`}
        >
          ⚖️ Robusta vs. Arabica
        </button>

        <button
          onClick={() => setActiveTab('processing')}
          className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'processing'
              ? 'bg-[#D4A373] text-[#120C0A] shadow-lg'
              : 'bg-[#251B17] text-[#FBF5ED]/70 hover:text-[#FBF5ED]'
          }`}
        >
          ☀️ Phương Pháp Sơ Chế
        </button>

        <button
          onClick={() => setActiveTab('terroir')}
          className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'terroir'
              ? 'bg-[#D4A373] text-[#120C0A] shadow-lg'
              : 'bg-[#251B17] text-[#FBF5ED]/70 hover:text-[#FBF5ED]'
          }`}
        >
          🌋 Bản Đồ Thổ Nhượng
        </button>

        <button
          onClick={() => setActiveTab('recipes')}
          className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'recipes'
              ? 'bg-[#D4A373] text-[#120C0A] shadow-lg'
              : 'bg-[#251B17] text-[#FBF5ED]/70 hover:text-[#FBF5ED]'
          }`}
        >
          ☕ Công Thức Di Sản
        </button>

        <button
          onClick={() => setActiveTab('glossary')}
          className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'glossary'
              ? 'bg-[#D4A373] text-[#120C0A] shadow-lg'
              : 'bg-[#251B17] text-[#FBF5ED]/70 hover:text-[#FBF5ED]'
          }`}
        >
          📖 Thuật Ngữ Cà Phê
        </button>
      </div>

      {/* TAB 1: ROBUSTA VS ARABICA COMPARISON */}
      {activeTab === 'comparison' && (
        <div className="space-y-8 animate-fade-rise">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fine Robusta Box */}
            <div className="p-8 rounded-3xl bg-[#251B17] border border-[#D4A373]/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#1C1310] text-[#D4A373] text-xs font-bold border border-[#3A2B24]">
                  Thủ Phủ Đắk Lắk (800m)
                </span>
                <span className="text-xl">🇻🇳</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#FBF5ED]">
                Fine Robusta (Cà Phê Vối)
              </h3>
              <p className="text-xs text-[#FBF5ED]/70 leading-relaxed">
                Đặc trưng bởi hàm lượng Caffeine cao gấp đôi, thể tích sánh dày, lớp Crema bồng bềnh và nốt hương Socola đắng ngọt kéo dài. Hoàn hảo cho phong cách Phin Sữa Đá truyền thống.
              </p>
              <ul className="space-y-2 text-xs text-[#FBF5ED]/80 pt-2 border-t border-[#3A2B24]">
                <li>⚡ <strong>Caffeine:</strong> 2.2% – 2.7% (Đậm tỉnh táo)</li>
                <li>🍯 <strong>Hàm lượng đường:</strong> 3% – 7%</li>
                <li>🍫 <strong>Hương vị chính:</strong> Socola đắng, Hạt dẻ rang, Mật mía</li>
                <li>☕ <strong>Dòng Crema:</strong> Vàng đậm sánh mịn, rất dày</li>
              </ul>
            </div>

            {/* Specialty Arabica Box */}
            <div className="p-8 rounded-3xl bg-[#251B17] border border-[#E6C280]/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#1C1310] text-[#E6C280] text-xs font-bold border border-[#3A2B24]">
                  Cao Nguyên Cầu Đất (1.650m)
                </span>
                <span className="text-xl">🌸</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#FBF5ED]">
                Arabica Specialty (Cà Phê Chè)
              </h3>
              <p className="text-xs text-[#FBF5ED]/70 leading-relaxed">
                Sinh trưởng ở độ cao sương mù Cầu Đất. Hạt có vị chua thanh thoát của trái cây chín chín tự nhiên, hương thơm hoa nhài tinh khiết và hậu vị mật ong dại thanh lịch.
              </p>
              <ul className="space-y-2 text-xs text-[#FBF5ED]/80 pt-2 border-t border-[#3A2B24]">
                <li>🌿 <strong>Caffeine:</strong> 1.1% – 1.5% (Êm dịu)</li>
                <li>🍯 <strong>Hàm lượng đường:</strong> 6% – 9% (Ngọt thanh)</li>
                <li>🌸 <strong>Hương vị chính:</strong> Trái cây chín, Hoa trắng, Mật ong</li>
                <li>☕ <strong>Chiết xuất phù hợp:</strong> Pour-over, Chemex, Phin mộc</li>
              </ul>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-3xl bg-[#1C1310] border border-[#3A2B24] p-6">
            <h4 className="font-serif text-lg font-bold text-[#D4A373] mb-4">
              Bảng So Sánh Chỉ Số Kỹ Thuật
            </h4>
            <table className="w-full text-left text-xs text-[#FBF5ED]/80">
              <thead>
                <tr className="border-b border-[#3A2B24] text-[#D4A373]">
                  <th className="py-3 px-4">Đặc tính</th>
                  <th className="py-3 px-4">Fine Robusta Đắk Lắk</th>
                  <th className="py-3 px-4">Arabica Cầu Đất</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3A2B24]">
                <tr>
                  <td className="py-3 px-4 font-semibold">Độ cao vùng trồng</td>
                  <td className="py-3 px-4">500m – 900m</td>
                  <td className="py-3 px-4 text-[#E6C280]">1.400m – 1.650m</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Hình dáng hạt</td>
                  <td className="py-3 px-4">Tròn nhỏ, rãnh thẳng</td>
                  <td className="py-3 px-4">Dài thon, rãnh lượn sóng S</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Độ chua (Acidity)</td>
                  <td className="py-3 px-4">Rất thấp (1/5)</td>
                  <td className="py-3 px-4 text-[#E6C280]">Chua thanh mượt (4/5)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Thể chất (Body)</td>
                  <td className="py-3 px-4 text-[#E6C280]">Rất dầy sánh (5/5)</td>
                  <td className="py-3 px-4">Nhẹ nhàng thanh thoát (3/5)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: PROCESSING METHODS */}
      {activeTab === 'processing' && (
        <div className="grid md:grid-cols-3 gap-6 animate-fade-rise">
          <div className="p-6 rounded-3xl bg-[#251B17] border border-[#3A2B24] space-y-3">
            <span className="text-2xl">☀️</span>
            <h3 className="font-serif text-lg font-bold text-[#FBF5ED]">Sơ Chế Khô (Natural)</h3>
            <p className="text-xs text-[#FBF5ED]/70 leading-relaxed">
              Trái cà phê hái chín được phơi nguyên vỏ dưới ánh nắng cao nguyên từ 20-30 ngày. Tạo nên vị ngọt đằm của mứt trái cây chín và thể chất sánh kẹo.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#251B17] border border-[#3A2B24] space-y-3">
            <span className="text-2xl">🍯</span>
            <h3 className="font-serif text-lg font-bold text-[#FBF5ED]">Sơ Chế Mật Ong (Honey)</h3>
            <p className="text-xs text-[#FBF5ED]/70 leading-relaxed">
              Tách bỏ lớp vỏ ngoài nhưng giữ lại lớp thịt nhầy đường bao quanh hạt khi phơi. Hạt thu được có màu vàng như mật và hậu vị ngọt lịm kéo dài.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#251B17] border border-[#3A2B24] space-y-3">
            <span className="text-2xl">💧</span>
            <h3 className="font-serif text-lg font-bold text-[#FBF5ED]">Sơ Chế Ứớt (Washed)</h3>
            <p className="text-xs text-[#FBF5ED]/70 leading-relaxed">
              Lên men bóc tách hoàn toàn lớp nhầy bằng nước sạch trước khi sấy. Mang lại tách cà phê cực kỳ sạch vị, tôn vinh độ chua thanh thoát tựa hoa nhài.
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: REGIONAL TERROIRS */}
      {activeTab === 'terroir' && (
        <div className="space-y-6 animate-fade-rise">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-[#251B17] border border-[#3A2B24] space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-[#D4A373]">
                <span>🌋 Đắk Lắk - Thủ Phủ Robusta</span>
                <span>Độ cao 800m</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FBF5ED]">Đất Đỏ Bazan Cổ Đại</h3>
              <p className="text-xs text-[#FBF5ED]/70 leading-relaxed">
                Tầng đất bazan màu mỡ giàu khoáng chất kết hợp với 2 mùa mưa nắng rõ rệt. Nơi sản sinh ra những hạt Fine Robusta đạt giải thưởng quốc tế.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#251B17] border border-[#3A2B24] space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-[#E6C280]">
                <span>🏔️ Cầu Đất (Đà Lạt) - Thánh Địa Arabica</span>
                <span>Độ cao 1.650m</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FBF5ED]">Thung Lũng Sương Mù</h3>
              <p className="text-xs text-[#FBF5ED]/70 leading-relaxed">
                Nhiệt độ ban đêm hạ sâu dưới 15°C giúp trái cà phê tích tụ hàm lượng đường tự nhiên vượt trội, mang lại hương hoa nhài độc nhất vô nhị.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: HERITAGE RECIPES */}
      {activeTab === 'recipes' && (
        <div className="grid md:grid-cols-2 gap-8 animate-fade-rise">
          {/* Egg Coffee Recipe */}
          <div className="p-8 rounded-3xl bg-[#251B17] border border-[#D4A373]/40 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#1C1310] text-[#E6C280] text-xs font-bold">
                Hà Nội 1946
              </span>
              <span className="text-xl">🍳</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#FBF5ED]">
              Công Thức Cà Phê Trứng Hà Thành
            </h3>
            <div className="space-y-2 text-xs text-[#FBF5ED]/80">
              <p><strong>Nguyên liệu:</strong> 25g cà phê phin đậm, 2 lòng đỏ trứng gà tươi, 20ml sữa đặc, 3 giọt rum nhẹ.</p>
              <p><strong>Bí quyết:</strong> Đánh lòng đỏ trứng cùng sữa đặc và rum trong 4 phút bằng phới điện cho đến khi bọt bông mịn cứng, không còn mùi tanh. Rót cốt cà phê phin nóng vào giữa để bọt trứng nổi lên.</p>
            </div>
          </div>

          {/* Salt Coffee Recipe */}
          <div className="p-8 rounded-3xl bg-[#251B17] border border-[#D4A373]/40 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#1C1310] text-[#D4A373] text-xs font-bold">
                Huế Cố Đô
              </span>
              <span className="text-xl">🧂</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#FBF5ED]">
              Công Thức Cà Phê Muối Xứ Huế
            </h3>
            <div className="space-y-2 text-xs text-[#FBF5ED]/80">
              <p><strong>Nguyên liệu:</strong> 25g cà phê mộc rang đậm, 30ml whipping cream, 10ml sữa đặc, 0.5g muối biển sâu.</p>
              <p><strong>Bí quyết:</strong> Đánh bông nhẹ whipping cream cùng muối biển tới độ sệt mịn. Rót lớp cream muối lên trên ly cà phê phin nhỏ từng giọt. Khi uống lắc nhẹ để vị đắng hòa quyện mặn béo.</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: GLOSSARY */}
      {activeTab === 'glossary' && (
        <div className="space-y-6 animate-fade-rise">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Tra cứu thuật ngữ (SCA, Bloom, Honey, Crema...)"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full bg-[#1C1310] text-[#FBF5ED] text-xs px-4 py-3 pl-10 rounded-2xl border border-[#3A2B24] focus:outline-none focus:border-[#D4A373]"
            />
            <Search className="w-4 h-4 text-[#D4A373] absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {filteredGlossary.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#251B17] border border-[#3A2B24] space-y-1">
                <h4 className="font-bold text-xs text-[#E6C280]">{item.term}</h4>
                <p className="text-xs text-[#FBF5ED]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Knowledge Footer CTA */}
      <div className="mt-16 text-center bg-[#1C1310] p-8 rounded-3xl border border-[#3A2B24]">
        <h3 className="font-serif text-xl font-bold text-[#FBF5ED]">Muốn áp dụng kiến thức vào thực tế?</h3>
        <p className="text-xs text-[#FBF5ED]/60 mt-1 mb-4">Thử ngay bộ giả lập tỷ lệ pha chế Virtual Phin Lab của chúng tôi.</p>
        <Link
          to="/customizer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#E6C280] text-[#120C0A] font-extrabold text-xs hover:scale-105 transition-transform"
        >
          <span>Trải nghiệm Pha Phin Virtual</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
