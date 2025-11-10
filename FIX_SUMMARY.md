# Tóm tắt các thay đổi để sửa lỗi 404 NOT_FOUND trên Vercel

## Nguyên nhân lỗi:
1. File vercel.json sử dụng cú pháp cũ (routes) đã bị deprecated
2. URL API trong api/index.js bị ngắt dòng sai

## Các file đã sửa:

### 1. vercel.json
**Trước:**
- Sử dụng "version": 2 và "routes"
- Có nhiều route không cần thiết

**Sau:**
- Sử dụng "rewrites" (cú pháp mới)
- Chỉ giữ lại 2 rewrites cần thiết:
  - /api/chat -> /api/index.js
  - /main -> /main.html
- Vercel tự động serve các static files (index.html, css, js, assets)

### 2. api/index.js
**Trước:**
- URL bị ngắt dòng: "https://generativelangua\nge.googleapis.com/..."

**Sau:**
- URL đúng: "https://generativelanguage.googleapis.com/..."

### 3. .vercelignore (mới tạo)
- Loại trừ node_modules, .git, logs khi deploy

### 4. DEPLOY_GUIDE.md (mới tạo)
- Hướng dẫn deploy lên Vercel

## Cách deploy:

### Option 1: Vercel CLI
\\\ash
npm i -g vercel
vercel --prod
\\\

### Option 2: Vercel Dashboard
1. Push code lên GitHub
2. Import project từ Vercel Dashboard
3. Vercel tự động deploy

## Kiểm tra sau khi deploy:
- Trang chủ: https://your-domain.vercel.app/
- Trang main: https://your-domain.vercel.app/main
- API: https://your-domain.vercel.app/api/chat (POST request)

## Lưu ý:
- Đảm bảo đã commit tất cả thay đổi
- Nếu vẫn gặp lỗi, kiểm tra logs trên Vercel Dashboard
