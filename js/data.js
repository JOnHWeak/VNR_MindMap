// Data structure for the Vietnamese Communist Party History Mindmap
// Phần 2: ĐỔI MỚI, CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA VÀ HỘI NHẬP QUỐC TẾ (1986-2018)

const mindmapData = {
    id: "central",
    name: "Đổi mới, CNH, HĐH & Hội nhập quốc tế",
    subtitle: "(1986-2018)",
    type: "central",
    icon: "fas fa-star",
    description: "Giai đoạn Đổi mới, Công nghiệp hóa, Hiện đại hóa và Hội nhập quốc tế của Việt Nam.",
    content: {
        summary: "Từ năm 1986, Đảng khởi xướng và lãnh đạo công cuộc Đổi Mới toàn diện, đưa đất nước ra khỏi khủng hoảng kinh tế-xã hội, chuyển đổi sang nền kinh tế thị trường định hướng xã hội chủ nghĩa, đẩy mạnh công nghiệp hóa, hiện đại hóa và chủ động hội nhập quốc tế.",
        images: [{url: "https://via.placeholder.com/400x300/d9534f/ffffff?text=Doi+Moi+1986", caption: "Công cuộc Đổi Mới 1986-2018"}],
        videos: [],
        citations: ["Giáo trình Lịch sử Đảng Cộng sản Việt Nam"]
    },
    children: [
        // NHÁNH 1: GIAI ĐOẠN ĐỔI MỚI TOÀN DIỆN (1986-1996)
        {
            id: "branch-1",
            name: "GIAI ĐOẠN ĐỔI MỚI TOÀN DIỆN",
            subtitle: "(1986-1996)",
            type: "period",
            icon: "fas fa-seedling",
            description: "Khởi đầu công cuộc đổi mới toàn diện",
            content: {summary: "Giai đoạn đầu tiên của công cuộc đổi mới."},
            children: [
                {
                    id: "e1-1", name: "Đại hội VI (15-18/12/1986)", type: "event", icon: "fas fa-flag-checkered", content: {summary: "Khởi đầu đổi mới"},
                    children: [
                        {id: "e1-1-1", name: "Bối cảnh", type: "detail", children: [
                            {id: "e1-1-1-1", name: "Liên Xô, các nước XHCN khó khăn kinh tế", type: "detail-item"},
                            {id: "e1-1-1-2", name: "Việt Nam bị cấm vận, cô lập", type: "detail-item"},
                            {id: "e1-1-1-3", name: "Lạm phát cao (774% năm 1986)", type: "detail-item"},
                            {id: "e1-1-1-4", name: "Phân phối, lưu thông rối loạn", type: "detail-item"},
                            {id: "e1-1-1-5", name: "Vi phạm pháp luật, tham nhũng lan rộng", type: "detail-item"}
                        ]},
                        {id: "e1-1-2", name: "Nội dung", type: "detail", children: [
                            {id: "e1-1-2-1", name: "3 đặc trưng cơ bản của CNXH", type: "detail-item"},
                            {id: "e1-1-2-2", name: "Đường lối đổi mới toàn diện", type: "detail-item"},
                            {id: "e1-1-2-3", name: "4 nhiệm vụ chính", type: "detail-item"}
                        ]},
                        {id: "e1-1-3", name: "Hạn chế", type: "detail", children: [
                            {id: "e1-1-3-1", name: "Chưa phát hiện khuyết điểm mô hình CNXH Phương Bắc", type: "detail-item"},
                            {id: "e1-1-3-2", name: "Đặt chỉ tiêu kinh tế vượt quá hiện thực", type: "detail-item"}
                        ]},
                        {id: "e1-1-4", name: "Kết quả (1986-1987)", type: "detail", children: [
                            {id: "e1-1-4-1", name: "Lạm phát giảm còn 67,1% (1991)", type: "detail-item"},
                            {id: "e1-1-4-2", name: "Bỏ phân phối theo tem phiếu (1988)", type: "detail-item"},
                            {id: "e1-1-4-3", name: "Tự cung cấp và xuất khẩu gạo (1989)", type: "detail-item"}
                        ]}
                    ]
                },
                {
                    id: "e1-2", name: "Hội nghị TW 6 (8/1979 & 3/1989)", type: "event", icon: "fas fa-cogs", content: {summary: "Điều chỉnh chính sách"},
                    children: [
                        {id: "e1-2-1", name: "Hội nghị TW 6 (8/1979)", type: "detail", children: [
                            {id: "e1-2-1-1", name: "Bước tự phê phán đầu tiên", type: "detail-item"},
                            {id: "e1-2-1-2", name: "Phá bỏ rào cản cho sản xuất bung ra", type: "detail-item"}
                        ]},
                        {id: "e1-2-2", name: "Hội nghị TW 2 (4/1987)", type: "detail", children: [
                            {id: "e1-2-2-1", name: "4 giảm: chi ngân sách, nhập giá, lạm phát, khó khăn", type: "detail-item"},
                            {id: "e1-2-2-2", name: "Thực hiện chế độ một giá", type: "detail-item"}
                        ]},
                        {id: "e1-2-3", name: "Hội nghị TW 6 (3/1989)", type: "detail", children: [
                            {id: "e1-2-3-1", name: "Xác định đổi mới là con đường tất yếu", type: "detail-item"}
                        ]}
                    ]
                },
                {
                    id: "e1-3", name: "Khoán 10 & chính sách nông nghiệp", type: "event", icon: "fas fa-tractor", content: {summary: "Đột phá trong nông nghiệp"},
                    children: [
                        {id: "e1-3-1", name: "Nghị quyết 10 (4/1988)", type: "detail", children: [
                            {id: "e1-3-1-1", name: "Khoán sản phẩm cuối cùng cho nông dân", type: "detail-item"},
                            {id: "e1-3-1-2", name: "Canh tác trên đất 15 năm", type: "detail-item"},
                            {id: "e1-3-1-3", name: "Thu nhập từ 40% sản lượng khoán trở lên", type: "detail-item"}
                        ]},
                        {id: "e1-3-2", name: "Kết quả", type: "detail", children: [
                            {id: "e1-3-2-1", name: "Sản lượng lương thực tăng lên 17 triệu tấn (1981-1985)", type: "detail-item"}
                        ]}
                    ]
                },
                {
                    id: "e1-4", name: "Đổi mới trong công nghiệp", type: "event", icon: "fas fa-industry", content: {summary: "Cải cách doanh nghiệp"},
                    children: [
                        {id: "e1-4-1", name: "Quyết định 25-CP (1/1981)", type: "detail", children: [
                            {id: "e1-4-1-1", name: "Quyền chủ động sản xuất, kinh doanh của xí nghiệp", type: "detail-item"},
                            {id: "e1-4-1-2", name: "Tự chủ tài chính", type: "detail-item"}
                        ]},
                        {id: "e1-4-2", name: "Quyết định 26-CP", type: "detail", children: [
                            {id: "e1-4-2-1", name: "Mở rộng lương khoán, lương sản phẩm", type: "detail-item"},
                            {id: "e1-4-2-2", name: "Sử dụng hình thức tiền thưởng", type: "detail-item"}
                        ]}
                    ]
                },
                {
                    id: "e1-5", name: "Đại hội VII (24-27/6/1991)", type: "event", icon: "fas fa-chart-line", content: {summary: "Tiếp tục đổi mới"},
                    children: [
                        {id: "e1-5-1", name: "Nội dung chính", type: "detail", children: [
                            {id: "e1-5-1-1", name: "Xây dựng kinh tế thị trường hàng hóa nhiều thành phần", type: "detail-item"},
                            {id: "e1-5-1-2", name: "Vận động theo cơ chế thị trường, quản lý của Nhà nước", type: "detail-item"}
                        ]},
                        {id: "e1-5-2", name: "Cương lĩnh năm 1991", type: "detail", children: [
                            {id: "e1-5-2-1", name: "5 bài học kinh nghiệm", type: "detail-item"},
                            {id: "e1-5-2-2", name: "6 đặc trưng cơ bản của CNXH", type: "detail-item"},
                            {id: "e1-5-2-3", name: "7 phương hướng xây dựng CNXH", type: "detail-item"}
                        ]},
                        {id: "e1-5-3", name: "Chiến lược KT-XH đến 2000", type: "detail", children: [
                            {id: "e1-5-3-1", name: "Mục tiêu: Ra khỏi khó khăn, ổn định, phát triển", type: "detail-item"},
                            {id: "e1-5-3-2", name: "GDP năm 2000 tăng gấp đôi 1990", type: "detail-item"}
                        ]}
                    ]
                }
            ]
        },
        // NHÁNH 2: GIAI ĐOẠN TIẾP TỤC ĐỔI MỚI (1991-1996)
        {
            id: "branch-2",
            name: "GIAI ĐOẠN TIẾP TỤC ĐỔI MỚI",
            subtitle: "(1991-1996)",
            type: "period",
            icon: "fas fa-arrow-up",
            description: "Củng cố và phát triển thành quả đổi mới",
            content: {summary: "Giai đoạn tiếp tục đổi mới, ổn định và phát triển."},
            children: [
                {id: "e2-1", name: "Mục tiêu và kết quả chung", type: "event", icon: "fas fa-trophy", description: "Thành tựu 1991-1996", content: {summary: "Giai đoạn 5 năm đạt nhiều thành tựu quan trọng.", details: ["Kết quả 5 năm (1991-1996):", "• GDP tăng 8,2% (kế hoạch 5,5-6,5%)", "• Lạm phát từ 67,1% (1991) giảm xuống 12,7% (1995)", "• Nền kinh tế thị trường hình thành", "• Bắt đầu tích lũy từ trong nước"]}},
                {id: "e2-2", name: "Hội nghị TW 3 (6/1992) - Chính sách đối ngoại", type: "event", icon: "fas fa-globe-asia", description: "Mở rộng quan hệ quốc tế", content: {summary: "Đề ra ba quyết sách chiến lược, mở rộng quan hệ đối ngoại.", details: ["Ba quyết sách chiến lược:", "• Củng cố quốc phòng, an ninh", "• Mở rộng quan hệ đối ngoại", "• Đổi mới và chính sách ứng phó", "", "Mối quan hệ quốc tế:", "• Bình thường hóa quan hệ VN-TQ (11/1991)", "• Rút quân khỏi Campuchia (9/1989)", "• Quan hệ ngoại giao với Hoa Kỳ (11/7/1995)", "• Gia nhập ASEAN (28/7/1995)", "• Quan hệ với 160 nước (cuối 1995)"]}},
                {id: "e2-3", name: "Hiệp định biên giới với Trung Quốc", type: "event", icon: "fas fa-handshake", description: "Giải quyết vấn đề biên giới", content: {summary: "Ký kết và hoàn thành phân giới cắm mốc.", details: ["Ký kết năm 1999", "Hoàn thành 31/12/2008", "", "Nội dung:", "• Xác định rõ biên giới trên đất liền", "• Hiện đại hóa biên giới", "• Tạo nền tảng hòa bình, hợp tác"]}},
                {id: "e2-4", name: "Chính sách nông dân, nông nghiệp", type: "event", icon: "fas fa-leaf", description: "Xây dựng nông thôn mới", content: {summary: "Tập trung phát triển nông nghiệp, nông thôn.", details: ["Hội nghị TW 5 (6/1993):", "• Xây dựng nông thôn mới", "• Hệ thống chính trị vững mạnh", "• Ổn định chính trị", "", "Hội nghị TW 7 (7/1994):", "• Phát triển công nghiệp, công nghệ", "• Xây dựng giai cấp công nhân mới", "• Mục tiêu CNH, HĐH"]}},
                {id: "e2-5", name: "Hội nghị giữa kỳ (1/1994)", type: "event", icon: "fas fa-balance-scale", description: "Nhà nước pháp quyền", content: {summary: "Hội nghị lần đầu tiên trong lịch sử Đảng.", details: ["• Xây dựng Nhà nước pháp quyền XHCN", "• Thực hiện Nghị quyết Đại hội VII", "• Chuẩn bị cho Đại hội VIII"]}}
            ]
        },
        // NHÁNH 3: CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA (1996-2001)
        {
            id: "branch-3",
            name: "GIAI ĐOẠN CNH, HĐH",
            subtitle: "(1996-2001)",
            type: "period",
            icon: "fas fa-industry",
            description: "Công nghiệp hóa, hiện đại hóa đất nước",
            content: {summary: "Chuyển sang công nghiệp hóa, hiện đại hóa."},
            children: [
                {id: "e3-1", name: "Đại hội VIII (28/6-1/7/1996)", type: "event", icon: "fas fa-landmark", description: "Mở ra thời kỳ CNH, HĐH", content: {summary: "Đại hội VIII tổng kết 10 năm đổi mới.", details: ["1.198 đại biểu, hơn 2,1 triệu đảng viên", "", "5 bài học chính:", "1. Giữ vững mục tiêu độc lập dân tộc CNXH", "2. Kết hợp kinh tế với chính trị", "3. Xây dựng kinh tế thị trường nhiều thành phần", "4. Phát triển dân chủ tập thể", "5. Mở rộng hợp tác quốc tế", "", "Mục tiêu:", "• Chuyển sang CNH, HĐH", "• Tạo cơ sở vật chất-kỹ thuật cho CNXH"]}},
                {id: "e3-2", name: "Chiến lược phát triển 2001-2010", type: "event", icon: "fas fa-map-marked-alt", description: "Định hướng dài hạn", content: {summary: "Đề ra chiến lược phát triển đến 2010 và 2020.", details: ["Mục tiêu:", "• Ra khỏi tình trạng khó khăn", "• Ổn định, phát triển kinh tế-xã hội", "• Tạo nền tảng cho năm 2020", "", "Chỉ tiêu:", "• GDP năm 2000 tăng gấp đôi so 1990", "• Chuyển dịch cơ cấu kinh tế", "• CNH, HĐH"]}},
                {id: "e3-3", name: "Khoán 10 cải tiến", type: "event", icon: "fas fa-seedling", description: "Hoàn thiện chính sách khoán", content: {summary: "Cải tiến chính sách khoán, tăng quyền tự chủ.", details: ["• Nhà nước công nhận khoán đất", "• Quyền tự do sản xuất", "• Thu hoạch vượt khoán được hưởng", "• Quyền mua bán tự do"]}},
                {id: "e3-4", name: "Chính sách FDI", type: "event", icon: "fas fa-handshake", description: "Thu hút đầu tư nước ngoài", content: {summary: "Luật Đầu tư nước ngoài thu hút FDI.", details: ["Luật Đầu tư nước ngoài:", "• Thông qua kỳ 8 Quốc hội", "• Hiệu lực từ 1/1/1988", "", "Kết quả:", "• Hơn 50 nước đầu tư", "• Hơn 100 nước có quan hệ thương mại", "• FDI tăng 20,3 tỷ USD"]}},
                {id: "e3-5", name: "Hội nghị TW 3 (6/1997)", type: "event", icon: "fas fa-gavel", description: "Nhà nước pháp quyền", content: {summary: "Tiếp tục xây dựng Nhà nước pháp quyền XHCN.", details: ["• Phát huy quyền làm chủ nhân dân", "• Xây dựng Nhà nước pháp quyền XHCN", "• Tăng cường lãnh đạo của Đảng"]}}
            ]
        },
        // NHÁNH 4: GIAI ĐOẠN NÂNG CAO VÀ HOÀN THIỆN (2001-2018)
        {
            id: "branch-4",
            name: "GIAI ĐOẠN NÂNG CAO VÀ HOÀN THIỆN",
            subtitle: "(2001-2018)",
            type: "period",
            icon: "fas fa-chart-line",
            description: "Nâng cao chất lượng, hiệu quả đổi mới",
            content: {summary: "Giai đoạn tiếp tục đổi mới, nâng cao chất lượng, hiệu quả, hội nhập sâu rộng."},
            children: [
                {id: "e4-1", name: "Đại hội IX (8/2001)", type: "event", icon: "fas fa-sync-alt", description: "Tiếp tục đổi mới", content: {summary: "Tiếp tục đổi mới, cải cách, nâng cao hiệu quả doanh nghiệp.", details: ["Bối cảnh:", "• Sự kiện 11/9/2001 tại Mỹ", "• Thế giới thay đổi mau lẹ", "• Tình hình phức tạp", "", "Nội dung:", "• Tiếp tục đổi mới, cải cách", "• Nâng cao hiệu quả doanh nghiệp", "• Sắp xếp, cải tổ doanh nghiệp nhà nước"]}},
                {id: "e4-2", name: "Hội nghị TW 8 (7/2003) - Chiến lược bảo vệ Tổ quốc", type: "event", icon: "fas fa-shield-alt", description: "Bảo vệ Tổ quốc", content: {summary: "Đề ra chiến lược bảo vệ Tổ quốc toàn diện.", details: ["Ba nghị quyết quan trọng:", "• Phát huy sức mạnh đoàn kết toàn dân", "• Ổn định chính trị, tăng cường ổn định xã hội", "• Chiến lược bảo vệ Tổ quốc trong tình hình mới", "", "Mục tiêu bảo vệ:", "• Bảo vệ độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ", "• Bảo vệ Đảng, Nhà nước, nhân dân, CNXH", "• Bảo vệ sự nghiệp đổi mới, CNH, HĐH", "• Bảo vệ an ninh chính trị, quốc gia"]}},
                {id: "e4-3", name: "WTO và hội nhập quốc tế", type: "event", icon: "fas fa-globe", description: "Hội nhập kinh tế quốc tế", content: {summary: "Việt Nam chính thức gia nhập WTO.", details: ["Gia nhập WTO:", "• 28/7/1994: Tham gia Công ước Luật biển 1982", "• 11/2006: Gia nhập WTO (thành viên thứ 150)", "• Dấu mốc quan trọng trong hội nhập", "", "Kết quả sau 1 năm (2007):", "• GDP tăng 8,48%", "• Xuất khẩu tăng 21,5%", "• FDI tăng 20,3 tỷ USD"]}},
                {id: "e4-4", name: "Hội nghị TW 5 (3/2002) - Phát triển kinh tế tư nhân", type: "event", icon: "fas fa-store", description: "Khuyến khích kinh tế tư nhân", content: {summary: "Coi kinh tế tập thể và tư nhân là bộ phận quan trọng.", details: ["Kinh tế tập thể:", "• Bộ phận quan trọng của nền kinh tế", "• Vấn đề chiến lược lâu dài", "", "Kinh tế tư nhân:", "• Phát triển rộng khắp", "• Gắn với phát triển kinh tế", "• Hạn chế: quy mô nhỏ, công nghệ lạc hậu"]}},
                {id: "e4-5", name: "Đại hội X (18-25/4/2006)", type: "event", icon: "fas fa-forward", description: "Tiếp tục đổi mới toàn diện", content: {summary: "Tiếp tục đổi mới toàn diện, nâng cao hiệu quả, chất lượng.", details: ["Nội dung chính:", "• Tiếp tục đổi mới toàn diện", "• Nâng cao hiệu quả, chất lượng"]}},
                {id: "e4-6", name: "Đại hội XI (12-19/1/2011)", type: "event", icon: "fas fa-star", description: "Bổ sung Cương lĩnh", content: {summary: "Đại hội XI bổ sung, phát triển Cương lĩnh xây dựng nước CNXH.", details: ["1.377 đại biểu, đại diện 3,6 triệu đảng viên", "", "Bối cảnh:", "• Kỷ niệm 1.000 năm Thăng Long-Hà Nội", "• Thành tựu lớn nhưng còn nhiều khó khăn", "", "Nội dung:", "• Cương lĩnh xây dựng nước CNXH (bổ sung 2011)", "• Chiến lược, chương trình 2011-2020", "", "Bài học chính:", "• Giữ vững mục tiêu độc lập dân tộc CNXH", "• Kết hợp lực mạnh dân tộc với thời đại", "• Phát huy sức mạnh đoàn kết toàn dân"]}}
            ]
        },
        // NHÁNH 5: CÁC CHÍNH SÁCH CHỦ YẾU
        {
            id: "branch-5",
            name: "CÁC CHÍNH SÁCH CHỦ YẾU",
            type: "period",
            icon: "fas fa-file-contract",
            description: "Các chính sách quan trọng trong giai đoạn đổi mới",
            content: {summary: "Tổng hợp các chính sách chủ yếu được triển khai."},
            children: [
                {id: "e5-1", name: "Cải cách chính sách tiền lương, bảo hiểm xã hội", type: "event", icon: "fas fa-money-bill-wave", description: "Cải cách tiền lương", content: {summary: "Cải cách chính sách tiền lương, bảo hiểm xã hội.", details: ["Mục tiêu:", "• Đầu tư cho phát triển", "• Tạo nguồn nhân lực chất lượng cao", "• Nâng cao hiệu quả bộ máy nhà nước", "", "Nội dung 2008-2012:", "• Trả lương đảm bảo sống được", "• Bảo hiểm xã hội, trợ cấp bảo trợ", "• Liên hệ với kiềm chế tăng giá", "• Bảo đảm cho người nghèo"]}},
                {id: "e5-2", name: "Chính sách nông dân, nông nghiệp (1993)", type: "event", icon: "fas fa-tractor", description: "Phát triển nông nghiệp, nông thôn", content: {summary: "Chính sách phát triển toàn diện nông nghiệp, nông thôn.", details: ["3 mục tiêu chính:", "• Xây dựng nông thôn mới", "• Phát triển kinh tế nông nghiệp", "• Văn hóa phong phú, tinh thần lao động"]}},
                {id: "e5-3", name: "Chính sách dân tộc", type: "event", icon: "fas fa-users", description: "Đoàn kết các dân tộc", content: {summary: "Phát huy sức mạnh đoàn kết toàn dân, bình đẳng giữa các dân tộc.", details: ["Hội nghị TW 7 (3/2003):", "• Phát huy sức mạnh đoàn kết toàn dân", "• Các dân tộc bình đẳng, đoàn kết, giúp nhau", "• Xóa bỏ định kiến, thành kiến, phân biệt chủng tộc", "• Xây dựng tinh thần tin tưởng lẫn nhau"]}},
                {id: "e5-4", name: "Chính sách tôn giáo", type: "event", icon: "fas fa-praying-hands", description: "Tự do tín ngưỡng, tôn giáo", content: {summary: "Tôn trọng quyền tự do tín ngưỡng, tôn giáo của nhân dân.", details: ["Nguyên tắc:", "• Tôn trọng quyền tự do tín ngưỡng, theo hoặc không theo tôn giáo", "• Quản lý tôn giáo theo pháp luật", "• Giữ gìn phạm vi tôn giáo", "• Không dùng tôn giáo để chống đối nhà nước"]}}
            ]
        },
        // NHÁNH 6: THÀNH TỰU VÀ HẠN CHẾ (1986-2018)
        {
            id: "branch-6",
            name: "THÀNH TỰU VÀ HẠN CHẾ",
            subtitle: "(1986-2018)",
            type: "period",
            icon: "fas fa-balance-scale",
            description: "Đánh giá tổng kết giai đoạn đổi mới",
            content: {summary: "Tổng kết thành tựu, hạn chế và bài học kinh nghiệm."},
            children: [
                {id: "e6-1", name: "Thành tựu lớn", type: "event", icon: "fas fa-trophy", description: "Những thành tựu nổi bật", content: {summary: "Đạt được nhiều thành tựu to lớn trong phát triển kinh tế-xã hội và hội nhập quốc tế.", details: ["Thành tựu chính:", "• Ra khỏi tình trạng khó khăn kinh tế-xã hội", "• GDP tăng hơn gấp đôi", "• Xóa bỏ phân phối theo tem phiếu (1988)", "• Đạt tự cấp lương thực, có dự trữ, xuất khẩu", "• Thành lập quan hệ ngoại giao với nhiều nước", "• Gia nhập các tổ chức quốc tế (ASEAN, WTO)", "• Bình thường hóa quan hệ với các nước lớn", "• Kinh tế phát triển nhanh trong khu vực", "", "Kết quả cụ thể:", "• Năm 2000: GDP tăng gấp đôi so 1990", "• 2007: GDP tăng 8,48%, xuất khẩu 21,5%, FDI 20,3 tỷ USD", "• Kinh tế thị trường nhiều thành phần hình thành"]}},
                {id: "e6-2", name: "Hạn chế, yếu kém", type: "event", icon: "fas fa-exclamation-triangle", description: "Những hạn chế còn tồn tại", content: {summary: "Vẫn còn nhiều hạn chế, yếu kém cần khắc phục.", details: ["Những vấn đề còn tồn tại:", "• Nước còn khó khăn, kém phát triển so với khu vực", "• Kinh tế tập thể, tư nhân còn yếu", "• Công nghiệp hóa, hiện đại hóa chưa hoàn toàn", "• Tham nhũng, quan liêu vẫn còn", "• Tiêu cực trong đảng viên", "• Bất bình đẳng xã hội vẫn tồn tại", "", "Các yếu tố kìm hãm:", "• Điểm xuất phát thấp", "• Thiệt hại chiến tranh lâu dài", "• Cấm vận, bao vây quốc tế", "• Sai lầm trong lãnh đạo, quản lý", "• Thiên tai, dịch bệnh"]}},
                {id: "e6-3", name: "Bài học kinh nghiệm", type: "event", icon: "fas fa-lightbulb", description: "Bài học từ quá trình đổi mới", content: {summary: "Rút ra những bài học kinh nghiệm quý báu từ quá trình đổi mới.", details: ["5 bài học chính từ đổi mới:", "1. Giữ vững nguyên lý độc lập dân tộc CNXH", "2. Sự nghiệp cách mạng là của nhân dân, do nhân dân, vì nhân dân", "3. Không ngừng củng cố, tăng cường đoàn kết", "4. Kết hợp sức mạnh dân tộc với sức mạnh thời đại", "5. Lãnh đạo của Đảng là nhân tố quyết định thắng lợi"]}}
            ]
        }
    ]
};
