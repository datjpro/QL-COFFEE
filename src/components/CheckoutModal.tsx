import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CartItem } from '../types/coffee';
import { X, CheckCircle2, QrCode, CreditCard, Truck, Coffee, ShieldCheck } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  discountAmount: number;
  isGiftWrap: boolean;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  discountAmount,
  isGiftWrap,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('Nguyễn Văn An');
  const [phone, setPhone] = useState('0908 123 456');
  const [address, setAddress] = useState('123 Phố Tràng Tiền, Hoàn Kiếm, Hà Nội');
  const [paymentMethod, setPaymentMethod] = useState<'qr' | 'cod' | 'momo'>('qr');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shippingFee = subtotal >= 300000 ? 0 : 25000;
  const giftWrapFee = isGiftWrap ? 35000 : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee + giftWrapFee);

  const formatVND = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Fire festive confetti animation!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4A373', '#E6C280', '#E07A5F', '#FBF5ED'],
    });

    setTimeout(() => {
      onOrderSuccess();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#120C0A]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#251B17] border border-[#D4A373]/40 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 text-[#FBF5ED] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#FBF5ED]/60 hover:text-[#D4A373]"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="text-center py-8 space-y-4">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#FBF5ED]">
              Đặt Hàng Di Sản Thành Công! ☕
            </h3>
            <p className="text-xs text-[#FBF5ED]/70 max-w-md mx-auto">
              Cảm ơn <strong className="text-[#D4A373]">{fullName}</strong> đã đặt mua sản phẩm tại Vàđà Coffee. Mã đơn hàng của bạn là <strong className="text-[#E6C280]">#VADA-{Math.floor(100000 + Math.random() * 900000)}</strong>.
            </p>
            <div className="p-4 rounded-2xl bg-[#1C1310] border border-[#3A2B24] max-w-md mx-auto text-left text-xs space-y-1">
              <p className="text-[#D4A373] font-bold mb-2">Thông tin giao hàng 2H:</p>
              <p>📍 {address}</p>
              <p>📞 {phone}</p>
              <p>💰 Tổng thanh toán: <strong className="text-[#E6C280]">{formatVND(grandTotal)}</strong> ({paymentMethod.toUpperCase()})</p>
            </div>
            <p className="text-[11px] text-[#FBF5ED]/40 italic">
              Đang tự động chuyển hướng về trang chủ...
            </p>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmitOrder} className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#3A2B24]">
              <Coffee className="w-6 h-6 text-[#D4A373]" />
              <div>
                <h3 className="font-serif text-xl font-bold text-[#FBF5ED]">
                  Thanh Toán Đơn Hàng Cà Phê
                </h3>
                <p className="text-xs text-[#FBF5ED]/60">
                  Xác nhận thông tin giao hàng &amp; chọn phương thức thanh toán
                </p>
              </div>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-[#D4A373]">Họ và Tên Người Nhận:</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#1C1310] text-[#FBF5ED] px-3.5 py-2.5 rounded-xl border border-[#3A2B24] focus:outline-none focus:border-[#D4A373]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#D4A373]">Số Điện Thoại:</label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#1C1310] text-[#FBF5ED] px-3.5 py-2.5 rounded-xl border border-[#3A2B24] focus:outline-none focus:border-[#D4A373]"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="font-semibold text-[#D4A373]">Địa Chỉ Giao Hàng Chi Tiết:</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-[#1C1310] text-[#FBF5ED] px-3.5 py-2.5 rounded-xl border border-[#3A2B24] focus:outline-none focus:border-[#D4A373]"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <span className="block text-xs font-semibold text-[#D4A373]">
                Phương Thức Thanh Toán:
              </span>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('qr')}
                  className={`p-3 rounded-2xl border text-center transition-all text-xs font-semibold flex flex-col items-center gap-1 ${
                    paymentMethod === 'qr'
                      ? 'bg-[#D4A373] text-[#120C0A] border-[#D4A373]'
                      : 'bg-[#1C1310] text-[#FBF5ED]/70 border-[#3A2B24]'
                  }`}
                >
                  <QrCode className="w-5 h-5" />
                  <span>VietQR Tự Động</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3 rounded-2xl border text-center transition-all text-xs font-semibold flex flex-col items-center gap-1 ${
                    paymentMethod === 'cod'
                      ? 'bg-[#D4A373] text-[#120C0A] border-[#D4A373]'
                      : 'bg-[#1C1310] text-[#FBF5ED]/70 border-[#3A2B24]'
                  }`}
                >
                  <Truck className="w-5 h-5" />
                  <span>Thanh Toán COD</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('momo')}
                  className={`p-3 rounded-2xl border text-center transition-all text-xs font-semibold flex flex-col items-center gap-1 ${
                    paymentMethod === 'momo'
                      ? 'bg-[#D4A373] text-[#120C0A] border-[#D4A373]'
                      : 'bg-[#1C1310] text-[#FBF5ED]/70 border-[#3A2B24]'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Ví MoMo / Pay</span>
                </button>
              </div>
            </div>

            {/* VietQR Code Preview Box */}
            {paymentMethod === 'qr' && (
              <div className="p-4 rounded-2xl bg-[#1C1310] border border-[#3A2B24] flex items-center gap-4">
                <div className="w-24 h-24 bg-white p-2 rounded-xl shrink-0 flex items-center justify-center">
                  {/* Mock VietQR SVG */}
                  <div className="w-full h-full border-2 border-black flex flex-col items-center justify-center text-[8px] font-mono text-black text-center leading-tight">
                    <span className="font-bold text-[10px]">VietQR</span>
                    <span>MB BANK</span>
                    <span>0908123456</span>
                  </div>
                </div>
                <div className="text-xs space-y-1">
                  <p className="font-bold text-[#E6C280]">Quét Mã QR Chuyển Khoản Nhanh</p>
                  <p className="text-[#FBF5ED]/70">Ngân hàng: MBBank (Nội địa)</p>
                  <p className="text-[#FBF5ED]/70">Chủ TK: CÔNG TY CP CÀ PHÊ DI SẢN VÀĐÀ</p>
                  <p className="text-[#D4A373] font-mono font-bold">STK: 1900 6868 8888</p>
                </div>
              </div>
            )}

            {/* Total summary & Submit */}
            <div className="pt-4 border-t border-[#3A2B24] flex items-center justify-between">
              <div>
                <span className="block text-[10px] text-[#FBF5ED]/50 uppercase font-semibold">Tổng tiền thanh toán</span>
                <span className="text-2xl font-extrabold text-[#E6C280]">{formatVND(grandTotal)}</span>
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#E6C280] text-[#120C0A] font-extrabold text-sm hover:scale-105 transition-transform shadow-lg"
              >
                Xác Nhận Đặt Hàng
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
