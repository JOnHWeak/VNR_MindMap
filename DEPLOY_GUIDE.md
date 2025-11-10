# Hướng dẫn Deploy lên Vercel

## Các bước đã sửa lỗi 404:

1. **Cập nhật vercel.json**: 
   - Đã thay đổi từ outes (deprecated) sang ewrites
   - Loại bỏ các route không cần thiết vì Vercel tự động serve static files

2. **Sửa lỗi API**:
   - Đã sửa URL bị ngắt dòng trong api/index.js

3. **Thêm .vercelignore**:
   - Để tránh upload các file không cần thiết

## Deploy lên Vercel:

### Cách 1: Qua Vercel CLI
\\\ash
# Cài đặt Vercel CLI (nếu chưa có)
npm i -g vercel

# Deploy
vercel

# Deploy production
vercel --prod
\\\

### Cách 2: Qua Vercel Dashboard
1. Đăng nhập vào https://vercel.com
2. Click "Add New Project"
3. Import repository từ GitHub
4. Vercel sẽ tự động detect và deploy

## Lưu ý:
- File index.html sẽ tự động được serve tại root (/)
- File main.html có thể truy cập qua /main hoặc /main.html
- API endpoint: /api/chat
- Tất cả static files (js, css, assets) sẽ tự động được serve
