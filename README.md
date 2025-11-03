# Dòng chảy Lịch sử Đảng Cộng sản Việt Nam - Interactive Mindmap

## Giới thiệu

Dự án "Dòng chảy Lịch sử Đảng Cộng sản Việt Nam" là một website mindmap tương tác trình bày các giai đoạn phát triển quan trọng của Đảng Cộng sản Việt Nam từ 1930 đến nay. Đây là một sản phẩm sáng tạo nhằm trực quan hóa kiến thức lịch sử một cách sinh động và dễ hiểu.

## Tính năng chính

### 🎯 Mindmap tương tác
- **Zoom và Pan**: Phóng to/thu nhỏ và di chuyển mindmap một cách mượt mà
- **Click để khám phá**: Nhấp vào các nút để xem thông tin chi tiết
- **Highlighting**: Làm nổi bật các kết nối khi chọn một nút

### 🎨 Giao diện đẹp mắt
- **Thiết kế hiện đại**: Giao diện tươi sáng, năng động
- **Bảng màu phân biệt**: Mỗi giai đoạn lịch sử có màu sắc riêng
  - 🔴 **1930-1945**: Màu đỏ cam (Giai đoạn thành lập và giành chính quyền)
  - 🔵 **1945-1975**: Màu xanh dương (Giai đoạn kháng chiến)
  - 🟢 **1975-2018**: Màu xanh lá (Giai đoạn đổi mới và hội nhập)

### 📱 Responsive Design
- Tương thích với máy tính, tablet và điện thoại
- Tối ưu hóa cho cả desktop và mobile

### 🎬 Nội dung đa phương tiện
- **Hình ảnh minh họa**: Ảnh lịch sử cho từng sự kiện
- **Video YouTube**: Tài liệu phim ảnh liên quan
- **Thông tin chi tiết**: Tóm tắt, nguồn tham khảo

### ⚡ Hiệu ứng động
- Animation loading mượt mà
- Hiệu ứng hover và click
- Chuyển cảnh sinh động

## Cấu trúc dự án

```
VNR_Mindmap/
├── index.html              # Trang chính
├── styles/                 # Thư mục CSS
│   ├── main.css           # Styles chính
│   ├── mindmap.css        # Styles cho mindmap
│   └── animations.css     # Hiệu ứng animation
├── js/                    # Thư mục JavaScript
│   ├── data.js           # Dữ liệu mindmap
│   ├── mindmap.js        # Logic mindmap chính
│   ├── interactions.js   # Xử lý tương tác
│   ├── animations.js     # Controller animation
│   └── main.js          # Ứng dụng chính
└── README.md            # Tài liệu này
```

## Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và animations
- **JavaScript ES6+**: Logic ứng dụng
- **D3.js**: Thư viện visualization cho mindmap
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter font)

## Cách sử dụng

### 1. Mở ứng dụng
- Mở file `index.html` trong trình duyệt web
- Chờ loading screen hoàn tất

### 2. Điều hướng
- **Di chuyển**: Kéo để di chuyển mindmap
- **Zoom**: Sử dụng nút +/- hoặc cuộn chuột
- **Reset**: Nhấn nút Home để về vị trí ban đầu

### 3. Khám phá nội dung
- **Click vào nút**: Xem thông tin chi tiết
- **Panel bên phải**: Hiển thị nội dung, hình ảnh, video
- **Đóng panel**: Nhấn X hoặc click ra ngoài

### 4. Lọc theo giai đoạn
- Sử dụng checkbox ở góc trái để hiển thị/ẩn từng giai đoạn
- Có thể xem từng giai đoạn riêng biệt

### 5. Phím tắt
- **Esc**: Đóng panel/deselect
- **Ctrl + (+/-)**: Zoom in/out
- **Ctrl + 0**: Reset view
- **Ctrl + F**: Fullscreen
- **Ctrl + I**: Thông tin
- **Ctrl + 1/2/3**: Toggle giai đoạn

## Cấu trúc nội dung

### Nút trung tâm
**Lịch sử Đảng Cộng sản Việt Nam (1930 - nay)**

### Giai đoạn 1: 1930-1945 (Đảng ra đời và lãnh đạo giành chính quyền)
- Bối cảnh ra đời
- Nguyễn Ái Quốc chuẩn bị
- Hội nghị thành lập Đảng (2/1930)
- Các cao trào (1930-1945)
  - Phong trào 1930-1931 (Xô Viết Nghệ Tĩnh)
  - Phong trào Dân chủ 1936-1939
  - Phong trào Giải phóng dân tộc 1939-1945
- Cách mạng Tháng Tám 1945

### Giai đoạn 2: 1945-1975 (Lãnh đạo kháng chiến và thống nhất đất nước)
- Kháng chiến chống Pháp (1945-1954)
  - Chiến dịch Việt Bắc Thu-Đông 1947
  - Chiến dịch Điện Biên Phủ 1954
- Xây dựng CNXH ở Miền Bắc và kháng chiến ở Miền Nam (1954-1965)
- Kháng chiến chống Mỹ cứu nước (1965-1975)
  - Cuộc Tổng tiến công Mậu Thân 1968
  - Hiệp định Paris 1973
  - Đại thắng Mùa Xuân 1975

### Giai đoạn 3: 1975-2018 (Lãnh đạo cả nước đi lên CNXH và Đổi mới)
- Giai đoạn 1975-1985
- Công cuộc Đổi Mới (từ 1986)
- Thành tựu Đổi mới (1986-2018)

## Tính năng nâng cao

### 🔍 Tìm kiếm
- Tìm kiếm sự kiện theo tên
- Highlight kết quả tìm kiếm

### 📤 Xuất dữ liệu
- Xuất mindmap thành hình ảnh PNG
- Lưu trạng thái hiện tại

### ♿ Accessibility
- Hỗ trợ keyboard navigation
- ARIA labels cho screen readers
- Respect prefers-reduced-motion

### 📊 Performance
- Tối ưu hóa hiệu suất tự động
- Giảm animation khi FPS thấp
- Lazy loading cho nội dung

## Nguồn tham khảo

- **Giáo trình Lịch sử Đảng Cộng sản Việt Nam** - Nguồn nội dung chính
- **Tài liệu lịch sử** từ các nguồn uy tín
- **Hình ảnh và video** từ kho tư liệu quốc gia
- **Google Search** cho hình ảnh minh họa
- **YouTube** cho video tài liệu

## Phát triển và tùy chỉnh

### Thêm nội dung mới
1. Chỉnh sửa file `js/data.js`
2. Thêm node mới vào cấu trúc dữ liệu
3. Bao gồm: id, name, type, period, icon, description, content

### Tùy chỉnh màu sắc
1. Chỉnh sửa file `styles/mindmap.css`
2. Thay đổi các class `.period-1930`, `.period-1945`, `.period-1975`

### Thêm animation
1. Chỉnh sửa file `js/animations.js`
2. Tạo method mới trong class `MindmapAnimations`

## Hỗ trợ trình duyệt

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ⚠️ Internet Explorer không được hỗ trợ

## Giấy phép

Dự án này được tạo ra cho mục đích giáo dục. Nội dung lịch sử dựa trên tài liệu chính thức và nguồn tham khảo uy tín.

## Liên hệ

Nếu có thắc mắc hoặc đóng góp, vui lòng tạo issue hoặc pull request.

---

**Phiên bản**: 1.0.0  
**Ngày cập nhật**: 2024  
**Tác giả**: VNR Mindmap Team
