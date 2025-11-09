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
                    description: "Giai đoạn đất nước thực hiện công cuộc Đổi Mới, công nghiệp hóa, hiện đại hóa và hội nhập quốc tế.",
                    content: {
                        summary: "Từ năm 1986, Đảng khởi xướng và lãnh đạo công cuộc Đổi Mới toàn diện, đưa đất nước ra khỏi khủng hoảng kinh tế - xã hội, chuyển đổi sang nền kinh tế thị trường định hướng xã hội chủ nghĩa, đẩy mạnh công nghiệp hóa, hiện đại hóa và chủ động hội nhập quốc tế."
                    },
                    children: [
                        {
                            id: "branch-doi-moi-toan-dien-1986-1996",
                            name: "Giai đoạn đổi mới toàn diện (1986-1996)",
                            type: "event",
                            period: "1975-nay",
                            children: [
                                {
                                    id: "event-dai-hoi-vi-1986",
                                    name: "Đại hội VI (12/1986) - Khởi đầu đổi mới",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Bối cảnh: Khủng hoảng KT-XH, lạm phát 774.7% (1986). Nội dung: Đề ra đường lối đổi mới toàn diện, xóa bỏ cơ chế tập trung, quan liêu, bao cấp; chuyển sang kinh tế hàng hóa nhiều thành phần. Kết quả: Lạm phát giảm, tự chủ lương thực (xuất khẩu gạo từ 1989)."
                                    }
                                },
                                {
                                    id: "event-dieu-chinh-chinh-sach-1979-1989",
                                    name: "Điều chỉnh chính sách (1979-1989)",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Hội nghị TW 6 (1979): 'Phá rào' cho sản xuất bung ra. Chỉ thị 100 (1981): Khoán sản phẩm trong nông nghiệp. Hội nghị TW 6 (1989): Xác định đổi mới là con đường tất yếu."
                                    }
                                },
                                {
                                    id: "event-khoan-10-nong-nghiep",
                                    name: "Khoán 10 và chính sách nông nghiệp",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Nghị quyết 10 (4/1988): Khoán sản phẩm cuối cùng cho nông dân, giao đất canh tác trong 15 năm, tạo động lực mạnh mẽ cho sản xuất nông nghiệp."
                                    }
                                },
                                {
                                    id: "event-doi-moi-cong-nghiep",
                                    name: "Đổi mới trong công nghiệp",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Quyết định 25-CP và 26-CP (1/1981): Tăng quyền chủ động sản xuất, kinh doanh và tự chủ tài chính cho xí nghiệp quốc doanh, mở rộng hình thức lương khoán, lương sản phẩm."
                                    }
                                },
                                {
                                    id: "event-dai-hoi-vii-1991",
                                    name: "Đại hội VII (6/1991) - Tiếp tục đổi mới",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Thông qua Cương lĩnh 1991, xác định 6 đặc trưng của CNXH và 7 phương hướng xây dựng. Đề ra chiến lược KT-XH đến năm 2000 (GDP tăng gấp đôi 1990)."
                                    }
                                }
                            ]
                        },
                        {
                            id: "branch-tiep-tuc-doi-moi-1991-1996",
                            name: "Giai đoạn tiếp tục đổi mới (1991-1996)",
                            type: "event",
                            period: "1975-nay",
                            children: [
                                {
                                    id: "event-ket-qua-1991-1996",
                                    name: "Mục tiêu và kết quả chung",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "GDP tăng 8.2%/năm, lạm phát giảm còn 12.7% (1995). Nền kinh tế thị trường hàng hóa nhiều thành phần hình thành. Bắt đầu có tích lũy từ nội bộ nền kinh tế."
                                    }
                                },
                                {
                                    id: "event-chinh-sach-doi-ngoai-1992",
                                    name: "Chính sách đối ngoại (Hội nghị TW 3, 6/1992)",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Bình thường hóa quan hệ với Trung Quốc (1991), Hoa Kỳ (1995). Gia nhập ASEAN (1995). Đến 1995, có quan hệ ngoại giao với 160 nước."
                                    }
                                },
                                {
                                    id: "event-hiep-dinh-bien-gioi-tq",
                                    name: "Hiệp định biên giới với Trung Quốc",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Ký kết năm 1999, hoàn thành phân giới cắm mốc trên đất liền vào 31/12/2008, tạo nền tảng cho hòa bình, ổn định."
                                    }
                                },
                                {
                                    id: "event-phat-trien-nong-thon-1993",
                                    name: "Chính sách về nông dân, nông nghiệp",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Hội nghị TW 5 (6/1993) và TW 7 (7/1994) tập trung vào xây dựng nông thôn mới và phát triển công nghiệp, công nghệ."
                                    }
                                }
                            ]
                        },
                        {
                            id: "branch-cnh-hdh-1996-2001",
                            name: "Giai đoạn CNH, HĐH (1996-2001)",
                            type: "event",
                            period: "1975-nay",
                            children: [
                                {
                                    id: "event-dai-hoi-viii-1996",
                                    name: "Đại hội VIII (6/1996)",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Tổng kết 10 năm đổi mới, đề ra mục tiêu chuyển sang thời kỳ công nghiệp hóa, hiện đại hóa đất nước."
                                    }
                                },
                                {
                                    id: "event-chinh-sach-fdi",
                                    name: "Chính sách FDI và hợp tác quốc tế",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Luật Đầu tư nước ngoài có hiệu lực từ 1/1/1988, thu hút mạnh mẽ vốn đầu tư nước ngoài (FDI đạt 20.3 tỷ USD)."
                                    }
                                }
                            ]
                        },
                        {
                            id: "branch-nang-cao-hoan-thien-2001-2018",
                            name: "Giai đoạn nâng cao và hoàn thiện (2001-2018)",
                            type: "event",
                            period: "1975-nay",
                            children: [
                                {
                                    id: "event-dai-hoi-ix-2001",
                                    name: "Đại hội IX (8/2001)",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Tiếp tục đổi mới, nâng cao hiệu quả doanh nghiệp nhà nước trong bối cảnh thế giới phức tạp sau sự kiện 11/9/2001."
                                    }
                                },
                                {
                                    id: "event-chien-luoc-bvtq-2003",
                                    name: "Chiến lược bảo vệ Tổ quốc (Hội nghị TW 8, 7/2003)",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Đề ra chiến lược bảo vệ Tổ quốc trong tình hình mới, bao gồm bảo vệ độc lập, chủ quyền, Đảng, Nhà nước, nhân dân và chế độ XHCN."
                                    }
                                },
                                {
                                    id: "event-gia-nhap-wto-2006",
                                    name: "WTO và hội nhập quốc tế",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Việt Nam chính thức gia nhập WTO (11/2006), một dấu mốc quan trọng trong hội nhập kinh tế quốc tế. Sau 1 năm, GDP tăng 8.48%, FDI đạt 20.3 tỷ USD."
                                    }
                                },
                                {
                                    id: "event-phat-trien-kinh-te-tu-nhan-2002",
                                    name: "Phát triển kinh tế tư nhân (Hội nghị TW 5, 3/2002)",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Coi kinh tế tập thể và kinh tế tư nhân là bộ phận quan trọng, chiến lược lâu dài của nền kinh tế."
                                    }
                                },
                                {
                                    id: "event-dai-hoi-x-xi",
                                    name: "Đại hội X (2006) và XI (2011)",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Đại hội X: Tiếp tục đổi mới toàn diện. Đại hội XI: Thông qua Cương lĩnh (bổ sung, phát triển 2011), kỷ niệm 1000 năm Thăng Long-Hà Nội."
                                    }
                                }
                            ]
                        },
                        {
                            id: "branch-thanh-tuu-han-che",
                            name: "Thành tựu và Hạn chế (1986-2018)",
                            type: "event",
                            period: "1975-nay",
                            children: [
                                {
                                    id: "event-thanh-tuu-doi-moi",
                                    name: "Thành tựu lớn",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Đưa đất nước ra khỏi khủng hoảng KT-XH, GDP tăng trưởng cao, xóa bỏ bao cấp, hội nhập quốc tế sâu rộng (ASEAN, WTO), bình thường hóa quan hệ với các nước lớn."
                                    }
                                },
                                {
                                    id: "event-han-che-yeu-kem",
                                    name: "Hạn chế, yếu kém",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "Kinh tế còn kém phát triển so với khu vực, tham nhũng, quan liêu, bất bình đẳng xã hội vẫn còn tồn tại. Nguyên nhân do điểm xuất phát thấp, hậu quả chiến tranh, cấm vận và sai lầm trong quản lý."
                                    }
                                },
                                {
                                    id: "event-bai-hoc-kinh-nghiem",
                                    name: "Bài học kinh nghiệm",
                                    type: "event",
                                    period: "1975-nay",
                                    content: {
                                        summary: "5 bài học chính: Giữ vững mục tiêu ĐLDT và CNXH; Cách mạng là của nhân dân; Củng cố đoàn kết; Kết hợp sức mạnh dân tộc và thời đại; Sự lãnh đạo của Đảng là nhân tố quyết định."
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