# Khắc phục lỗi "Could not parse File as JSON: vercel.json"

## Vấn đề:
Vercel không thể parse file `vercel.json` do:
1. **BOM (Byte Order Mark)**: File được tạo với UTF-8 BOM thay vì UTF-8 không BOM
2. **Line endings**: Windows line endings (CRLF) có thể gây vấn đề

## Giải pháp đã áp dụng:
✅ Tạo lại file `vercel.json` với UTF-8 encoding không BOM
✅ Sử dụng Unix line endings (LF)
✅ Kiểm tra JSON syntax hợp lệ

## File vercel.json hiện tại:
```json
{
  "rewrites": [
    { "source": "/api/chat", "destination": "/api/index.js" },
    { "source": "/main", "destination": "/main.html" }
  ]
}
```

## Kiểm tra đã thực hiện:
- ✅ PowerShell ConvertFrom-Json: PASSED
- ✅ Node.js JSON.parse: PASSED
- ✅ Hex dump: Không có BOM (bắt đầu bằng 7B = '{')

## Cách deploy:

### 1. Commit thay đổi:
```bash
git add vercel.json api/index.js .vercelignore
git commit -m "Fix: Sửa lỗi JSON parsing và 404 NOT_FOUND trên Vercel"
git push
```

### 2. Deploy lên Vercel:

**Option A: Vercel CLI**
```bash
# Cài đặt (nếu chưa có)
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**Option B: Vercel Dashboard**
1. Truy cập https://vercel.com/dashboard
2. Click "Add New Project"
3. Import repository từ GitHub
4. Vercel sẽ tự động detect và deploy

### 3. Kiểm tra sau deploy:
- Trang chủ: `https://[your-domain].vercel.app/`
- Trang main: `https://[your-domain].vercel.app/main`
- API chat: `https://[your-domain].vercel.app/api/chat` (POST)

## Nếu vẫn gặp lỗi:

### Lỗi JSON parsing:
```bash
# Kiểm tra file có BOM không
Get-Content vercel.json -Raw | Format-Hex | Select-Object -First 1

# Nếu bắt đầu bằng EF BB BF -> có BOM (sai)
# Nếu bắt đầu bằng 7B -> không có BOM (đúng)
```

### Lỗi 404:
1. Kiểm tra Vercel Dashboard -> Deployments -> Function Logs
2. Đảm bảo file `api/index.js` có cú pháp đúng
3. Kiểm tra Environment Variables nếu cần

## Tóm tắt các file đã sửa:

### 1. vercel.json
- Chuyển từ `routes` sang `rewrites`
- UTF-8 không BOM
- JSON hợp lệ

### 2. api/index.js
- Sửa URL bị ngắt dòng
- URL đúng: `https://generativelanguage.googleapis.com/...`

### 3. .vercelignore (mới)
- Loại trừ node_modules, .git, logs

## Lưu ý bảo mật:
⚠️ API Key đang hardcode trong code. Nên chuyển sang Environment Variables:

1. Trên Vercel Dashboard -> Settings -> Environment Variables
2. Thêm: `GEMINI_API_KEY = AIzaSyC689uk9Yh_irsnAMxTw8LEFUKztth3Go4`
3. Sửa code: `const GEMINI_API_KEY = process.env.GEMINI_API_KEY;`

## Kết quả:
✅ File vercel.json đã hợp lệ và có thể parse được
✅ Sẵn sàng deploy lên Vercel
✅ Tất cả các route đã được cấu hình đúng

