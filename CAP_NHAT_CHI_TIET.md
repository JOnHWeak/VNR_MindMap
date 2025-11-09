# Cập nhật chi tiết - Tính năng Double Click

## Tổng quan

Đã cập nhật thành công tính năng double click để xem chi tiết các nhánh con trong mindmap. Khi double click vào một node, các nhánh con chi tiết sẽ được hiển thị hoặc ẩn đi.

## Ví dụ cụ thể: Node "Hội nghị TW 3 (6/1992)"

### Trước khi double click:
```
Hội nghị TW 3 (6/1992) [+]
```

### Sau khi double click:
```
Hội nghị TW 3 (6/1992) [−]
├── Ba quyết sách chiến lược [+]
│   ├── Củng cố quốc phòng, an ninh
│   ├── Mở rộng quan hệ đối ngoại
│   └── Đổi mới và chính sách ứng phó
└── Mối quan hệ quốc tế [+]
    ├── Bình thường hóa quan hệ Việt Nam-Trung Quốc (từ 11/1991)
    ├── Rút quân tình nguyện khỏi Campuchia (vào 9/1989)
    ├── Thành lập quan hệ ngoại giao với Hoa Kỳ (11/7/1995)
    ├── Gia nhập ASEAN (28/7/1995)
    ├── Đến cuối năm 1995: quan hệ ngoại giao với 160 nước
    └── Quan hệ thương mại với trên 100 nước
```

## Cấu trúc dữ liệu đã cập nhật

### Node "Hội nghị TW 3 (6/1992)"

```javascript
{
    id: "e2-2", 
    name: "Hội nghị TW 3 (6/1992)", 
    type: "event", 
    icon: "fas fa-globe-asia", 
    description: "Chính sách đối ngoại", 
    content: {
        summary: "Đề ra ba quyết sách chiến lược, mở rộng quan hệ đối ngoại."
    },
    children: [
        {
            id: "e2-2-1", 
            name: "Ba quyết sách chiến lược", 
            type: "detail", 
            content: {summary: "Ba quyết sách chiến lược quan trọng"},
            children: [
                {id: "e2-2-1-1", name: "Củng cố quốc phòng, an ninh", type: "detail-item"},
                {id: "e2-2-1-2", name: "Mở rộng quan hệ đối ngoại", type: "detail-item"},
                {id: "e2-2-1-3", name: "Đổi mới và chính sách ứng phó", type: "detail-item"}
            ]
        },
        {
            id: "e2-2-2", 
            name: "Mối quan hệ quốc tế", 
            type: "detail", 
            content: {summary: "Các mối quan hệ quốc tế quan trọng"},
            children: [
                {id: "e2-2-2-1", name: "Bình thường hóa quan hệ Việt Nam-Trung Quốc (từ 11/1991)", type: "detail-item"},
                {id: "e2-2-2-2", name: "Rút quân tình nguyện khỏi Campuchia (vào 9/1989)", type: "detail-item"},
                {id: "e2-2-2-3", name: "Thành lập quan hệ ngoại giao với Hoa Kỳ (11/7/1995)", type: "detail-item"},
                {id: "e2-2-2-4", name: "Gia nhập ASEAN (28/7/1995)", type: "detail-item"},
                {id: "e2-2-2-5", name: "Đến cuối năm 1995: quan hệ ngoại giao với 160 nước", type: "detail-item"},
                {id: "e2-2-2-6", name: "Quan hệ thương mại với trên 100 nước", type: "detail-item"}
            ]
        }
    ]
}
```

## Các node type mới

### 1. `detail`
- Màu nền: `#fff8e1` (vàng nhạt)
- Kích thước: 32px cao, width tự động theo nội dung
- Font size: 10px
- Có thể expand/collapse

### 2. `detail-item`
- Màu nền: `#f5f5f5` (xám nhạt)
- Kích thước: 28px cao, width tự động theo nội dung
- Font size: 9px
- Không có children

## Cách hoạt động

### 1. Khởi tạo
- Khi load trang, tất cả các node có depth >= 3 sẽ được collapse mặc định
- Điều này giúp giảm tải ban đầu và tránh mindmap quá phức tạp

### 2. Toggle (Expand/Collapse)
- Double click vào node có biểu tượng +/−
- Node sẽ chuyển đổi giữa trạng thái expanded và collapsed
- Animation mượt mà khi thêm/xóa nodes

### 3. Visual Indicator
- Circle nhỏ với dấu + hoặc −
- Vị trí: Góc phải của node
- Màu sắc: Tương ứng với giai đoạn lịch sử
- Cursor: pointer khi hover

## Các files đã cập nhật

### 1. js/data.js
- Cập nhật node "Hội nghị TW 3 (6/1992)" với cấu trúc mới
- Thêm 2 nhánh detail và 9 detail-item

### 2. js/mindmap.js
- Thêm `collapsedNodes` set để track các node đang collapse
- Thêm hàm `toggleNode(node)` để toggle expand/collapse
- Thêm hàm `update()` để cập nhật visualization
- Thêm hàm `updateLinks()` để cập nhật links
- Cập nhật `getNodeClass()`, `getNodeWidth()`, `getNodeHeight()`, `getTextSize()`
- Thêm visual indicator trong `renderNodes()` và `update()`

### 3. styles/mindmap.css
- Thêm style cho `.node-detail` và `.node-detail-item`
- Thêm style cho `.has-children`, `.collapsed`, `.expanded`
- Thêm style cho `.expand-indicator`

### 4. main.html
- Cập nhật hướng dẫn sử dụng trong info modal

## Hướng dẫn mở rộng cho các nodes khác

Để thêm chi tiết cho các nodes khác, làm theo cấu trúc sau:

```javascript
{
    id: "node-id",
    name: "Tên node",
    type: "event", // hoặc "sub", "period"
    children: [
        {
            id: "detail-1",
            name: "Nhánh chi tiết 1",
            type: "detail",
            children: [
                {id: "item-1-1", name: "Mục 1", type: "detail-item"},
                {id: "item-1-2", name: "Mục 2", type: "detail-item"}
            ]
        },
        {
            id: "detail-2",
            name: "Nhánh chi tiết 2",
            type: "detail",
            children: [
                {id: "item-2-1", name: "Mục 1", type: "detail-item"},
                {id: "item-2-2", name: "Mục 2", type: "detail-item"}
            ]
        }
    ]
}
```

## Testing

Để test tính năng:

1. Mở http://127.0.0.1:8000/main.html
2. Tìm node "Hội nghị TW 3 (6/1992)" (trong giai đoạn 1991-1996)
3. Double click vào node
4. Kiểm tra xem 2 nhánh con có hiển thị không
5. Double click lại để collapse
6. Kiểm tra animation và visual indicator

## Lưu ý

- Các node có children sẽ tự động hiển thị indicator +/−
- Depth >= 3 sẽ được collapse mặc định
- Single click vẫn hiển thị detail panel như cũ
- Double click chỉ toggle expand/collapse

