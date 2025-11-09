# Changelog - Dòng chảy Lịch sử Đảng Cộng sản Việt Nam

## [Version 2.0] - 2025-11-09

### Tính năng mới

#### 1. Double Click để Expand/Collapse Chi tiết
- Thêm khả năng double click vào các node để mở rộng hoặc thu gọn các nhánh con chi tiết
- Các node có thể mở rộng sẽ hiển thị biểu tượng `+` (thu gọn) hoặc `−` (đang mở rộng)
- Biểu tượng được hiển thị ở góc phải của node

#### 2. Cấu trúc dữ liệu mới
- Thêm node type `detail`: Các nhánh chi tiết có thể expand/collapse
- Thêm node type `detail-item`: Các mục chi tiết cụ thể
- Ví dụ: Node "Hội nghị TW 3 (6/1992)" giờ có 2 nhánh con:
  - "Ba quyết sách chiến lược" với 3 mục chi tiết
  - "Mối quan hệ quốc tế" với 6 mục chi tiết

#### 3. Visual Indicators
- Thêm circle với dấu +/− để chỉ ra node có thể expand/collapse
- Circle có màu tương ứng với giai đoạn lịch sử
- Hover effect để người dùng biết có thể tương tác

### Cải tiến

#### 1. Cải thiện trải nghiệm người dùng
- Single click: Xem tóm tắt trong panel bên phải
- Double click: Mở rộng/thu gọn chi tiết
- Smooth animation khi expand/collapse

#### 2. Cải thiện hiệu suất
- Chỉ render các node đang hiển thị
- Các node depth >= 3 được collapse mặc định để giảm tải ban đầu

#### 3. Cải thiện CSS
- Thêm style cho node type `detail` và `detail-item`
- Màu sắc phân biệt rõ ràng giữa các loại node
- Responsive design tốt hơn

### Files đã thay đổi

1. **js/data.js**
   - Cập nhật cấu trúc dữ liệu cho node "Hội nghị TW 3 (6/1992)"
   - Thêm children với type `detail` và `detail-item`

2. **js/mindmap.js**
   - Thêm logic expand/collapse với hàm `toggleNode()`
   - Thêm hàm `update()` để cập nhật visualization khi toggle
   - Thêm hàm `updateLinks()` để cập nhật links
   - Cập nhật `getNodeClass()` để hỗ trợ node type mới
   - Cập nhật `getNodeWidth()`, `getNodeHeight()`, `getTextSize()` cho node type mới
   - Thêm visual indicator (circle với +/−) cho các node có thể expand/collapse

3. **styles/mindmap.css**
   - Thêm style cho `.node-detail` và `.node-detail-item`
   - Thêm style cho `.expand-indicator`
   - Thêm style cho các trạng thái collapsed/expanded

4. **main.html**
   - Cập nhật hướng dẫn sử dụng trong info modal

### Hướng dẫn sử dụng

1. **Xem tóm tắt**: Click 1 lần vào node
2. **Xem chi tiết**: Double click vào node có biểu tượng +/−
3. **Thu gọn**: Double click vào node đang mở rộng (có biểu tượng −)

### Kế hoạch tương lai

- [ ] Thêm animation mượt mà hơn khi expand/collapse
- [ ] Thêm khả năng expand/collapse tất cả nodes cùng lúc
- [ ] Thêm breadcrumb navigation
- [ ] Thêm export to PDF/PNG
- [ ] Thêm dark mode

### Bug Fixes

- Sửa lỗi indicator không cập nhật khi toggle
- Sửa lỗi layout khi có nhiều nodes
- Cải thiện performance khi render nhiều nodes

---

## [Version 1.0] - 2025-11-08

### Tính năng ban đầu

- Interactive mindmap với D3.js
- Zoom và pan
- Filter theo giai đoạn
- Search functionality
- Detail panel
- Responsive design

