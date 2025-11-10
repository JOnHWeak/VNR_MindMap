# Script kiểm tra trước khi deploy lên Vercel

Write-Host "=== KIỂM TRA TRƯỚC KHI DEPLOY ===" -ForegroundColor Cyan
Write-Host ""

$allPassed = $true

# 1. Kiểm tra vercel.json
Write-Host "1. Kiểm tra vercel.json..." -ForegroundColor Yellow
if (Test-Path "vercel.json") {
    try {
        $content = Get-Content "vercel.json" -Raw
        $json = $content | ConvertFrom-Json
        
        # Kiểm tra BOM
        $bytes = [System.IO.File]::ReadAllBytes("$PWD\vercel.json")
        if ($bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
            Write-Host "   ✗ File có BOM (UTF-8 BOM) - cần sửa!" -ForegroundColor Red
            $allPassed = $false
        } else {
            Write-Host "   ✓ File không có BOM" -ForegroundColor Green
        }
        
        # Kiểm tra cấu trúc
        if ($json.rewrites) {
            Write-Host "   ✓ Có rewrites config" -ForegroundColor Green
        } else {
            Write-Host "   ✗ Thiếu rewrites config" -ForegroundColor Red
            $allPassed = $false
        }
        
        Write-Host "   ✓ JSON hợp lệ" -ForegroundColor Green
    } catch {
        Write-Host "   ✗ JSON không hợp lệ: $_" -ForegroundColor Red
        $allPassed = $false
    }
} else {
    Write-Host "   ✗ File không tồn tại!" -ForegroundColor Red
    $allPassed = $false
}
Write-Host ""

# 2. Kiểm tra api/index.js
Write-Host "2. Kiểm tra api/index.js..." -ForegroundColor Yellow
if (Test-Path "api/index.js") {
    $apiContent = Get-Content "api/index.js" -Raw
    
    # Kiểm tra URL không bị ngắt dòng
    if ($apiContent -match "generativelanguage\.googleapis\.com") {
        Write-Host "   ✓ URL API đúng" -ForegroundColor Green
    } else {
        Write-Host "   ✗ URL API có vấn đề" -ForegroundColor Red
        $allPassed = $false
    }
    
    # Kiểm tra export default
    if ($apiContent -match "export default.*function handler") {
        Write-Host "   ✓ Export handler đúng" -ForegroundColor Green
    } else {
        Write-Host "   ✗ Export handler có vấn đề" -ForegroundColor Red
        $allPassed = $false
    }
    
    Write-Host "   ✓ File tồn tại" -ForegroundColor Green
} else {
    Write-Host "   ✗ File không tồn tại!" -ForegroundColor Red
    $allPassed = $false
}
Write-Host ""

# 3. Kiểm tra các file HTML
Write-Host "3. Kiểm tra các file HTML..." -ForegroundColor Yellow
$htmlFiles = @("index.html", "main.html")
foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        Write-Host "   ✓ $file tồn tại" -ForegroundColor Green
    } else {
        Write-Host "   ✗ $file không tồn tại!" -ForegroundColor Red
        $allPassed = $false
    }
}
Write-Host ""

# 4. Kiểm tra package.json
Write-Host "4. Kiểm tra package.json..." -ForegroundColor Yellow
if (Test-Path "package.json") {
    try {
        $pkg = Get-Content "package.json" -Raw | ConvertFrom-Json
        
        if ($pkg.dependencies."node-fetch") {
            Write-Host "   ✓ Có dependency node-fetch" -ForegroundColor Green
        } else {
            Write-Host "   ⚠ Thiếu dependency node-fetch" -ForegroundColor Yellow
        }
        
        Write-Host "   ✓ package.json hợp lệ" -ForegroundColor Green
    } catch {
        Write-Host "   ✗ package.json không hợp lệ" -ForegroundColor Red
        $allPassed = $false
    }
} else {
    Write-Host "   ✗ File không tồn tại!" -ForegroundColor Red
    $allPassed = $false
}
Write-Host ""

# 5. Kiểm tra Git status
Write-Host "5. Kiểm tra Git status..." -ForegroundColor Yellow
try {
    $gitStatus = git status --porcelain 2>&1
    if ($LASTEXITCODE -eq 0) {
        if ($gitStatus) {
            Write-Host "   ⚠ Có thay đổi chưa commit:" -ForegroundColor Yellow
            Write-Host $gitStatus
        } else {
            Write-Host "   ✓ Không có thay đổi chưa commit" -ForegroundColor Green
        }
    } else {
        Write-Host "   ⚠ Không phải Git repository hoặc Git chưa cài" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ⚠ Không thể kiểm tra Git status" -ForegroundColor Yellow
}
Write-Host ""

# Kết quả
Write-Host "=== KẾT QUẢ ===" -ForegroundColor Cyan
if ($allPassed) {
    Write-Host "✓ TẤT CẢ KIỂM TRA ĐÃ PASSED!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Bạn có thể deploy bằng lệnh:" -ForegroundColor Cyan
    Write-Host "  vercel --prod" -ForegroundColor White
    Write-Host ""
    Write-Host "Hoặc commit và push lên Git:" -ForegroundColor Cyan
    Write-Host "  git add ." -ForegroundColor White
    Write-Host "  git commit -m 'Fix: Sửa lỗi deploy Vercel'" -ForegroundColor White
    Write-Host "  git push" -ForegroundColor White
} else {
    Write-Host "✗ CÓ LỖI CẦN SỬA!" -ForegroundColor Red
    Write-Host "Vui lòng kiểm tra các mục bị lỗi ở trên." -ForegroundColor Yellow
}
Write-Host ""

