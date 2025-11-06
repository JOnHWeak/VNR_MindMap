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
                    id: "sub-1986-nay",
                    name: "Lãnh đạo công cuộc Đổi mới (1986 - nay)",
                    type: "sub",
                    period: "1975-nay",
                    description: "Nhánh 2: Từ bước ngoặt Đổi Mới 1986 đến đẩy mạnh CNH, HĐH và hội nhập quốc tế.",
                    content: {
                        summary: "Giai đoạn này là bước ngoặt lịch sử, chuyển đổi từ mô hình kinh tế kế hoạch hóa, bao cấp sang kinh tế thị trường định hướng XHCN, mở cửa hội nhập, đưa đất nước ra khỏi khủng hoảng và đạt được những thành tựu to lớn, có ý nghĩa lịch sử.",
                        citations: ["Session 22-28"]
                    },
                    children: [
                        {
                            id: "event-dai-hoi-VI-1986",
                            name: "Đại hội VI (12/1986)",
                            type: "event",
                            period: "1975-nay",
                            description: "Bước ngoặt Đổi Mới: Bối cảnh lạm phát 774% (1986).",
                            content: {
                                summary: "Bước ngoặt Đổi Mới: Bối cảnh lạm phát 774% (1986). Đại hội khởi xướng đường lối Đổi Mới toàn diện. Tư duy: 'Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật'. Cốt lõi: Xóa bỏ cơ chế tập trung quan liêu, bao cấp. Chấp nhận kinh tế hàng hóa nhiều thành phần. Quán triệt tư tưởng 'lấy dân làm gốc'. Triển khai: Nổi bật là 'Khoán 10' (Nghị quyết 10-NQ/TW ngày 5/4/1988), giao ruộng đất ổn định, lâu dài cho hộ nông dân.",
                                citations: ["Session 22"]
                            }
                        },
                        {
                            id: "event-dai-hoi-VII-1991",
                            name: "Đại hội VII (6/1991)",
                            type: "event",
                            period: "1975-nay",
                            description: "Thông qua Cương lĩnh 1991 (Xây dựng đất nước trong thời kỳ quá độ lên CNXH).",
                            content: {
                                summary: "Thông qua Cương lĩnh 1991 (Xây dựng đất nước trong thời kỳ quá độ lên CNXH). Đề ra 6 đặc trưng XHCN và 5 bài học lớn. Thông qua Chiến lược KT-XH đến 2000 (mục tiêu GDP 2000 gấp đôi 1990). Hội nghị giữa nhiệm kỳ (1/1994): Lần đầu khẳng định chủ trương xây dựng Nhà nước pháp quyền XHCN và xác định 4 nguy cơ (Tụt hậu kinh tế, Chệch hướng XHCN, Tham nhũng, 'Diễn biến hòa bình'). Đối ngoại: Gia nhập ASEAN (1995), bình thường hóa quan hệ với Hoa Kỳ (1995).",
                                citations: ["Session 22, 23"]
                            }
                        },
                        {
                            id: "event-dai-hoi-VIII-1996",
                            name: "Đại hội VIII (6/1996)",
                            type: "event",
                            period: "1975-nay",
                            description: "Chủ trương đẩy mạnh Công nghiệp hóa, Hiện đại hóa (CNH-HĐH) đất nước.",
                            content: {
                                summary: "Bối cảnh: Đất nước ra khỏi khủng hoảng KT-XH. Chủ trương: Đẩy mạnh Công nghiệp hóa, Hiện đại hóa (CNH-HĐH) đất nước. Bổ sung đặc trưng: 'Dân giàu, nước mạnh, xã hội công bằng, văn minh'. Triển khai: Nghị quyết TW 5 (1998) về 'Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc'.",
                                citations: ["Session 23"]
                            }
                        },
                        {
                            id: "event-dai-hoi-IX-2001",
                            name: "Đại hội IX (4/2001)",
                            type: "event",
                            period: "1975-nay",
                            description: "Chủ đề: 'Đất nước bước vào thế kỷ mới'.",
                            content: {
                                summary: "Chủ đề: 'Đất nước bước vào thế kỷ mới'. Chính thức xác định: 'Kinh tế thị trường định hướng XHCN' là mô hình kinh tế tổng quát. Triển khai: Hội nghị TW 5 (2002) ra Nghị quyết về phát triển kinh tế tư nhân, coi đây là 'bộ phận cấu thành quan trọng' và 'vấn đề chiến lược lâu dài'.",
                                citations: ["Session 24"]
                            }
                        },
                        {
                            id: "event-dai-hoi-X-2006",
                            name: "Đại hội X (4/2006)",
                            type: "event",
                            period: "1975-nay",
                            description: "Chủ đề: 'Sớm đưa nước ta ra khỏi tình trạng kém phát triển'.",
                            content: {
                                summary: "Chủ đề: 'Sớm đưa nước ta ra khỏi tình trạng kém phát triển'. Bổ sung Điều lệ Đảng: Cho phép Đảng viên làm kinh tế tư nhân. Thành tựu lớn: Việt Nam chính thức gia nhập WTO (11/2006). Năm 2008, Việt Nam ra khỏi nhóm nước nghèo. Triển khai: Nghị quyết 09 (2007) về Chiến lược biển Việt Nam đến 2020.",
                                citations: ["Session 25"]
                            }
                        },
                        {
                            id: "event-dai-hoi-XI-2011",
                            name: "Đại hội XI (1/2011)",
                            type: "event",
                            period: "1975-nay",
                            description: "Thông qua Cương lĩnh (bổ sung, phát triển năm 2011).",
                            content: {
                                summary: "Thông qua Cương lĩnh (bổ sung, phát triển năm 2011). Đề ra 8 đặc trưng XHCN và 8 mối quan hệ lớn cần giải quyết. Đề ra 3 đột phá chiến lược: (1) Hoàn thiện thể chế KTTT; (2) Phát triển nguồn nhân lực chất lượng cao; (3) Xây dựng kết cấu hạ tầng đồng bộ. Xây dựng Đảng: Nghị quyết TW 4 khóa XI (1/2012) về 'Một số vấn đề cấp bách trong xây dựng Đảng hiện nay'.",
                                citations: ["Session 26"]
                            }
                        },
                        {
                            id: "event-dai-hoi-XII-2016",
                            name: "Đại hội XII (1/2016)",
                            type: "event",
                            period: "1975-nay",
                            description: "Chủ đề: Đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới.",
                            content: {
                                summary: "Chủ đề: Đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới. Kinh tế: Hội nghị TW 5 (6/2017) ra Nghị quyết 10-NQ/TW, khẳng định kinh tế tư nhân là một động lực quan trọng của nền kinh tế. Xây dựng Đảng: Nghị quyết TW 4 khóa XII (10/2016) về tăng cường xây dựng, chỉnh đốn Đảng, ngăn chặn 'tự diễn biến', 'tự chuyển hóa'.",
                                citations: ["Session 27"]
                            }
                        },
                        {
                            id: "event-dai-hoi-XIII-2021",
                            name: "Đại hội XIII (1/2021)",
                            type: "event",
                            period: "1975-nay",
                            description: "Khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc.",
                            content: {
                                summary: "Nhận định: 'Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay'. Mục tiêu 2025: Vượt mức thu nhập trung bình thấp. Mục tiêu 2030: Thu nhập trung bình cao. Mục tiêu 2045: Nước phát triển, thu nhập cao.",
                                citations: ["Session 27, 28"]
                            }
                        },
                        {
                            id: "event-achievements-lessons",
                            name: "Thành tựu, kinh nghiệm",
                            type: "event",
                            period: "1975-nay",
                            description: "Những kết quả nổi bật và bài học kinh nghiệm từ công cuộc Đổi Mới.",
                            content: {
                                summary: "Thành tựu: GDP 2020 đạt 271.2 tỷ USD, ra khỏi nhóm nước nghèo (2008), chính trị ổn định, đối ngoại rộng mở. Bài học: Phải 'lấy dân làm gốc', xây dựng Đảng là then chốt.",
                                citations: ["Session 28"]
                            }
                        },
                        {
                            id: "event-corruption-challenge",
                            name: "Nguyên nhân và tác hại của tham nhũng",
                            type: "event",
                            period: "1975-nay",
                            description: "Thách thức về tham nhũng trong giai đoạn hiện nay.",
                            content: {
                                summary: "Nguyên nhân: Hạn chế về pháp luật, quản lý kinh tế, phát hiện và xử lý, suy thoái đạo đức cán bộ. Tác hại: Đe dọa sự tồn vong của chế độ, làm giảm sút lòng tin của nhân dân, thất thoát kinh tế.",
                                citations: ["Session 29"]
                            }
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