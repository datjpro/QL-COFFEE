# ☕ VÀĐÀ COFFEE - CÀ PHÊ DI SẢN VIỆT NAM (MULTI-PAGE EDITION)

> **Website trải nghiệm & thương mại điện tử Cà Phê Việt Nam cao cấp**, được cấu trúc đa trang (`HashRouter`) tinh tế theo chuẩn mực **`UI-PROMPT-ENGINEERING-SKILL`** kết hợp cùng sức mạnh từ hệ sinh thái **Google Antigravity AI**.

[![Vite](https://img.shields.io/badge/Vite-6.1.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-7.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages Compatible](https://img.shields.io/badge/GitHub_Pages-Ready-22c55e?style=for-the-badge&logo=github&logoColor=white)](#-hướng-dẫn-chạy-demo-trên-github-pages)

---

## 🌟 Điểm Nổi Bật Về Giao Diện & Trải Nghiệm (UI/UX)

* 🌐 **Cấu Trúc Đa Trang (Multi-Page Architecture)**:
  - **Trang Chủ (`/`)**: Banner Hero ấn tượng, điểm nhấn sản phẩm bán chạy & teaser cẩm nang.
  - **Danh Mục Sản Phẩm (`/products`)**: Trang sản phẩm chuyên biệt với bộ lọc mức rang, loại hạt & tìm kiếm.
  - **Trang Chi Tiết Sản Phẩm (`/product/:id`)**: Hiển thị nốt hương vị, biểu đồ độ chua/đắng, tùy chọn kích thước xay (Phin, Espresso, Cold brew).
  - **Virtual Phin Lab (`/customizer`)**: Phòng thí nghiệm giả lập tỷ lệ pha chế Phin tương tác.
  - **Bách Khoa Cà Phê (`/knowledge`)**: Cẩm nang so sánh Robusta vs Arabica, kỹ thuật sơ chế, thổ nhưỡng 3 miền & công thức Cà phê Trứng / Cà phê Muối.
  - **Trung Tâm Ưu Đãi (`/promotions`)**: Các chiến dịch tri ân được thiết kế tinh tế.
  - **Về Chúng Tôi (`/about`)**: Hành trình di sản 1857-2026 & hệ thống showroom.
* 📢 **Chiến Dịch Quảng Cáo Tinh Tế (Non-Intrusive Campaigns)**:
  - Ticker bar chạy ở đầu trang có nút ẩn/hiện nhẹ nhàng.
  - Floating Toast góc dưới không che chắn tầm nhìn hay làm phiền người dùng.
  - Mã giảm giá `COFFEEDI-SAN` (-15%), chương trình đổi Phin cũ & quà tặng Phin Rose Gold.

---

## 🛠️ Công Cụ Hỗ Trợ & Công Nghệ Sử Dụng (Tech Stack)

| Hạng mục | Công nghệ / Công cụ | Vai trò & Mô tả |
| :--- | :--- | :--- |
| **Framework Core** | **React 19 + Vite 6 + TypeScript** | Xây dựng Single Page Application cực nhanh, type-safe tuyệt đối |
| **Routing** | **React Router (`HashRouter`)** | Điều hướng đa trang không bị lỗi 404 trên GitHub Pages |
| **Styling System** | **Tailwind CSS v4** | Hệ thống Design System tokens, Glassmorphism snippet & animations |
| **Icon Set** | **Lucide React (`lucide-react`)** | Bộ icon vector sắc nét, tối ưu dung lượng |
| **Hiệu Ứng Sàn** | **Canvas Confetti** | Pháo hoa ăn mừng tương tác khi đặt hàng thành công |
| **Thiết Kế UI** | **`UI-PROMPT-ENGINEERING-SKILL`** | Áp dụng khung 11 bước chuẩn mực UI prompt engineering |
| **Phát Triển AI** | **Google Antigravity AI Agent** | Tự động hóa chia pha (Phases), phân nhánh (Git Branches) & Test auto |

---

## 🌿 Các Nhánh Git & Lịch Sử Commit (Phase 1 -> Phase 8)

Dự án được thực hiện nghiêm ngặt theo **8 Pha (Phases)**:

```
QL-COFFEE/
├── 📄 AGENTS.md                  ← Quy chuẩn cho các AI Subagent làm việc
├── 📄 README.md                  ← Tài liệu tổng quan dự án
├── 📄 index.html                 ← File gốc HTML + Font Google Playfair & Plus Jakarta Sans
├── 📄 vite.config.ts             ← Cấu hình Vite với base relative ('./') cho GitHub Pages
├── 📁 UI-PROMPT-ENGINEERING-SKILL/ ← Bộ kỹ năng Prompt Engineering UI
├── 📁 src/
│   ├── 📄 main.tsx
│   ├── 📄 App.tsx                ← HashRouter & Routes chính
│   ├── 📄 index.css              ← Visual tokens, Glassmorphism, animations
│   ├── 📁 types/                 ← Interface TypeScript định nghĩa Sản phẩm, Giỏ hàng
│   ├── 📁 data/                  ← Dataset dữ liệu mẫu Cà Phê Di Sản Việt Nam
│   ├── 📁 components/            ← Navbar, Footer, ProductCard, AnnouncementBar, Toast...
│   └── 📁 pages/                 ← HomePage, ProductsPage, ProductDetailPage, KnowledgePage, PromotionsPage, AboutPage...
```

### 📍 Lịch Sử Nhánh Git Chuẩn Semantic

1. `feature/phase-1-setup`: `feat(setup): initialize Vite, TailwindCSS design tokens & GitHub Pages config`
2. `feature/phase-2-components`: `feat(catalog): implement header, hero section, product cards & filtering system`
3. `feature/phase-3-interactive`: `feat(experience): add Phin coffee customizer, cart drawer, checkout modal & heritage story`
4. `feature/phase-4-testing-deploy`: `docs(release): add AGENTS.md, complete README.md, build verification & final release`
5. `feature/phase-5-routing-pages`: `feat(routing): implement multi-page structure with HashRouter`
6. `feature/phase-6-promotions`: `feat(promotions): add non-intrusive campaign hub & subtle offer bar`
7. `feature/phase-7-coffee-knowledge`: `feat(knowledge): implement comprehensive coffee encyclopedia hub`
8. `feature/phase-8-testing-docs`: `docs(release): verify multi-page release, update AGENTS.md & README.md`

---

## 💻 Hướng Dẫn Cài Đặt & Chạy Demo Local

```bash
# 1. Cài đặt Dependencies
npm install

# 2. Chạy Server Development Local
npm run dev

# 3. Tự Động Kiểm Tra & Build Production
npm run test
```

---

## 🚀 Hướng Dẫn Chạy Demo Trên Link GitHub Pages

Cấu hình `base: './'` trong `vite.config.ts` kết hợp `HashRouter` giúp chạy mượt mà 100% trên GitHub Pages.

1. Đẩy code lên nhánh `main`:
   ```bash
   git push origin main
   ```
2. Vào **Settings** > **Pages** trên GitHub Repository > chọn **Source: GitHub Actions**.
3. Link Demo tự động hiển thị có dạng: `https://<username>.github.io/QL-COFFEE/`

---

## 👤 Tác Giả & Đơn Vị Phát Triển (Authors & Acknowledgments)

* 👨‍💻 **Tác giả dự án**: Đội ngũ Phát triển Di Sản Cà Phê Việt Nam (Vàđà Coffee Team).
* 🤖 **AI Assistant**: **Google Antigravity AI** (Sử dụng mô hình Gemini 3.6 Flash / Pro).
* 🎨 **Phương pháp luận**: **`UI-PROMPT-ENGINEERING-SKILL`** - Kỹ năng chuyển hóa ý tưởng giao diện thành mã nguồn sắc nét.

---

<p align="center">
  <sub>Cảm ơn bạn đã trải nghiệm <strong>Vàđà Coffee Multi-Page Edition</strong> ☕</sub>
</p>
