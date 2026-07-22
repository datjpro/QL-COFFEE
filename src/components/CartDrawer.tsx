import React, { useState } from 'react';
import { CartItem } from '../types/coffee';
import { X, Trash2, ShoppingBag, Gift, ArrowRight, Tag, Check, Truck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: (discountAmount: number, isGiftWrap: boolean) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [isGiftWrap, setIsGiftWrap] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 300000;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 25000;
  const giftWrapFee = isGiftWrap ? 35000 : 0;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee + giftWrapFee);

  const formatVND = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'COFFEEDI-SAN') {
      setDiscountPercent(15);
      setPromoApplied(true);
    } else {
      alert('Mã giảm giá không hợp lệ. Hãy dùng mã: COFFEEDI-SAN (Giảm 15%)');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#120C0A]/70 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#1C1310] border-l border-[#3A2B24] flex flex-col justify-between shadow-2xl text-[#FBF5ED]">
          
          {/* Cart Header */}
          <div className="p-6 border-b border-[#3A2B24] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-[#251B17] border border-[#3A2B24] text-[#D4A373]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-lg font-bold text-[#FBF5ED]">
                Giỏ Hàng Cà Phê ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#FBF5ED]/60 hover:text-[#D4A373] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#251B17] p-4 border-b border-[#3A2B24] space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-[#D4A373]">
                <Truck className="w-4 h-4" />
                {subtotal >= freeShippingThreshold ? (
                  <span className="text-emerald-400">Bạn đã đủ điều kiện Miễn Phí Vận Chuyển! 🎉</span>
                ) : (
                  <span>Thêm {formatVND(freeShippingThreshold - subtotal)} để Freeship</span>
                )}
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#120C0A] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#D4A373] to-[#E6C280] transition-all duration-300"
                style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <ShoppingBag className="w-12 h-12 text-[#3A2B24] mx-auto" />
                <p className="text-sm text-[#FBF5ED]/60">Giỏ hàng của bạn đang trống</p>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-full bg-[#D4A373] text-[#120C0A] text-xs font-bold"
                >
                  Khám phá danh mục cà phê
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#251B17] border border-[#3A2B24]"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover border border-[#3A2B24]"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#FBF5ED] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-[#D4A373] truncate">
                      {item.selectedGrind}
                    </p>
                    <p className="text-xs font-extrabold text-[#E6C280] mt-1">
                      {formatVND(item.product.price)}
                    </p>
                  </div>

                  {/* Item Quantity Adjuster */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-[#3A2B24] rounded-lg bg-[#120C0A]">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs text-[#FBF5ED]"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold text-[#E6C280]">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-[#FBF5ED]"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-1.5 text-red-400 hover:text-red-300 transition-colors"
                      title="Xóa sản phẩm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer & Total Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#3A2B24] bg-[#251B17] space-y-4">
              
              {/* Promo Code Simulator */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Mã ưu đãi: COFFEEDI-SAN"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={promoApplied}
                    className="w-full bg-[#120C0A] text-[#FBF5ED] text-xs px-3 py-2 pl-8 rounded-xl border border-[#3A2B24] uppercase placeholder:normal-case"
                  />
                  <Tag className="w-3.5 h-3.5 text-[#D4A373] absolute left-2.5 top-1/2 -translate-y-1/2" />
                </div>
                <button
                  onClick={handleApplyPromo}
                  disabled={promoApplied}
                  className="px-4 py-2 rounded-xl bg-[#3A2B24] hover:bg-[#D4A373] text-[#FBF5ED] hover:text-[#120C0A] text-xs font-bold transition-colors"
                >
                  {promoApplied ? 'Đã áp dụng (-15%)' : 'Áp dụng'}
                </button>
              </div>

              {/* Gift Wrapping Toggle */}
              <label className="flex items-center gap-2 cursor-pointer text-xs text-[#FBF5ED]/80">
                <input
                  type="checkbox"
                  checked={isGiftWrap}
                  onChange={(e) => setIsGiftWrap(e.target.checked)}
                  className="rounded border-[#3A2B24] text-[#D4A373] focus:ring-0"
                />
                <Gift className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>Gói quà bằng Thùng Gỗ Sơn Mài (+35.000đ)</span>
              </label>

              {/* Price Calculation Breakdown */}
              <div className="space-y-1.5 text-xs border-t border-[#3A2B24] pt-3 text-[#FBF5ED]/70">
                <div className="flex justify-between">
                  <span>Tạm tính:</span>
                  <span className="font-semibold text-[#FBF5ED]">{formatVND(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Ưu đãi (15% COFFEEDI-SAN):</span>
                    <span>-{formatVND(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Phí giao hàng:</span>
                  <span>{shippingFee === 0 ? 'Miễn phí 0đ' : formatVND(shippingFee)}</span>
                </div>
                {isGiftWrap && (
                  <div className="flex justify-between text-[#D4A373]">
                    <span>Phí gói quà sơn mài:</span>
                    <span>+{formatVND(giftWrapFee)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-extrabold text-[#E6C280] pt-2 border-t border-[#3A2B24]">
                  <span>Tổng thanh toán:</span>
                  <span>{formatVND(grandTotal)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => onProceedToCheckout(discountAmount, isGiftWrap)}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#D4A373] via-[#E6C280] to-[#D4A373] text-[#120C0A] font-extrabold text-sm hover:shadow-[0_0_20px_rgba(212,163,115,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <span>Tiến Hành Đặt Hàng &amp; Thanh Toán</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
