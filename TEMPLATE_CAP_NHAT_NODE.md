# Template cập nhật node với cấu trúc children

## Cấu trúc hiện tại (cần thay đổi)

```javascript
{
    id: "node-id",
    name: "Tên node",
    type: "event",
    icon: "fas fa-icon",
    description: "Mô tả ngắn",
    content: {
        summary: "Tóm tắt",
        details: [
            "Dòng 1",
            "• Item 1",
            "• Item 2",
            "",
            "Dòng 2",
            "• Item 3"
        ]
    }
}
```

## Cấu trúc mới (cần cập nhật thành)

```javascript
{
    id: "node-id",
    name: "Tên node",
    type: "event",
    icon: "fas fa-icon",
    description: "Mô tả ngắn",
    content: {
        summary: "Tóm tắt"
    },
    children: [
        {
            id: "node-id-1",
            name: "Nhánh chi tiết 1",
            type: "detail",
            content: {summary: "Tóm tắt nhánh 1"},
            children: [
                {id: "node-id-1-1", name: "Item 1", type: "detail-item"},
                {id: "node-id-1-2", name: "Item 2", type: "detail-item"}
            ]
        },
        {
            id: "node-id-2",
            name: "Nhánh chi tiết 2",
            type: "detail",
            content: {summary: "Tóm tắt nhánh 2"},
            children: [
                {id: "node-id-2-1", name: "Item 3", type: "detail-item"}
            ]
        }
    ]
}
```

## Ví dụ cụ thể: Đại hội VIII

### Trước khi cập nhật:

```javascript
{
    id: "e3-1",
    name: "Đại hội VIII (28/6-1/7/1996)",
    type: "event",
    icon: "fas fa-landmark",
    description: "Mở ra thời kỳ CNH, HĐH",
    content: {
        summary: "Đại hội VIII tổng kết 10 năm đổi mới.",
        details: [
            "1.198 đại biểu, hơn 2,1 triệu đảng viên",
            "",
            "5 bài học chính:",
            "1. Giữ vững mục tiêu độc lập dân tộc CNXH",
            "2. Kết hợp kinh tế với chính trị",
            "3. Xây dựng kinh tế thị trường nhiều thành phần",
            "4. Phát triển dân chủ tập thể",
            "5. Mở rộng hợp tác quốc tế",
            "",
            "Mục tiêu:",
            "• Chuyển sang CNH, HĐH",
            "• Tạo cơ sở vật chất-kỹ thuật cho CNXH"
        ]
    }
}
```

### Sau khi cập nhật:

```javascript
{
    id: "e3-1",
    name: "Đại hội VIII (28/6-1/7/1996)",
    type: "event",
    icon: "fas fa-landmark",
    description: "Mở ra thời kỳ CNH, HĐH",
    content: {
        summary: "Đại hội VIII tổng kết 10 năm đổi mới."
    },
    children: [
        {
            id: "e3-1-1",
            name: "Bối cảnh",
            type: "detail",
            content: {summary: "Thông tin về đại hội"},
            children: [
                {id: "e3-1-1-1", name: "1.198 đại biểu, hơn 2,1 triệu đảng viên", type: "detail-item"},
                {id: "e3-1-1-2", name: "Sau 10 năm đổi mới, đạt thành tựu lớn", type: "detail-item"},
                {id: "e3-1-1-3", name: "Lạm phát từ 67,1% (1991) giảm 12,7% (1995)", type: "detail-item"}
            ]
        },
        {
            id: "e3-1-2",
            name: "5 bài học chính",
            type: "detail",
            content: {summary: "Bài học từ 10 năm đổi mới"},
            children: [
                {id: "e3-1-2-1", name: "Giữ vững mục tiêu độc lập dân tộc CNXH", type: "detail-item"},
                {id: "e3-1-2-2", name: "Kết hợp kinh tế với chính trị từ đầu", type: "detail-item"},
                {id: "e3-1-2-3", name: "Xây dựng kinh tế thị trường nhiều thành phần", type: "detail-item"},
                {id: "e3-1-2-4", name: "Phát triển dân chủ tập thể nhân dân", type: "detail-item"},
                {id: "e3-1-2-5", name: "Mở rộng hợp tác quốc tế", type: "detail-item"}
            ]
        },
        {
            id: "e3-1-3",
            name: "Mục tiêu tổng quát",
            type: "detail",
            content: {summary: "Mục tiêu của Đại hội VIII"},
            children: [
                {id: "e3-1-3-1", name: "Chuyển sang thời kỳ CNH, HĐH", type: "detail-item"},
                {id: "e3-1-3-2", name: "Tạo cơ sở vật chất-kỹ thuật cho CNXH", type: "detail-item"}
            ]
        }
    ]
}
```

## Quy tắc đặt ID

1. **Node cha**: `e[nhánh]-[số]` (ví dụ: `e3-1` = Event 1 của nhánh 3)
2. **Detail node**: `e[nhánh]-[số]-[số]` (ví dụ: `e3-1-1` = Detail 1 của event e3-1)
3. **Detail item**: `e[nhánh]-[số]-[số]-[số]` (ví dụ: `e3-1-1-1` = Item 1 của detail e3-1-1)

## Quy tắc đặt tên

1. **Detail node**: Tên nhóm/danh mục (ví dụ: "Bối cảnh", "Nội dung chính", "Kết quả")
2. **Detail item**: Nội dung cụ thể, ngắn gọn, dễ hiểu

## Node types

- `event`: Sự kiện chính (màu nền trắng nhạt)
- `detail`: Nhánh chi tiết (màu vàng nhạt `#fff8e1`)
- `detail-item`: Mục chi tiết (màu xám nhạt `#f5f5f5`)

## Checklist khi cập nhật

- [ ] Giữ nguyên `id`, `name`, `type`, `icon`, `description` của node gốc
- [ ] Giữ `summary` trong `content`, xóa `details`
- [ ] Tạo `children` array với các detail nodes
- [ ] Mỗi detail node có `id`, `name`, `type: "detail"`, `content`, `children`
- [ ] Mỗi detail-item có `id`, `name`, `type: "detail-item"`
- [ ] ID phải unique và theo quy tắc
- [ ] Kiểm tra syntax JSON (dấu phẩy, ngoặc)

## Lưu ý quan trọng

1. **Không thay đổi** các thuộc tính của node gốc (id, name, type, icon, description)
2. **Chỉ thay đổi** phần `content` và thêm `children`
3. **Đảm bảo** mỗi detail node có ít nhất 1 detail-item
4. **Kiểm tra** syntax JSON trước khi save
5. **Test** bằng cách double click vào node sau khi cập nhật

## Script hỗ trợ chuyển đổi

Nếu bạn có nhiều node cần chuyển đổi, có thể sử dụng script sau:

```javascript
// Hàm chuyển đổi từ details array sang children structure
function convertDetailsToChildren(nodeId, details) {
    const children = [];
    let currentDetail = null;
    let detailIndex = 0;
    let itemIndex = 0;
    
    details.forEach(line => {
        line = line.trim();
        if (!line) return; // Skip empty lines
        
        // Check if it's a header (ends with ":")
        if (line.endsWith(':')) {
            if (currentDetail) {
                children.push(currentDetail);
            }
            detailIndex++;
            itemIndex = 0;
            currentDetail = {
                id: `${nodeId}-${detailIndex}`,
                name: line.slice(0, -1), // Remove ":"
                type: "detail",
                content: {summary: line.slice(0, -1)},
                children: []
            };
        } else if (line.startsWith('•') || line.match(/^\d+\./)) {
            // It's an item
            itemIndex++;
            const itemText = line.replace(/^[•\d.]\s*/, '');
            if (currentDetail) {
                currentDetail.children.push({
                    id: `${nodeId}-${detailIndex}-${itemIndex}`,
                    name: itemText,
                    type: "detail-item"
                });
            }
        }
    });
    
    if (currentDetail) {
        children.push(currentDetail);
    }
    
    return children;
}
```

## Ví dụ sử dụng script

```javascript
const nodeId = "e3-1";
const details = [
    "Bối cảnh:",
    "• 1.198 đại biểu, hơn 2,1 triệu đảng viên",
    "• Sau 10 năm đổi mới",
    "",
    "5 bài học chính:",
    "1. Giữ vững mục tiêu độc lập dân tộc CNXH",
    "2. Kết hợp kinh tế với chính trị"
];

const children = convertDetailsToChildren(nodeId, details);
console.log(JSON.stringify(children, null, 2));
```

