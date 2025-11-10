#  CHECKLIST DEPLOY VERCEL

## Đã hoàn thành:
- [x] Sửa vercel.json (từ routes sang rewrites)
- [x] Sửa lỗi URL trong api/index.js
- [x] Tạo .vercelignore
- [x] Tạo hướng dẫn deploy

## Cần làm tiếp:
- [ ] Commit các thay đổi:
  \\\ash
  git add .
  git commit -m "Fix: Sửa lỗi 404 NOT_FOUND trên Vercel"
  git push
  \\\

- [ ] Deploy lên Vercel:
  
  **Cách 1: Qua CLI**
  \\\ash
  npm install -g vercel
  vercel login
  vercel --prod
  \\\
  
  **Cách 2: Qua Dashboard**
  1. Vào https://vercel.com/dashboard
  2. Click "Add New Project"
  3. Import từ Git repository
  4. Click "Deploy"

- [ ] Kiểm tra sau deploy:
  - [ ] Truy cập trang chủ: https://[your-domain].vercel.app/
  - [ ] Truy cập trang main: https://[your-domain].vercel.app/main
  - [ ] Test API chat: https://[your-domain].vercel.app/api/chat

## Nếu vẫn gặp lỗi:
1. Kiểm tra logs trên Vercel Dashboard
2. Xem tab "Deployments" -> Click vào deployment mới nhất -> "View Function Logs"
3. Kiểm tra tab "Settings" -> "Environment Variables" (nếu cần)

## Lưu ý quan trọng:
- API Key đang hardcode trong code (AIzaSyC689uk9Yh_irsnAMxTw8LEFUKztth3Go4)
- Nên chuyển sang Environment Variables trên Vercel để bảo mật hơn
- Thêm vào Settings -> Environment Variables:
  - Key: GEMINI_API_KEY
  - Value: AIzaSyC689uk9Yh_irsnAMxTw8LEFUKztth3Go4
- Sau đó sửa code: const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
