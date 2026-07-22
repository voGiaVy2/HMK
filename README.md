# 👓 HMK Eyewear — Web Platform Architecture

Dự án website thương hiệu kính mắt cao cấp Việt Nam **HMK Eyewear**, được cấu trúc chuẩn hóa tách biệt giữa **Frontend** và **Backend (RESTful API)**.

---

## 📁 Cấu Trúc Thư Mục Dự Án (Project Structure)

```text
HMK/
├── frontend/                          # FRONTEND (Giao diện người dùng)
│   ├── public/                        # Tài nguyên tĩnh
│   │   └── assets/                    # Hình ảnh sản phẩm, banners, logo, feedback
│   ├── src/
│   │   ├── css/
│   │   │   ├── creative.css           # CSS Hiệu ứng glassmorphism, 3D tilt, animation
│   │   │   └── main.css               # Design system tokens, variables, responsive
│   │   └── js/
│   │       ├── app.js                 # Router SPA & logic khởi tạo
│   │       ├── gallery.js             # Slider banner & canvas hiệu ứng
│   │       └── filter.js              # Bộ lọc sản phẩm & tương tác
│   ├── index.html                     # Trang chủ & ứng dụng chính (SPA)
│   └── collections.html               # Trang 8 Bộ sưu tập độc quyền 2025
│
├── backend/                           # BACKEND (RESTful API Server Node.js/Express)
│   ├── src/
│   │   ├── config/                    # Cấu hình môi trường & Database
│   │   ├── controllers/               # Xử lý logic nghiệp vụ
│   │   │   ├── productController.js   # API Lấy & Lọc sản phẩm
│   │   │   ├── collectionController.js# API Lấy danh sách bộ sưu tập
│   │   │   └── appointmentController.js# API Đặt lịch hẹn đo mắt
│   │   ├── data/                      # Cơ sở dữ liệu seed JSON
│   │   │   ├── products.json          # Danh sách gọng kính, kính mát, tròng kính
│   │   │   └── collections.json       # Danh sách 8 bộ sưu tập
│   │   ├── routes/                    # Định tuyến API
│   │   │   ├── productRoutes.js       # /api/products
│   │   │   ├── collectionRoutes.js    # /api/collections
│   │   │   └── appointmentRoutes.js   # /api/appointments
│   │   └── server.js                  # File khởi chạy máy chủ Express (Port 5000)
│   └── package.json
│
└── README.md                          # Tài liệu kiến trúc dự án
```

---

## 🚀 Hướng Dẫn Khởi Chạy (Quick Start)

### 1. Khởi chạy Frontend:
```bash
# Mở thư mục dự án và chạy web server
npx serve . -p 3000
```
- **Trang chủ:** `http://localhost:3000/index.html` hoặc `http://localhost:3000/frontend/index.html`
- **Bộ sưu tập:** `http://localhost:3000/collections.html`

### 2. Khởi chạy Backend API (Node.js/Express):
```bash
cd backend
npm install
npm run dev
```
- **API Server:** `http://localhost:5000/api/products`

---

## 📡 Danh Sách API Endpoints (Backend)

| Method | Endpoint | Mô tả |
| :--- | :--- | :--- |
| `GET` | `/api/products` | Lấy danh sách gọng kính, kính mát, tròng kính (Hỗ trợ query `category`, `material`, `shape`, `gender`) |
| `GET` | `/api/collections` | Lấy danh sách 8 bộ sưu tập độc quyền 2025 |
| `POST` | `/api/appointments` | Đăng ký lịch hẹn đo mắt & tư vấn chọn gọng kính |
| `GET` | `/api/health` | Kiểm tra trạng thái máy chủ Backend |

---
*© 2025 HMK Eyewear — Care your eyes, style your life*
