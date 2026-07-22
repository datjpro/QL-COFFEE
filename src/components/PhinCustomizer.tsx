import React, { useState } from 'react';
import { Sparkles, Droplets, Thermometer, Timer, Coffee, Plus, Check } from 'lucide-react';
import { CoffeeProduct } from '../types/coffee';

interface PhinCustomizerProps {
  onAddToCart: (customProduct: CoffeeProduct, grind: string) => void;
}

export const PhinCustomizer: React.FC<PhinCustomizerProps> = ({ onAddToCart }) => {
  const [beanRatio, setBeanRatio] = useState<number>(70); // 70% Robusta, 30% Arabica
  const [coffeeGram, setCoffeeGram] = useState<number>(25); // 20g - 35g
  const [milkGram, setMilkGram] = useState<number>(30); // 0g - 45g condensed milk
  const [waterTemp, setWaterTemp] = useState<number>(94); // 90C - 98C
  const [addedCustom, setAddedCustom] = useState(false);

  // Computed properties
  const waterVolume = coffeeGram * 4; // 1:4 traditional ratio for Phin
  const caffeineMg = Math.round(coffeeGram * (beanRatio * 0.022 + (100 - beanRatio) * 0.012));
  const estimatedBrewTime = '4 - 5 phút';

  const formatVND = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const handleOrderCustomBlend = () => {
    const customProd: CoffeeProduct = {
      id: `custom-${Date.now()}`,
      name: `Phối Trộn Phin Cá Nhân (${beanRatio}% Robusta / ${100 - beanRatio}% Arabica)`,
      subtitle: `Tỷ lệ ${coffeeGram}g bột + ${milkGram}ml sữa đặc đặc chế`,
      category: 'beans',
      price: 190000,
      rating: 5.0,
      reviewCount: 1,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
      roastLevel: 'Phối Trộn (Blend)',
      origin: 'Custom Blend Đắk Lắk & Cầu Đất',
      flavorNotes: [
        beanRatio > 60 ? 'Đậm đà chuẩn Phin' : 'Thanh mượt thơm hoa',
        milkGram > 20 ? 'Ngọt béo đằm' : 'Đắng mộc nguyên chất',
        `Caffeine ~${caffeineMg}mg`,
      ],
      acidity: Math.round((100 - beanRatio) / 25),
      body: Math.round(beanRatio / 20),
      sweetness: Math.round(milkGram / 10),
      description: `Công thức tùy chỉnh riêng theo gu của bạn: ${coffeeGram}g bột cà phê, chiết xuất ${waterVolume}ml nước ở ${waterTemp}°C.`,
      brewingRecommendation: 'Pha với Phin Inox mạ vàng đi kèm.',
      inStock: true,
    };

    onAddToCart(customProd, 'Pha Phin (Medium-Coarse)');
    setAddedCustom(true);
    setTimeout(() => setAddedCustom(false), 2000);
  };

  return (
    <section id="phin-customizer" className="py-20 bg-[#1C1310] relative overflow-hidden border-y border-[#3A2B24]">
      
      {/* Background steam glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4A373]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#251B17] border border-[#D4A373]/30 text-[#D4A373] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Công Nghệ Phối Vị Virtual Phin</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FBF5ED]">
            Tự Thiết Kế Tỷ Lệ <span className="crema-gradient-text">Cà Phê Phin</span> Theo Gu
          </h2>
          <p className="text-sm text-[#FBF5ED]/70 mt-2">
            Điều chỉnh tỷ lệ Robusta/Arabica, lượng sữa đặc và nhiệt độ để xem dự đoán hương vị và lượng Caffeine chiết xuất thực tế.
          </p>
        </div>

        {/* Customizer Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 bg-[#251B17] p-6 sm:p-8 rounded-3xl border border-[#3A2B24] space-y-6">
            
            {/* Slider 1: Robusta vs Arabica Ratio */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-[#FBF5ED]">Tỷ lệ Hạt Rang:</span>
                <span className="text-[#D4A373]">
                  {beanRatio}% Robusta • {100 - beanRatio}% Arabica
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={beanRatio}
                onChange={(e) => setBeanRatio(Number(e.target.value))}
                className="w-full h-2 bg-[#120C0A] rounded-lg appearance-none cursor-pointer accent-[#D4A373]"
              />
              <div className="flex justify-between text-[11px] text-[#FBF5ED]/40">
                <span>100% Arabica Cầu Đất (Thanh mượt)</span>
                <span>100% Fine Robusta (Đậm đà)</span>
              </div>
            </div>

            {/* Slider 2: Coffee Grams */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-[#FBF5ED]">Lượng Cà Phê (g):</span>
                <span className="text-[#E6C280] font-bold">{coffeeGram} gram (Cần ~{waterVolume}ml nước)</span>
              </div>
              <input
                type="range"
                min="15"
                max="35"
                step="1"
                value={coffeeGram}
                onChange={(e) => setCoffeeGram(Number(e.target.value))}
                className="w-full h-2 bg-[#120C0A] rounded-lg appearance-none cursor-pointer accent-[#D4A373]"
              />
            </div>

            {/* Slider 3: Condensed Milk */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-[#FBF5ED]">Sữa Đặc Ngôi Sao Phương Nam (ml):</span>
                <span className="text-[#D4A373]">{milkGram} ml ({milkGram === 0 ? 'Cà phê đen mộc' : 'Độ ngọt vừa'})</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="5"
                value={milkGram}
                onChange={(e) => setMilkGram(Number(e.target.value))}
                className="w-full h-2 bg-[#120C0A] rounded-lg appearance-none cursor-pointer accent-[#D4A373]"
              />
            </div>

            {/* Slider 4: Water Temperature */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-[#FBF5ED]">Nhiệt Độ Nước Chiết Xuất (°C):</span>
                <span className="text-[#E07A5F]">{waterTemp}°C (Chuẩn 92-95°C)</span>
              </div>
              <input
                type="range"
                min="88"
                max="98"
                step="1"
                value={waterTemp}
                onChange={(e) => setWaterTemp(Number(e.target.value))}
                className="w-full h-2 bg-[#120C0A] rounded-lg appearance-none cursor-pointer accent-[#E07A5F]"
              />
            </div>

            {/* Simulated Live Specs Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#3A2B24]">
              <div className="p-3 rounded-2xl bg-[#1C1310] text-center border border-[#3A2B24]">
                <Droplets className="w-4 h-4 text-[#D4A373] mx-auto mb-1" />
                <span className="block text-[11px] text-[#FBF5ED]/50">Thể tích cốt</span>
                <span className="text-sm font-bold text-[#FBF5ED]">{waterVolume} ml</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#1C1310] text-center border border-[#3A2B24]">
                <Thermometer className="w-4 h-4 text-[#E07A5F] mx-auto mb-1" />
                <span className="block text-[11px] text-[#FBF5ED]/50">Hàm lượng Caffeine</span>
                <span className="text-sm font-bold text-[#FBF5ED]">~{caffeineMg} mg</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#1C1310] text-center border border-[#3A2B24]">
                <Timer className="w-4 h-4 text-[#E6C280] mx-auto mb-1" />
                <span className="block text-[11px] text-[#FBF5ED]/50">Thời gian ủ</span>
                <span className="text-sm font-bold text-[#FBF5ED]">{estimatedBrewTime}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Phin & Flavor Profile Result */}
          <div className="lg:col-span-5 bg-[#251B17] p-6 sm:p-8 rounded-3xl border border-[#D4A373]/40 shadow-xl space-y-6">
            
            <div className="text-center relative">
              {/* Virtual Phin Visual Graphic */}
              <div className="relative w-40 h-40 mx-auto rounded-full bg-gradient-to-b from-[#D4A373]/20 to-transparent p-4 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-[#120C0A] border-2 border-[#D4A373] flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                  {/* Animated dripping coffee droplets */}
                  <div className="absolute top-2 w-1.5 h-1.5 rounded-full bg-[#E6C280] animate-bounce" />
                  <Coffee className="w-10 h-10 text-[#D4A373] mb-1" />
                  <span className="text-[10px] font-extrabold text-[#E6C280] uppercase tracking-wider">
                    {beanRatio > 50 ? 'Gu Đậm Đầm' : 'Gu Thanh Thơm'}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#FBF5ED] mt-3">
                Cà Phê Phin Tùy Chọn 250g
              </h3>
              <p className="text-xs text-[#FBF5ED]/60 mt-1">
                Đóng gói túi Zip van 1 chiều bảo quản tươi ngon nhất.
              </p>
            </div>

            {/* Flavor Meter Bars */}
            <div className="space-y-3 pt-2">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-[#FBF5ED]">Độ Đắng Thể Chất (Body):</span>
                  <span className="text-[#D4A373]">{Math.round(beanRatio / 20)} / 5</span>
                </div>
                <div className="w-full h-2 bg-[#120C0A] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#D4A373] to-[#E6C280] rounded-full transition-all duration-300"
                    style={{ width: `${(beanRatio / 100) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-[#FBF5ED]">Độ Chua Thanh (Acidity):</span>
                  <span className="text-[#E6C280]">{Math.round((100 - beanRatio) / 20)} / 5</span>
                </div>
                <div className="w-full h-2 bg-[#120C0A] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#E6C280] rounded-full transition-all duration-300"
                    style={{ width: `${((100 - beanRatio) / 100) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-[#FBF5ED]">Độ Ngọt Béo (Sweetness):</span>
                  <span className="text-[#E07A5F]">{Math.round(milkGram / 10)} / 5</span>
                </div>
                <div className="w-full h-2 bg-[#120C0A] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#E07A5F] rounded-full transition-all duration-300"
                    style={{ width: `${(milkGram / 50) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="pt-4 border-t border-[#3A2B24] flex items-center justify-between">
              <div>
                <span className="block text-[10px] text-[#FBF5ED]/50 uppercase font-semibold">Giá phối trộn</span>
                <span className="text-2xl font-extrabold text-[#E6C280]">{formatVND(190000)}</span>
              </div>

              <button
                onClick={handleOrderCustomBlend}
                className={`px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 transition-all shadow-lg ${
                  addedCustom
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gradient-to-r from-[#D4A373] to-[#E6C280] text-[#120C0A] hover:scale-105 active:scale-95'
                }`}
              >
                {addedCustom ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Đã thêm công thức!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Đặt rang theo công thức này</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
