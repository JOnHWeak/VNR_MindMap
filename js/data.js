// Data structure for the Vietnamese Communist Party History Mindmap
// Nguồn dữ liệu được tổng hợp từ các tệp PDF (Session 19 đến 29) do người dùng cung cấp.

const mindmapData = {
    id: "central",
    name: "Lịch sử Đảng Cộng sản Việt Nam",
    subtitle: "(1930 - nay)",
    type: "central",
    icon: "fas fa-star",
    description: "Hành trình và các giai đoạn lịch sử chính của Đảng Cộng sản Việt Nam từ khi thành lập đến nay.",
    content: {
        summary: "Đảng Cộng sản Việt Nam được thành lập ngày 3/2/1930, đã lãnh đạo nhân dân ta qua các cuộc đấu tranh giành độc lập dân tộc, thống nhất đất nước, xây dựng và bảo vệ Tổ quốc, và thực hiện công cuộc Đổi Mới.",
        images: [
            {
                url: "https://via.placeholder.com/400x300/d9534f/ffffff?text=Lich+Su+Dang",
                caption: "Biểu tượng Đảng Cộng sản Việt Nam"
            }
        ],
        videos: [],
        citations: ["Tổng hợp từ các tài liệu (Session 19-29)"]
    },
    children: [
        {
            id: "period-1930-1945",
            name: "Giai đoạn 1930-1945",
            subtitle: "Đảng ra đời và lãnh đạo giành chính quyền",
            type: "period",
            period: "1930-1945",
            icon: "fas fa-flag",
            description: "Từ khi thành lập đến Cách mạng Tháng Tám thành công",
            content: {
                summary: "Giai đoạn Đảng vừa mới ra đời, vượt qua nhiều thử thách để lãnh đạo nhân dân giành chính quyền trong Cách mạng Tháng Tám 1945.",
                images: [
                    {
                        url: "https://via.placeholder.com/400x300/e74c3c/ffffff?text=CMT8+1945",
                        caption: "Hội nghị thành lập Đảng 3/2/1930"
                    }
                ],
                citations: ["Giáo trình Lịch sử Đảng (Chương 1)"]
            },
            children: [
                {
                    id: "context-1930",
                    name: "Bối cảnh ra đời (Trước 1930)",
                    type: "sub",
                    period: "1930-1945",
                    icon: "fas fa-globe",
                    description: "Tình hình Việt Nam và thế giới trước 1930",
                    content: {
                        summary: "Việt Nam dưới ách thống trị của thực dân Pháp, phong trào yêu nước phát triển mạnh mẽ, cần có một chính đảng cách mạng lãnh đạo."
                    }
                },
                {
                    id: "founding-congress",
                    name: "Hội nghị thành lập Đảng (2/1930)",
                    type: "sub",
                    period: "1930-1945",
                    icon: "fas fa-handshake",
                    description: "Sự kiện thống nhất các tổ chức cộng sản",
                    content: {
                        summary: "Hội nghị hợp nhất 3 tổ chức cộng sản thành Đảng Cộng sản Việt Nam, thông qua Cương lĩnh chính trị đầu tiên."
                    }
                },
                {
                    id: "august-revolution",
                    name: "Cách mạng Tháng Tám 1945",
                    type: "sub",
                    period: "1930-1945",
                    icon: "fas fa-star",
                    description: "Thành công của Tổng khởi nghĩa toàn quốc",
                    content: {
                        summary: "Đảng lãnh đạo Tổng khởi nghĩa thành công, giành chính quyền trong cả nước, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập."
                    }
                }
            ]
        },
        {
            id: "period-1945-1975",
            name: "Giai đoạn 1945-1975",
            subtitle: "Lãnh đạo kháng chiến và thống nhất đất nước",
            type: "period",
            period: "1945-1975",
            icon: "fas fa-shield-alt",
            description: "Từ sau Cách mạng Tháng Tám đến ngày thống nhất đất nước",
            content: {
                summary: "Giai đoạn Đảng lãnh đạo nhân dân tiến hành hai cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ, giải phóng hoàn toàn miền Nam, thống nhất đất nước.",
                images: [
                    {
                        url: "https://via.placeholder.com/400x300/3498db/ffffff?text=Khang+Chien",
                        caption: "Kháng chiến chống Pháp và Mỹ"
                    }
                ],
                citations: ["Giáo trình Lịch sử Đảng (Chương 2)"]
            },
            children: [
                {
                    id: "resistance-france",
                    name: "Kháng chiến chống Pháp (1945-1954)",
                    type: "sub",
                    period: "1945-1975",
                    icon: "fas fa-mountain",
                    description: "Cuộc kháng chiến toàn quốc chống thực dân Pháp, đỉnh cao là chiến thắng Điện Biên Phủ."
                },
                {
                    id: "resistance-usa",
                    name: "Kháng chiến chống Mỹ (1954-1975)",
                    type: "sub",
                    period: "1945-1975",
                    icon: "fas fa-helicopter",
                    description: "Xây dựng CNXH ở Miền Bắc và đấu tranh giải phóng Miền Nam, đỉnh cao là Đại thắng Mùa xuân 1975."
                }
            ]
        },
        {
            id: "period-1975-nay",
            name: "Giai đoạn 1975-nay",
            subtitle: "Quá độ lên CNXH và Đổi Mới",
            type: "period",
            period: "1975-nay",
            description: "Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới. Giai đoạn này được chia thành hai thời kỳ lớn: 10 năm đầu (1975-1986) và thời kỳ Đổi Mới (từ 1986 đến nay).",
            content: {
                summary: "Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới. Giai đoạn này được chia thành hai thời kỳ lớn: 10 năm đầu (1975-1986) và thời kỳ Đổi Mới (từ 1986 đến nay).",
                images: [
                    {
                        url: "https://via.placeholder.com/400x300/28a745/ffffff?text=Doi+Moi+1986",
                        caption: "Công cuộc Đổi Mới đưa đất nước phát triển"
                    }
                ],
                citations: ["Session 19-29"]
            },
            children: [
                {
                    id: "sub-1975-1986",
                    name: "Xây dựng CNXH và Bảo vệ Tổ quốc (1975-1986)",
                    type: "sub",
                    period: "1975-nay",
                    description: "Nhánh 1: Giai đoạn đầu sau thống nhất, tìm tòi đường lối, đối mặt với khủng hoảng và chiến tranh biên giới.",
                    content: {
                        summary: "10 năm đầu sau thống nhất, đất nước đối mặt với nhiều khó khăn: hậu quả chiến tranh, mô hình kinh tế tập trung bao cấp bộc lộ khuyết điểm gây khủng hoảng KT-XH, và phải tiến hành hai cuộc chiến tranh bảo vệ biên giới.",
                        citations: ["Session 19, 20, 21"]
                    },
                    children: [
                        {
                            id: "event-unification-1976",
                            name: "Hoàn thành thống nhất đất nước về mặt Nhà nước",
                            type: "event",
                            period: "1975-nay",
                            description: "Thống nhất hai miền về mặt hành chính, pháp lý.",
                            content: {
                                summary: "Hội nghị Hiệp thương (11/1975): Nhất trí về chủ trương, biện pháp thống nhất đất nước về mặt nhà nước. Tổng tuyển cử (25/4/1976): Bầu ra Quốc hội chung của cả nước (Quốc hội khóa VI). Kỳ họp thứ nhất Quốc hội (24/6 - 3/7/1976): Quyết định tên nước là Cộng hòa xã hội chủ nghĩa Việt Nam; Thủ đô là Hà Nội; Đổi tên thành phố Sài Gòn thành TP. Hồ Chí Minh; Thống nhất các tổ chức chính trị - xã hội.",
                                citations: ["Session 19"]
                            }
                        },
                        {
                            id: "event-dai-hoi-IV-1976",
                            name: "Đại hội IV (12/1976)",
                            type: "event",
                            period: "1975-nay",
                            description: "Đại hội đầu tiên sau thống nhất, đề ra đường lối xây dựng CNXH trên cả nước.",
                            content: {
                                summary: "Đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam. Đề ra đường lối chung xây dựng CNXH trên cả nước và Kế hoạch 5 năm (1976-1980). Hạn chế: Bộc lộ tư tưởng nóng vội, chủ quan duy ý chí; đề ra các chỉ tiêu quá cao; nóng vội phát triển công nghiệp nặng; duy trì cơ chế tập trung quan liêu, bao cấp.",
                                citations: ["Session 20"]
                            }
                        },
                        {
                            id: "event-border-wars-1979",
                            name: "Bảo vệ Tổ quốc (1977-1979)",
                            type: "event",
                            period: "1975-nay",
                            description: "Chiến tranh biên giới Tây Nam và biên giới phía Bắc.",
                            content: {
                                summary: "Biên giới Tây Nam: Phản ứng trước các cuộc tấn công của Pôn Pốt (từ 1975). Ngày 26/12/1978, Quân tình nguyện Việt Nam phối hợp giúp Campuchia lật đổ chế độ diệt chủng (giải phóng Phnom Pênh ngày 7/1/1979). Biên giới phía Bắc: Ngày 17/2/1979, Trung Quốc tấn công 6 tỉnh biên giới phía Bắc, quân dân ta đã chiến đấu bảo vệ lãnh thổ.",
                                citations: ["Session 20"]
                            }
                        },
                        {
                            id: "event-dai-hoi-V-1982",
                            name: "Đại hội V (3/1982)",
                            type: "event",
                            period: "1975-nay",
                            description: "Đại hội trong bối cảnh khủng hoảng KT-XH và bị bao vây, cấm vận.",
                            content: {
                                summary: "Bối cảnh: Đất nước trong khủng hoảng KT-XH, bị bao vây, cấm vận. Khẳng định 2 nhiệm vụ chiến lược: Xây dựng và Bảo vệ Tổ quốc. Điều chỉnh đường lối kinh tế: Coi nông nghiệp là mặt trận hàng đầu. Đề ra 3 chương trình mục tiêu: (1) Lương thực, thực phẩm; (2) Hàng tiêu dùng; (3) Hàng xuất khẩu.",
                                citations: ["Session 21"]
                            }
                        },
                        {
                            id: "event-breakthroughs-1979-1985",
                            name: "Các bước đột phá (1979-1985)",
                            type: "event",
                            period: "1975-nay",
                            description: "Các bước 'xé rào' nhằm tháo gỡ khủng hoảng KT-XH.",
                            content: {
                                summary: "Hội nghị TW 6 (8/1979): Cho phép 'sản xuất bung ra', làm phai nhạt cơ chế kế hoạch hóa. Chỉ thị 100-CT/TW (1/1981): 'Khoán 100' trong nông nghiệp, khoán sản phẩm đến nhóm và người lao động. Quyết định 25/CP và 26/CP (1/1981): Trao quyền tự chủ sản xuất, kinh doanh cho xí nghiệp quốc doanh. Hội nghị TW 8 (6/1985): Chủ trương 'Giá - Lương - Tiền', quyết định xóa bỏ cơ chế tập trung, bao cấp. Tuy nhiên, việc thực hiện (đổi tiền 14/9/1985) thất bại, gây lạm phát phi mã.",
                                citations: ["Session 20, 21"]
                            }
                        }
                    ]
                },
                {
                    id: "sub-1986-2018",
                    name: "Đổi mới, CNH, HĐH & Hội nhập (1986-2018)",
                    type: "sub",
                    period: "1975-nay",
                    icon: "fas fa-rocket",
                    description: "Giai đoạn đất nước thực hiện công cuộc Đổi Mới, công nghiệp hóa, hiện đại hóa và hội nhập quốc tế.",
                    content: {
                        summary: "Từ năm 1986, Đảng khởi xướng và lãnh đạo công cuộc Đổi Mới toàn diện, đưa đất nước ra khỏi khủng hoảng kinh tế - xã hội, chuyển đổi sang nền kinh tế thị trường định hướng xã hội chủ nghĩa, đẩy mạnh công nghiệp hóa, hiện đại hóa và chủ động hội nhập quốc tế."
                    },
                    children: [
                        {
                            id: "branch-doi-moi-toan-dien-1986-1996",
                            name: "NHÁNH 1: Giai đoạn đổi mới toàn diện (1986-1996)",
                            type: "branch",
                            period: "1975-nay",
                            icon: "fas fa-seedling",
                            description: "Khởi đầu công cuộc đổi mới toàn diện",
                            content: {
                                summary: "Giai đoạn đầu tiên của công cuộc đổi mới, đánh dấu sự chuyển đổi căn bản từ cơ chế tập trung quan liêu bao cấp sang nền kinh tế thị trường hàng hóa nhiều thành phần."
                            },
                            children: [
                                {
                                    id: "event-dai-hoi-vi-1986",
                                    name: "Đại hội VI (15-18/12/1986) - Khởi đầu đổi mới",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-flag-checkered",
                                    description: "Đại hội lịch sử mở ra công cuộc đổi mới",
                                    content: {
                                        summary: "Đại hội VI là bước ngoặt lịch sử, đề ra đường lối đổi mới toàn diện, xóa bỏ cơ chế tập trung quan liêu bao cấp, chuyển sang nền kinh tế hàng hóa nhiều thành phần.",
                                        details: [
                                            "Bối cảnh:",
                                            "- Liên Xô, các nước xã hội chủ nghĩa đang khó khăn kinh tế",
                                            "- Việt Nam bị cấm vận, cô lập",
                                            "- Lạm phát cao (300% năm 1985 lên 774% năm 1986)",
                                            "- Phân phối, lưu thông rối loạn",
                                            "- Vi phạm pháp luật, tham nhũng lan rộng",
                                            "",
                                            "Nội dung Đại hội VI:",
                                            "- Xác nhận ba đặc trưng cơ bản của CNXH:",
                                            "  + Chế độ làm chủ tập thể XHCN",
                                            "  + Nền sản xuất lớn",
                                            "  + Nền văn hóa mới, con người mới XHCN",
                                            "",
                                            "- Đường lối đổi mới toàn diện:",
                                            "  + Thực hiện chế độ quản lý, xa bỏ tập trung, quan liêu, bao cấp",
                                            "  + Chuyển sang hạch toán, kinh doanh, kết hợp kế hoạch với thị trường",
                                            "  + Giải phóng mọi nguồn lực sản xuất",
                                            "",
                                            "- 4 nhiệm vụ chính:",
                                            "  + Sản xuất tiêu dùng",
                                            "  + Đề ra cơ cấu kinh tế hợp lý (3 chương: lương thực, hàng tiêu dùng, hàng xuất khẩu)",
                                            "  + Cải tạo xã hội chủ nghĩa phù hợp",
                                            "  + Xây dựng nền quốc phòng, an ninh",
                                            "",
                                            "Hạn chế của Đại hội VI:",
                                            "- Chưa phát hiện khuyết điểm mô hình CNXH các nước Phương Bắc",
                                            "- Đặt chỉ tiêu kinh tế vượt quá hiện thực",
                                            "",
                                            "Kết quả giai đoạn 1986-1991:",
                                            "- Lạm phát giảm từ 774,7% (1986) xuống 67,1% (1991)",
                                            "- Cuối năm 1988: bỏ phân phối theo tem phiếu",
                                            "- Năm 1989: từ nhập khẩu 45 vạn tấn gạo sang tự cung cấp và xuất khẩu"
                                        ]
                                    }
                                },
                                {
                                    id: "event-hoi-nghi-tw-6-1979-1989",
                                    name: "Hội nghị Trung ương 6 (8/1979 và 3/1989) - Điều chỉnh chính sách",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-cogs",
                                    description: "Các bước điều chỉnh chính sách quan trọng",
                                    content: {
                                        summary: "Các hội nghị Trung ương đánh dấu những bước tự phê phán và điều chỉnh chính sách kinh tế quan trọng.",
                                        details: [
                                            "Hội nghị Trung ương 6 (8/1979):",
                                            "- Bước tự phê phán đầu tiên",
                                            "- Phá bỏ rào cản cho sản xuất bung ra",
                                            "- Quyết định 10/1979: miễn thuế, trả thù lao cho sản xuất",
                                            "- Chỉ thị 100/1981: khoán sản phẩm đến nhóm, người lao động",
                                            "",
                                            "Hội nghị Trung ương 2 (4/1987):",
                                            "- 4 giảm: giảm chi ngân sách, giảm nhập tăng giá, giảm lạm phát, giảm khó khăn",
                                            "- Mở rộng giao lưu hàng hóa, giải thể trạm kiểm soát",
                                            "- Thực hiện chế độ một giá, chế độ thống nhất giá",
                                            "- Chuẩn hóa quản lý kinh tế",
                                            "",
                                            "Hội nghị Trung ương 6 (3/1989):",
                                            "- Chính thức dung hòa khái niệm hệ thống chính trị",
                                            "- Xác định đổi mới là con đường tất yếu của nước ta",
                                            "- Không xa rời nguyên lý chủ nghĩa Mác-Lênin"
                                        ]
                                    }
                                },
                                {
                                    id: "event-khoan-10-nong-nghiep",
                                    name: "Khoán 10 và chính sách nông nghiệp",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-tractor",
                                    description: "Đột phá trong chính sách nông nghiệp",
                                    content: {
                                        summary: "Nghị quyết 10 tạo bước đột phá trong sản xuất nông nghiệp, giải phóng sức sản xuất của nông dân.",
                                        details: [
                                            "Nghị quyết 10 của Bộ Chính trị (4/1988):",
                                            "- Khoán sản phẩm cuối cùng cho nông dân",
                                            "- Nông dân nhận khoán và canh tác trên diện tích đất trong 15 năm",
                                            "- Bảo đảm thu nhập từ 40% sản lượng khoán trở lên",
                                            "",
                                            "Kết quả:",
                                            "- Sản lượng lương thực tăng từ 13,4 triệu tấn (1976-1980) lên 17 triệu tấn (1981-1985)",
                                            "- Từ nhập khẩu sang xuất khẩu gạo",
                                            "- Năm 1989 có dự trữ và xuất khẩu"
                                        ]
                                    }
                                },
                                {
                                    id: "event-doi-moi-cong-nghiep",
                                    name: "Đổi mới trong công nghiệp",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-industry",
                                    description: "Cải cách quản lý doanh nghiệp nhà nước",
                                    content: {
                                        summary: "Trao quyền tự chủ cho xí nghiệp quốc doanh, mở rộng hình thức trả lương mới.",
                                        details: [
                                            "Quyết định 25-CP (1/1981):",
                                            "- Quyền chủ động sản xuất, kinh doanh của xí nghiệp quốc doanh",
                                            "- Tự chủ tài chính",
                                            "",
                                            "Quyết định 26-CP:",
                                            "- Mở rộng hình thức trả lương khoán, lương sản phẩm",
                                            "- Sử dụng hình thức tiền thưởng",
                                            "",
                                            "Kết quả:",
                                            "- Sản xuất công nghiệp đạt kế hoạch",
                                            "- Công nghiệp địa phương vượt kế hoạch 7,5%"
                                        ]
                                    }
                                },
                                {
                                    id: "event-dai-hoi-vii-1991",
                                    name: "Đại hội VII (24-27/6/1991) - Tiếp tục đổi mới",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-chart-line",
                                    description: "Định hướng kinh tế thị trường XHCN",
                                    content: {
                                        summary: "Đại hội VII thông qua Cương lĩnh 1991, xác định xây dựng nền kinh tế thị trường hàng hóa nhiều thành phần theo định hướng xã hội chủ nghĩa.",
                                        details: [
                                            "1.176 đại biểu, đại diện hơn 2 triệu đảng viên",
                                            "",
                                            "Nội dung chính:",
                                            "- Xây dựng nền kinh tế thị trường hàng hóa nhiều thành phần",
                                            "- Vận động theo cơ chế thị trường, có sự quản lý của Nhà nước",
                                            "- Theo hướng xã hội chủ nghĩa",
                                            "",
                                            "Cương lĩnh năm 1991:",
                                            "- Tổng kết hơn 60 năm lãnh đạo cách mạng Việt Nam",
                                            "",
                                            "5 bài học kinh nghiệm:",
                                            "1. Giữ vững nguyên lý độc lập dân tộc và CNXH",
                                            "2. Sự nghiệp cách mạng là của nhân dân, do nhân dân, vì nhân dân",
                                            "3. Không ngừng củng cố, tăng cường đoàn kết",
                                            "4. Kết hợp sức mạnh dân tộc với sức mạnh thời đại",
                                            "5. Lãnh đạo của Đảng là nhân tố hàng đầu quyết định thắng lợi",
                                            "",
                                            "6 đặc trưng cơ bản của CNXH mà nhân dân xây dựng:",
                                            "1. Do nhân dân lao động làm chủ",
                                            "2. Nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại",
                                            "3. Nền văn hóa tiên tiến, mang bản sắc dân tộc",
                                            "4. Con người giải phóng từ nạn đói, lao khổ, buôn bán",
                                            "5. Các dân tộc bình đẳng, đoàn kết, giúp nhau",
                                            "6. Quan hệ hữu nghị và hợp tác với nhân dân các nước",
                                            "",
                                            "7 phương hướng xây dựng CNXH:",
                                            "1. Xây dựng Nhà nước XHCN",
                                            "2. Phát triển lực lượng sản xuất, công nghiệp hóa nước theo hướng hiện đại",
                                            "3. Thiết lập từng bước quan hệ sản xuất XHCN",
                                            "4. Phát triển nền kinh tế thị trường nhiều thành phần",
                                            "5. Cách mạng lĩnh vực tư tưởng, văn hóa",
                                            "6. Thực hiện chính sách dân tộc",
                                            "7. Hai nhiệm vụ chiến lược: xây dựng và bảo vệ Tổ quốc",
                                            "",
                                            "Chiến lược phát triển kinh tế-xã hội đến năm 2000:",
                                            "- Mục tiêu: ra khỏi tình trạng khó khăn, ổn định, phát triển",
                                            "- GDP năm 2000 tăng gấp đôi so với năm 1990"
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            id: "branch-tiep-tuc-doi-moi-1991-1996",
                            name: "NHÁNH 2: Giai đoạn tiếp tục đổi mới (1991-1996)",
                            type: "branch",
                            period: "1975-nay",
                            icon: "fas fa-arrow-up",
                            description: "Củng cố và phát triển thành quả đổi mới",
                            content: {
                                summary: "Giai đoạn tiếp tục đổi mới, ổn định và phát triển kinh tế-xã hội, mở rộng quan hệ đối ngoại."
                            },
                            children: [
                                {
                                    id: "event-ket-qua-1991-1996",
                                    name: "Mục tiêu và kết quả chung",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-trophy",
                                    description: "Thành tựu nổi bật giai đoạn 1991-1996",
                                    content: {
                                        summary: "Giai đoạn 5 năm đạt nhiều thành tựu quan trọng, vượt qua khó khăn, ổn định và phát triển kinh tế.",
                                        details: [
                                            "Mục tiêu chính:",
                                            "- Vượt qua khó khăn thích ứng",
                                            "- Ổn định hóa và phát triển kinh tế",
                                            "- Tăng cường ổn định chính trị",
                                            "",
                                            "Kết quả 5 năm (1991-1996):",
                                            "- GDP tăng 8,2% (kế hoạch 5,5-6,5%)",
                                            "- Lạm phát từ 67,1% (1991) giảm xuống 12,7% (1995)",
                                            "- Nền kinh tế thị trường hàng hóa nhiều thành phần hình thành",
                                            "- Bắt đầu tích lũy từ trong nước",
                                            "- Nhanh chóng ổn định tình hình"
                                        ]
                                    }
                                },
                                {
                                    id: "event-chinh-sach-doi-ngoai-1992",
                                    name: "Hội nghị Trung ương 3 (6/1992) - Chính sách đối ngoại",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-globe-asia",
                                    description: "Mở rộng quan hệ quốc tế",
                                    content: {
                                        summary: "Đề ra ba quyết sách chiến lược, mở rộng quan hệ đối ngoại, bình thường hóa quan hệ với các nước lớn.",
                                        details: [
                                            "Ba quyết sách chiến lược:",
                                            "1. Củng cố quốc phòng, an ninh",
                                            "2. Mở rộng quan hệ đối ngoại",
                                            "3. Đổi mới và chính sách ứng phó",
                                            "",
                                            "Mối quan hệ quốc tế:",
                                            "- Bình thường hóa quan hệ Việt Nam-Trung Quốc (từ 11/1991)",
                                            "- Rút quân tình nguyện khỏi Campuchia (vào 9/1989)",
                                            "- Thành lập quan hệ ngoại giao với Hoa Kỳ (11/7/1995)",
                                            "- Gia nhập ASEAN (28/7/1995)",
                                            "- Đến cuối năm 1995: quan hệ ngoại giao với 160 nước",
                                            "- Quan hệ thương mại với trên 100 nước"
                                        ]
                                    }
                                },
                                {
                                    id: "event-hiep-dinh-bien-gioi-tq",
                                    name: "Hiệp định biên giới với Trung Quốc",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-handshake",
                                    description: "Giải quyết vấn đề biên giới",
                                    content: {
                                        summary: "Ký kết và hoàn thành phân giới cắm mốc biên giới trên đất liền với Trung Quốc.",
                                        details: [
                                            "Ký kết năm 1999",
                                            "Hoàn thành 31/12/2008",
                                            "",
                                            "Nội dung:",
                                            "- Xác định rõ ràng biên giới trên đất liền",
                                            "- Hiện đại hóa biên giới",
                                            "- Tạo nền tảng cho hòa bình, hữu nghị, ổn định, hợp tác"
                                        ]
                                    }
                                },
                                {
                                    id: "event-phat-trien-nong-thon-1993",
                                    name: "Chính sách về nông dân, nông nghiệp",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-leaf",
                                    description: "Xây dựng nông thôn mới",
                                    content: {
                                        summary: "Tập trung phát triển nông nghiệp, nông thôn và công nghiệp hóa.",
                                        details: [
                                            "Hội nghị Trung ương 5 (6/1993):",
                                            "3 mục tiêu chính:",
                                            "1. Xây dựng nông thôn mới (kinh tế phát triển, văn hóa phong phú)",
                                            "2. Hệ thống chính trị vững mạnh, phát huy dân chủ",
                                            "3. Ổn định chính trị, tăng cường quy tắc",
                                            "",
                                            "Hội nghị Trung ương 7 (7/1994):",
                                            "- Phát triển công nghiệp, công nghệ",
                                            "- Xây dựng giai cấp công nhân mới",
                                            "- Mục tiêu là công nghiệp hóa, hiện đại hóa"
                                        ]
                                    }
                                },
                                {
                                    id: "event-hoi-nghi-giua-ky-1994",
                                    name: "Hội nghị Ban chấp hành toàn quốc giữa kỳ",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-balance-scale",
                                    description: "Xây dựng Nhà nước pháp quyền",
                                    content: {
                                        summary: "Hội nghị lần đầu tiên trong lịch sử Đảng, đề ra xây dựng Nhà nước pháp quyền XHCN.",
                                        details: [
                                            "Hội nghị lần đầu tiên (1/1994):",
                                            "- Xây dựng Nhà nước pháp quyền XHCN",
                                            "- Thực hiện Nghị quyết Đại hội VII",
                                            "- Chuẩn bị tư tưởng cho Đại hội VIII"
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            id: "branch-cnh-hdh-1996-2001",
                            name: "NHÁNH 3: Giai đoạn CNH, HĐH (1996-2001)",
                            type: "branch",
                            period: "1975-nay",
                            icon: "fas fa-industry",
                            description: "Công nghiệp hóa, hiện đại hóa đất nước",
                            content: {
                                summary: "Giai đoạn chuyển sang công nghiệp hóa, hiện đại hóa, tạo nền tảng vật chất-kỹ thuật cho CNXH."
                            },
                            children: [
                                {
                                    id: "event-dai-hoi-viii-1996",
                                    name: "Đại hội VIII (28/6-1/7/1996)",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-landmark",
                                    description: "Mở ra thời kỳ CNH, HĐH",
                                    content: {
                                        summary: "Đại hội VIII tổng kết 10 năm đổi mới, đề ra mục tiêu chuyển sang thời kỳ công nghiệp hóa, hiện đại hóa đất nước.",
                                        details: [
                                            "1.198 đại biểu, đại diện hơn 2,1 triệu đảng viên",
                                            "",
                                            "Bối cảnh:",
                                            "- Sau 10 năm đổi mới, đạt thành tựu lớn",
                                            "- Nhân dân Việt Nam giành được thắng lợi ban đầu",
                                            "- Vẫn còn tình trạng khó khăn, bất bình đẳng",
                                            "- Lạm phát từ 67,1% (1991) giảm 12,7% (1995)",
                                            "",
                                            "Nội dung chính:",
                                            "- Tổng kết 10 năm đổi mới (1986-1996)",
                                            "",
                                            "5 bài học chính:",
                                            "1. Giữ vững mục tiêu độc lập dân tộc CNXH",
                                            "2. Kết hợp sát chặt kinh tế với chính trị từ đầu",
                                            "3. Xây dựng nền kinh tế thị trường hàng hóa nhiều thành phần",
                                            "4. Phát triển dân chủ tập thể nhân dân",
                                            "5. Mở rộng hợp tác quốc tế",
                                            "",
                                            "Mục tiêu tổng quát:",
                                            "- Chuẩn bị cho tiền công nghiệp hóa",
                                            "- Cho phép chuyển sang thời kỳ công nghiệp hóa, hiện đại hóa",
                                            "- Tạo cơ sở vật chất-kỹ thuật cho CNXH"
                                        ]
                                    }
                                },
                                {
                                    id: "event-chien-luoc-phat-trien-2001-2010",
                                    name: "Chiến lược phát triển kinh tế 2001-2010",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-map-marked-alt",
                                    description: "Định hướng phát triển dài hạn",
                                    content: {
                                        summary: "Đề ra chiến lược phát triển kinh tế-xã hội đến năm 2010 và tầm nhìn 2020.",
                                        details: [
                                            "Mục tiêu tổng quát:",
                                            "- Ra khỏi tình trạng khó khăn",
                                            "- Ổn định, phát triển kinh tế-xã hội",
                                            "- Tạo nền tảng cho năm 2020",
                                            "",
                                            "Chỉ tiêu cơ bản:",
                                            "- GDP năm 2000 tăng gấp đôi so với 1990",
                                            "- Chuyển dịch cơ cấu kinh tế",
                                            "- Phát triển nông nghiệp, nông thôn",
                                            "- Công nghiệp hóa, hiện đại hóa",
                                            "",
                                            "Quan điểm chỉ đạo:",
                                            "- Phát triển kinh tế-xã hội theo con đường độc lập dân tộc",
                                            "- Xây dựng CNXH nước ta là quá trình thực hiện: dân giàu, nước mạnh, tình người đoàn kết",
                                            "- Mục tiêu là con người",
                                            "- Giải phóng sức sản xuất, khai thác tiềm năng"
                                        ]
                                    }
                                },
                                {
                                    id: "event-khoan-cai-tien-nong-nghiep",
                                    name: "Khoán trong nông nghiệp (Khoán 10 cải tiến)",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-seedling",
                                    description: "Hoàn thiện chính sách khoán",
                                    content: {
                                        summary: "Cải tiến chính sách khoán, tăng quyền tự chủ cho nông dân.",
                                        details: [
                                            "Nội dung:",
                                            "- Nhà nước công nhận khoán diện tích đất",
                                            "- Người nông dân có quyền tự do sản xuất",
                                            "- Thu hoạch vượt khoán được hưởng",
                                            "- Có quyền mua bán tự do",
                                            "",
                                            "Kết quả:",
                                            "- Nông sản phát triển liên tục",
                                            "- Từ nhập khẩu sang xuất khẩu",
                                            "- Năm 1989 có dự trữ và xuất khẩu"
                                        ]
                                    }
                                },
                                {
                                    id: "event-chinh-sach-fdi",
                                    name: "Chính sách FDI và hợp tác quốc tế",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-handshake",
                                    description: "Thu hút đầu tư nước ngoài",
                                    content: {
                                        summary: "Luật Đầu tư nước ngoài tạo môi trường thu hút FDI mạnh mẽ.",
                                        details: [
                                            "Luật Đầu tư nước ngoài:",
                                            "- Lần đầu tiên thông qua (kỳ 8 Quốc hội)",
                                            "- Có hiệu lực từ 1/1/1988",
                                            "",
                                            "Kết quả:",
                                            "- Công ty của hơn 50 nước đầu tư",
                                            "- Hơn 100 nước có quan hệ thương mại",
                                            "- FDI tăng 20,3 tỷ USD"
                                        ]
                                    }
                                },
                                {
                                    id: "event-hoi-nghi-tw-3-1997",
                                    name: "Hội nghị Trung ương 3 (6/1997)",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-gavel",
                                    description: "Xây dựng Nhà nước pháp quyền",
                                    content: {
                                        summary: "Tiếp tục xây dựng Nhà nước pháp quyền XHCN, phát huy quyền làm chủ của nhân dân.",
                                        details: [
                                            "Nội dung chính:",
                                            "- Phát huy quyền làm chủ của nhân dân",
                                            "- Xây dựng Nhà nước pháp quyền XHCN",
                                            "- Tăng cường lãnh đạo của Đảng"
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            id: "branch-nang-cao-hoan-thien-2001-2018",
                            name: "NHÁNH 4: Giai đoạn nâng cao và hoàn thiện (2001-2018)",
                            type: "branch",
                            period: "1975-nay",
                            icon: "fas fa-chart-line",
                            description: "Nâng cao chất lượng, hiệu quả đổi mới",
                            content: {
                                summary: "Giai đoạn tiếp tục đổi mới, nâng cao chất lượng, hiệu quả, hội nhập sâu rộng vào kinh tế thế giới."
                            },
                            children: [
                                {
                                    id: "event-dai-hoi-ix-2001",
                                    name: "Đại hội IX (8/2001) - Tiếp tục đổi mới",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-sync-alt",
                                    description: "Đổi mới trong bối cảnh mới",
                                    content: {
                                        summary: "Tiếp tục đổi mới, cải cách, nâng cao hiệu quả doanh nghiệp trong bối cảnh thế giới phức tạp.",
                                        details: [
                                            "Trong bối cảnh:",
                                            "- Sự kiện 11/9/2001 tại Mỹ",
                                            "- Thế giới thay đổi mau lẹ",
                                            "- Tình hình phức tạp",
                                            "",
                                            "Nội dung chính:",
                                            "- Tiếp tục đổi mới, cải cách",
                                            "- Nâng cao hiệu quả doanh nghiệp",
                                            "- Sắp xếp, cải tổ doanh nghiệp nhà nước"
                                        ]
                                    }
                                },
                                {
                                    id: "event-chien-luoc-bvtq-2003",
                                    name: "Hội nghị Trung ương 8 (7/2003) - Chiến lược bảo vệ Tổ quốc",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-shield-alt",
                                    description: "Bảo vệ Tổ quốc trong tình hình mới",
                                    content: {
                                        summary: "Đề ra chiến lược bảo vệ Tổ quốc toàn diện trong tình hình mới.",
                                        details: [
                                            "Ba nghị quyết quan trọng:",
                                            "1. Phát huy sức mạnh đoàn kết toàn dân",
                                            "2. Ổn định chính trị, tăng cường ổn định xã hội",
                                            "3. Chiến lược bảo vệ Tổ quốc trong tình hình mới",
                                            "",
                                            "Mục tiêu bảo vệ:",
                                            "- Bảo vệ độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ",
                                            "- Bảo vệ Đảng, Nhà nước, nhân dân, chủ nghĩa XHCN",
                                            "- Bảo vệ sự nghiệp đổi mới, công nghiệp hóa, hiện đại hóa",
                                            "- Bảo vệ an ninh chính trị, an ninh quốc gia",
                                            "- Giữ gìn an ninh chính trị, môi trường hòa bình"
                                        ]
                                    }
                                },
                                {
                                    id: "event-phat-trien-kinh-te-tu-nhan-2002",
                                    name: "Hội nghị Trung ương 5 (3/2002) - Phát triển kinh tế tư nhân",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-store",
                                    description: "Khuyến khích kinh tế tư nhân",
                                    content: {
                                        summary: "Coi kinh tế tập thể và kinh tế tư nhân là bộ phận quan trọng của nền kinh tế.",
                                        details: [
                                            "Kinh tế tập thể:",
                                            "- Coi là bộ phận quan trọng của nền kinh tế",
                                            "- Là vấn đề chiến lược lâu dài",
                                            "",
                                            "Kinh tế tư nhân:",
                                            "- Phát triển rộng khắp trong cả nước",
                                            "- Gắn với phát triển kinh tế",
                                            "- Hạn chế: quy mô nhỏ, công nghệ lạc hậu"
                                        ]
                                    }
                                },
                                {
                                    id: "event-gia-nhap-wto-2006",
                                    name: "WTO và hội nhập quốc tế",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-globe",
                                    description: "Hội nhập kinh tế quốc tế",
                                    content: {
                                        summary: "Việt Nam chính thức gia nhập WTO, đánh dấu bước tiến quan trọng trong hội nhập kinh tế quốc tế.",
                                        details: [
                                            "Gia nhập WTO:",
                                            "- 28/7/1994: Được công nhận tham gia Công ước Luật biển 1982",
                                            "- 11/2006: Chính thức gia nhập WTO (thành viên thứ 150)",
                                            "- Một dấu mốc quan trọng trong hội nhập kinh tế quốc tế",
                                            "",
                                            "Kết quả sau 1 năm gia nhập WTO (2007):",
                                            "- GDP tăng 8,48%",
                                            "- Xuất khẩu tăng 21,5%",
                                            "- FDI tăng 20,3 tỷ USD"
                                        ]
                                    }
                                },
                                {
                                    id: "event-dai-hoi-x-2006",
                                    name: "Đại hội X (18-25/4/2006)",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-forward",
                                    description: "Tiếp tục đổi mới toàn diện",
                                    content: {
                                        summary: "Đại hội X tiếp tục đổi mới toàn diện, nâng cao hiệu quả, chất lượng.",
                                        details: [
                                            "Nội dung chính:",
                                            "- Tiếp tục đổi mới toàn diện",
                                            "- Nâng cao hiệu quả, chất lượng"
                                        ]
                                    }
                                },
                                {
                                    id: "event-dai-hoi-xi-2011",
                                    name: "Đại hội XI (12-19/1/2011)",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-star",
                                    description: "Kỷ niệm 1000 năm Thăng Long",
                                    content: {
                                        summary: "Đại hội XI bổ sung, phát triển Cương lĩnh, đề ra chiến lược phát triển 2011-2020.",
                                        details: [
                                            "1.377 đại biểu, đại diện 3,6 triệu đảng viên",
                                            "",
                                            "Bối cảnh:",
                                            "- Kỷ niệm 1.000 năm Thăng Long-Hà Nội",
                                            "- Thành tựu lớn nhưng còn nhiều khó khăn",
                                            "",
                                            "Nội dung chính:",
                                            "- Cương lĩnh xây dựng nước CNXH (bổ sung, phát triển năm 2011)",
                                            "- Chiến lược, chương trình phát triển 2011-2020",
                                            "",
                                            "Những bài học chính:",
                                            "1. Giữ vững mục tiêu độc lập dân tộc CNXH",
                                            "2. Kết hợp lực mạnh dân tộc với lực mạnh thời đại",
                                            "3. Phát huy sức mạnh đoàn kết toàn dân"
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            id: "branch-cac-chinh-sach-chu-yeu",
                            name: "NHÁNH 5: Các chính sách chủ yếu",
                            type: "branch",
                            period: "1975-nay",
                            icon: "fas fa-file-contract",
                            description: "Các chính sách quan trọng giai đoạn đổi mới",
                            content: {
                                summary: "Tổng hợp các chính sách quan trọng trong giai đoạn đổi mới về tiền lương, nông nghiệp, dân tộc, tôn giáo."
                            },
                            children: [
                                {
                                    id: "event-cai-cach-tien-luong",
                                    name: "Cải cách chính sách tiền lương, bảo hiểm xã hội",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-money-bill-wave",
                                    description: "Cải cách tiền lương và BHXH",
                                    content: {
                                        summary: "Cải cách chính sách tiền lương, bảo hiểm xã hội nhằm nâng cao đời sống người lao động.",
                                        details: [
                                            "Mục tiêu:",
                                            "- Đầu tư cho phát triển",
                                            "- Tạo nguồn nhân lực chất lượng cao",
                                            "- Nâng cao hiệu quả hoạt động bộ máy nhà nước",
                                            "",
                                            "Nội dung chính 2008-2012:",
                                            "- Trả lương đảm bảo sống được bằng lương trung bình",
                                            "- Bảo hiểm xã hội, trợ cấp bảo trợ",
                                            "- Liên hệ với kiềm chế tăng giá",
                                            "- Bảo đảm cho người nghèo"
                                        ]
                                    }
                                },
                                {
                                    id: "event-chinh-sach-nong-dan-1993",
                                    name: "Chính sách nông dân, nông nghiệp (1993)",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-users",
                                    description: "Xây dựng nông thôn mới",
                                    content: {
                                        summary: "Chính sách toàn diện về phát triển nông nghiệp, nông thôn và nông dân.",
                                        details: [
                                            "3 mục tiêu chính:",
                                            "1. Xây dựng nông thôn mới",
                                            "2. Phát triển kinh tế nông nghiệp",
                                            "3. Văn hóa phong phú, tinh thần lao động"
                                        ]
                                    }
                                },
                                {
                                    id: "event-chinh-sach-dan-toc",
                                    name: "Chính sách dân tộc",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-hands-helping",
                                    description: "Đoàn kết các dân tộc",
                                    content: {
                                        summary: "Chính sách đoàn kết, bình đẳng giữa các dân tộc.",
                                        details: [
                                            "Hội nghị Trung ương 7 (3/2003):",
                                            "- Phát huy sức mạnh đoàn kết toàn dân",
                                            "- Các dân tộc bình đẳng, đoàn kết, giúp nhau",
                                            "- Xóa bỏ định kiến, thành kiến, phân biệt chủng tộc",
                                            "- Xây dựng tinh thần cải mượn, tin tưởng lẫn nhau"
                                        ]
                                    }
                                },
                                {
                                    id: "event-chinh-sach-ton-giao",
                                    name: "Chính sách tôn giáo",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-praying-hands",
                                    description: "Tự do tín ngưỡng, tôn giáo",
                                    content: {
                                        summary: "Chính sách tôn trọng quyền tự do tín ngưỡng, tôn giáo.",
                                        details: [
                                            "Nguyên tắc:",
                                            "- Tôn trọng quyền tự do tín ngưỡng, theo hoặc không theo tôn giáo",
                                            "- Quản lý tôn giáo theo pháp luật",
                                            "- Giữ gìn phạm vi tôn giáo",
                                            "- Không dùng tôn giáo để chống đối nhà nước"
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            id: "branch-thanh-tuu-han-che",
                            name: "NHÁNH 6: Thành tựu và Hạn chế (1986-2018)",
                            type: "branch",
                            period: "1975-nay",
                            icon: "fas fa-balance-scale",
                            description: "Đánh giá tổng quát giai đoạn đổi mới",
                            content: {
                                summary: "Tổng kết thành tựu, hạn chế và bài học kinh nghiệm từ 32 năm đổi mới."
                            },
                            children: [
                                {
                                    id: "event-thanh-tuu-doi-moi",
                                    name: "Thành tựu lớn",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-medal",
                                    description: "Những thành tựu nổi bật",
                                    content: {
                                        summary: "Đưa đất nước ra khỏi khủng hoảng, phát triển kinh tế-xã hội, hội nhập quốc tế sâu rộng.",
                                        details: [
                                            "Thành tựu chính:",
                                            "- Ra khỏi tình trạng khó khăn kinh tế-xã hội",
                                            "- GDP tăng hơn gấp đôi",
                                            "- Xóa bỏ phân phối theo tem phiếu (1988)",
                                            "- Đạt tự cấp lương thực, có dự trữ, xuất khẩu",
                                            "- Thành lập quan hệ ngoại giao với nhiều nước",
                                            "- Gia nhập các tổ chức quốc tế (ASEAN, WTO)",
                                            "- Bình thường hóa quan hệ với các nước lớn",
                                            "- Kinh tế phát triển nhanh trong khu vực",
                                            "",
                                            "Kết quả cụ thể:",
                                            "- Năm 2000: GDP tăng gấp đôi so 1990",
                                            "- 2007: GDP tăng 8,48%, xuất khẩu 21,5%, FDI 20,3 tỷ USD",
                                            "- Kinh tế thị trường nhiều thành phần hình thành"
                                        ]
                                    }
                                },
                                {
                                    id: "event-han-che-yeu-kem",
                                    name: "Hạn chế, yếu kém",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-exclamation-triangle",
                                    description: "Những tồn tại cần khắc phục",
                                    content: {
                                        summary: "Kinh tế còn kém phát triển, tham nhũng, quan liêu, bất bình đẳng xã hội vẫn tồn tại.",
                                        details: [
                                            "Những vấn đề còn tồn tại:",
                                            "- Nước còn khó khăn, kém phát triển so với khu vực",
                                            "- Kinh tế tập thể, tư nhân còn yếu",
                                            "- Công nghiệp hóa, hiện đại hóa chưa hoàn toàn",
                                            "- Tham nhũng, quan liêu vẫn còn",
                                            "- Tiêu cực trong đảng viên",
                                            "- Bất bình đẳng xã hội vẫn tồn tại",
                                            "",
                                            "Các yếu tố kìm hãm:",
                                            "- Điểm xuất phát thấp",
                                            "- Thiệt hại chiến tranh lâu dài",
                                            "- Cấm vận, bao vây quốc tế",
                                            "- Sai lầm trong lãnh đạo, quản lý",
                                            "- Thiên tai, dịch bệnh"
                                        ]
                                    }
                                },
                                {
                                    id: "event-bai-hoc-kinh-nghiem",
                                    name: "Bài học kinh nghiệm",
                                    type: "event",
                                    period: "1975-nay",
                                    icon: "fas fa-lightbulb",
                                    description: "Những bài học quý báu",
                                    content: {
                                        summary: "5 bài học kinh nghiệm quý báu từ công cuộc đổi mới.",
                                        details: [
                                            "5 bài học chính từ đổi mới:",
                                            "1. Giữ vững nguyên lý độc lập dân tộc CNXH",
                                            "2. Sự nghiệp cách mạng là của nhân dân, do nhân dân, vì nhân dân",
                                            "3. Không ngừng củng cố, tăng cường đoàn kết",
                                            "4. Kết hợp sức mạnh dân tộc với sức mạnh thời đại",
                                            "5. Lãnh đạo của Đảng là nhân tố quyết định thắng lợi"
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

// Dữ liệu cho các giai đoạn khác (để trống vì đã được tích hợp vào cây chính)
const periodData1945_1975 = {};
const periodData1975_2018 = {}; // Đã được thay thế bằng period-1975-nay trong cây chính

// Export data for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { mindmapData, periodData1945_1975, periodData1975_2018 };
}