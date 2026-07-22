# ☕ VÀĐÀ COFFEE - CÀ PHÊ DI SẢN VIỆT NAM

> **Website trải nghiệm & thương mại điện tử Cà Phê Việt Nam cao cấp**, được thiết kế chuẩn mực theo kỹ năng **`UI-PROMPT-ENGINEERING-SKILL`** kết hợp cùng sức mạnh từ hệ sinh thái **Google Antigravity AI**.

[![Vite](https://img.shields.io/badge/Vite-6.1.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages Compatible](https://img.shields.io/badge/GitHub_Pages-Ready-22c55e?style=for-the-badge&logo=github&logoColor=white)](#-hướng-dẫn-chạy-demo-trên-github-pages)

---

## 🌟 Điểm Nổi Bật Về Giao Diện & Trải Nghiệm (UI/UX)

* 🎨 **Thiết Kế Đậm Chất Cà Phê Di Sản**: Tông màu ấm áp chuẩn Espresso (`#120C0A`), Nông trường mộc (`#1C1310`) cùng sắc vàng Crema kiêu sa (`#D4A373`).
* 💨 **Hiệu Ứng Làn Hơi Cà Phê Bay (Animated Coffee Steam)**: Tạo cảm giác nóng hổi, sống động ngay từ cái nhìn đầu tiên trên Hero Banner.
* 🧪 **Bộ Giả Lập Pha Phin Virtual (Phin Brewing Calculator)**: Tính toán tự động thể tích nước chiết xuất, hàm lượng Caffeine, độ chua / độ đắng theo tỷ lệ Robusta / Arabica & sữa đặc người dùng tùy chỉnh.
* 🛍️ **Giỏ Hàng Thông Minh (Slide-over Cart Drawer)**: Tích hợp thanh tiến trình Miễn phí vận chuyển (Freeship bar), áp mã ưu đãi (`COFFEEDI-SAN` giảm 15%), tùy chọn thùng gỗ sơn mài gói quà.
* 📱 **Thanh Toán VietQR & Pháo Hoa Ăn Mừng**: Mô phỏng mã VietQR tự động cùng hiệu ứng pháo hoa ăn mừng (`canvas-confetti`) khi chốt đơn thành công.
* 🗺️ **Hành Trình Di Sản 3 Miền**: Bản đồ hạt cà phê Đắk Lắk (Fine Robusta) & Cầu Đất (Arabica Specialty cao 1.650m).

---

## 🛠️ Công Cụ Hỗ Trợ & Công Nghệ Sử Dụng (Tech Stack)

| Hạng mục | Công nghệ / Công cụ | Vai trò & Mô tả |
| :--- | :--- | :--- |
| **Framework Core** | **React 19 + Vite 6 + TypeScript** | Xây dựng Single Page Application cực nhanh, type-safe tuyệt đối |
| **Styling System** | **Tailwind CSS v4** | Hệ thống Design System tokens, Glassmorphism snippet & animations |
| **Icon Set** | **Lucide React (`lucide-react`)** | Bộ icon vector sắc nét, tối ưu dung lượng |
| **Hiệu Ứng Sàn** | **Canvas Confetti** | Pháo hoa ăn mừng tương tác khi đặt hàng thành công |
| **Thiết Kế UI** | **`UI-PROMPT-ENGINEERING-SKILL`** | Áp dụng khung 11 bước chuẩn mực UI prompt engineering |
| **Phát Triển AI** | **Google Antigravity AI Agent** | Tự động hóa chia pha (Phases), phân nhánh (Git Branches) & Test auto |

---

## 🌿 Cấu Trúc Dự Án & Các Pha Phát Triển (Phased Execution Plan)

Dự án được thực hiện nghiêm ngặt theo **4 Pha (Phases)** với các nhánh Git riêng biệt:

```
QL-COFFEE/
├── 📄 AGENTS.md                  ← Quy chuẩn cho các AI Subagent làm việc
├── 📄 README.md                  ← Tài liệu tổng quan dự án
├── 📄 index.html                 ← File gốc HTML + Font Google Playfair & Plus Jakarta Sans
├── 📄 vite.config.ts             ← Cấu hình Vite với base relative ('./') cho GitHub Pages
├── 📁 UI-PROMPT-ENGINEERING-SKILL/ ← Bộ kỹ năng Prompt Engineering UI
├── 📁 src/
│   ├── 📄 main.tsx
│   ├── 📄 App.tsx                ← Layout tổng hòa các component & state giỏ hàng
│   ├── 📄 index.css              ← Visual tokens, Glassmorphism, animations steam
│   ├── 📁 types/                 ← Interface TypeScript định nghĩa Sản phẩm, Giỏ hàng, Bộ lọc
│   ├── 📁 data/                  ← Dataset dữ liệu mẫu Cà Phê Di Sản Việt Nam
│   └── 📁 components/
│       ├── 📄 Navbar.tsx         ← Sticky Header + Search + Mini Cart Badge
│       ├── 📄 HeroSection.tsx    ← Hero Banner + Steam Animation + Highlight Badges
│       ├── 📄 CategoryFilter.tsx ← Lọc loại sản phẩm, mức rang & sắp xếp
│       ├── 📄 ProductCard.tsx    ← Card sản phẩm + Vị đắng/chua + Quick Add
│       ├── 📄 ProductGrid.tsx    ← Grid responsive + Empty state
│       ├── 📄 PhinCustomizer.tsx  ← Bộ giả lập pha Phin tương tác 3D
│       ├── 📄 ProductQuickViewModal.tsx ← Modal xem chi tiết + Chọn kích thước xay
│       ├── 📄 CartDrawer.tsx     ← Giỏ hàng trượt + Thanh toán mã ưu đãi
│       ├── 📄 CheckoutModal.tsx  ← Popup điền địa chỉ & VietQR thanh toán
│       ├── 📄 HeritageStory.tsx  ← Lịch sử 1857-2026 & Bản đồ hạt cà phê 3 miền
│       ├── 📄 CustomerReviews.tsx← Đánh giá từ khách hàng thực tế
│       └── 📄 Footer.tsx         ← Địa chỉ showroom Hà Nội, Sài Gòn, Đà Lạt & Newsletter
```

### 📍 Lịch Sử Nhánh & Commit Chuẩn Semantic

1. **Phase 1 (`feature/phase-1-setup`)**:  
   `feat(setup): initialize Vite, TailwindCSS design tokens & GitHub Pages config`
2. **Phase 2 (`feature/phase-2-components`)**:  
   `feat(catalog): implement header, hero section, product cards & filtering system`
3. **Phase 3 (`feature/phase-3-interactive`)**:  
   `feat(experience): add Phin coffee customizer, cart drawer, checkout modal & heritage story`
4. **Phase 4 (`feature/phase-4-testing-deploy`)**:  
   `docs(release): add AGENTS.md, complete README.md, build verification & final release`

---

## 💻 Hướng Dẫn Cài Đặt & Chạy Demo Local

### 1. Cài đặt Dependencies
```bash
npm install
```

### 2. Chạy Server Development Local
```bash
npm run dev
```
Truy cập địa chỉ `http://localhost:5173` trên trình duyệt.

### 3. Tự Động Kiếm Tra & Build Production
```bash
npm run test
```
Lệnh này sẽ tự động kiểm tra TypeScript types và đóng gói sản phẩm ra thư mục `/dist`.

---

## 🚀 Hướng Dẫn Chạy Demo Trên Link GitHub Pages

Sản phẩm đã được cấu hình đường dẫn tương đối (`base: './'`) trong `vite.config.ts`, sẵn sàng chạy trên bất kỳ kho lưu trữ GitHub nào.

### Cách 1: Deploy Tự Động Qua GitHub Actions (Khuyên dùng)
1. Đẩy code lên nhánh `main` trên GitHub repository:
   ```bash
   git push origin main
   ```
2. Vào **Settings** > **Pages** trên GitHub Repository.
3. Tại mục **Source**, chọn **GitHub Actions**.
4. GitHub sẽ tự động build và cấp link Demo công khai có dạng:
   `https://<username>.github.io/QL-COFFEE/`

### Cách 2: Deploy Qua Nút CLI `gh-pages`
```bash
npx gh-pages -d dist
```

---

## 👤 Tác Giả & Đơn Vị Phát Triển (Authors & Acknowledgments)

* 👨‍💻 **Tác giả dự án**: Đội ngũ Phát triển Di Sản Cà Phê Việt Nam (Vàđà Coffee Team).
* 🤖 **AI Assistant**: **Google Antigravity AI** (Sử dụng mô hình Gemini 3.6 Flash / Pro).
* 🎨 **Phương pháp luận**: **`UI-PROMPT-ENGINEERING-SKILL`** - Kỹ năng chuyển hóa ý tưởng giao diện thành mã nguồn sắc nét.

---

<p align="center">
  <sub>Cảm ơn bạn đã trải nghiệm <strong>Vàđà Coffee</strong> - Tự hào Cà Phê Việt Nam ☕</sub>
</p>
