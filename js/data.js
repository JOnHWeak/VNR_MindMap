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
                        summary: "Việt Nam dưới ách thống trị của thực dân Pháp, phong trào yêu nước phát triển mạnh mẽ, cần có một chính đảng cách mạng lãnh đạo.",
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
                        summary: "Hội nghị hợp nhất 3 tổ chức cộng sản thành Đảng Cộng sản Việt Nam, thông qua Cương lĩnh chính trị đầu tiên.",
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
                        summary: "Đảng lãnh đạo Tổng khởi nghĩa thành công, giành chính quyền trong cả nước, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập.",
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
            subtitle: "Đổi Mới, Hội nhập và Phát triển",
            type: "period",
            period: "1975-nay",
            icon: "fas fa-rocket",
            description: "Từ thời kỳ bao cấp, khủng hoảng đến bước ngoặt Đổi Mới và sự nghiệp CNH, HĐH đất nước.",
            content: {
                summary: "Nội dung của Chương 3[cite: 8, 14, 474, 480, 658, 664, 781, 788, 901, 906, 1279, 1286, 2459, 2466, 2596, 2603, 2942, 2949, 3102, 3109]. Giai đoạn này bắt đầu từ sau khi thống nhất đất nước (1975), trải qua 10 năm khủng hoảng (1975-1986), sau đó tiến hành công cuộc Đổi Mới (từ 1986) để phát triển kinh tế thị trường định hướng XHCN, đẩy mạnh CNH, HĐH và hội nhập quốc tế.",
                images: [
                    {
                        url: "https://via.placeholder.com/400x300/28a745/ffffff?text=Doi+Moi+1986",
                        caption: "Công cuộc Đổi Mới đưa đất nước phát triển"
                    }
                ],
                citations: ["Tổng hợp từ Session 19-29"]
            },
            children: [
                {
                    id: "sub-1975-1986",
                    name: "Xây dựng CNXH và Bảo vệ Tổ quốc (1975-1986)",
                    type: "sub",
                    period: "1975-1986",
                    icon: "fas fa-cogs",
                    description: "Giai đoạn đầu sau thống nhất, tìm tòi đường lối, đối mặt với khủng hoảng và chiến tranh biên giới.",
                    content: {
                        summary: "10 năm đầu sau thống nhất, đất nước đối mặt với nhiều khó khăn: hậu quả chiến tranh, mô hình kinh tế tập trung bao cấp bộc lộ khuyết điểm gây khủng hoảng KT-XH, và phải tiến hành hai cuộc chiến tranh bảo vệ biên giới[cite: 22, 33].",
                        citations: ["Session 19, 20, 21"]
                    },
                    children: [
                        {
                            id: "event-unification-1976",
                            name: "Hoàn thành thống nhất đất nước về mặt Nhà nước (1975-1976)",
                            type: "event",
                            period: "1975-1981",
                            icon: "fas fa-check-double",
                            description: "Thống nhất hai miền về mặt hành chính, pháp lý.",
                            content: {
                                summary: "Sau Hội nghị Hiệp thương chính trị (11/1975) [cite: 63], cả nước tiến hành Tổng tuyển cử bầu Quốc hội chung (25/4/1976)[cite: 81, 89]. Kỳ họp thứ nhất Quốc hội khóa VI (24/6-3/7/1976) [cite: 79, 95, 99] quyết định: Tên nước là 'Cộng hòa xã hội chủ nghĩa Việt Nam'[cite: 104]; Thủ đô là Hà Nội[cite: 105]; Đổi tên Sài Gòn thành TP. Hồ Chí Minh[cite: 106]; Thống nhất các tổ chức chính trị - xã hội[cite: 116].",
                                citations: ["Session 19"]
                            }
                        },
                        {
                            id: "event-dai-hoi-IV-1976",
                            name: "Đại hội IV (12/1976)",
                            type: "event",
                            period: "1975-1981",
                            icon: "fas fa-book",
                            description: "Đại hội đầu tiên sau thống nhất, đề ra đường lối xây dựng CNXH trên cả nước.",
                            content: {
                                summary: "Đại hội đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam[cite: 494, 496]. Đề ra đường lối cách mạng XHCN với 3 cuộc cách mạng (QHSX, KHKT, TTVH) [cite: 518, 519], CNH HĐH là trung tâm[cite: 526]. Hạn chế: Bộc lộ tư tưởng nóng vội [cite: 547, 552], duy trì cơ chế bao cấp, chưa phát hiện khuyết tật mô hình[cite: 550].",
                                citations: ["Session 20"]
                            }
                        },
                        {
                            id: "event-border-wars-1979",
                            name: "Bảo vệ Tổ quốc (1977-1979)",
                            type: "event",
                            period: "1975-1981",
                            icon: "fas fa-shield-alt",
                            description: "Chiến tranh biên giới Tây Nam và biên giới phía Bắc.",
                            content: {
                                summary: "Đất nước đối mặt với hai cuộc chiến tranh ở biên giới: 1. Biên giới Tây Nam: Quân tình nguyện Việt Nam phối hợp với lực lượng Campuchia lật đổ chế độ diệt chủng Pôn Pốt (7/1/1979)[cite: 628, 629]. 2. Biên giới phía Bắc: Chống lại cuộc tấn công xâm lược của Trung Quốc (17/2/1979)[cite: 617, 618].",
                                citations: ["Session 20"]
                            }
                        },
                        {
                            id: "event-breakthroughs-1979-1985",
                            name: "Các bước 'đột phá' (1979-1985)",
                            type: "event",
                            period: "1979-1985",
                            icon: "fas fa-lightbulb",
                            description: "Các nỗ lực 'xé rào' để tháo gỡ khủng hoảng kinh tế.",
                            content: {
                                summary: "Trước khủng hoảng, Đảng đã có những bước thử nghiệm đổi mới: Hội nghị TW 6 (8/1979) cho 'sản xuất bung ra'[cite: 558]. Chỉ thị 100-CT/TW (1/1981) về 'Khoán sản phẩm' trong nông nghiệp [cite: 561-563, 569]. Quyết định 25/CP và 26/CP (1/1981) trao quyền tự chủ cho xí nghiệp[cite: 580, 583, 586]. Đại hội V (3/1982) xác định 'Nông nghiệp là mặt trận hàng đầu'[cite: 706, 707]. Hội nghị TW 8 (6/1985) về 'Giá - Lương - Tiền', chấp nhận xóa bỏ bao cấp [cite: 721-723, 726], nhưng thất bại do nóng vội, gây lạm phát phi mã[cite: 925].",
                                citations: ["Session 20, 21"]
                            }
                        }
                    ]
                },
                {
                    id: "sub-1986-nay",
                    name: "Lãnh đạo công cuộc Đổi Mới và Hội nhập (1986-nay)",
                    type: "sub",
                    period: "1986-nay",
                    icon: "fas fa-sync-alt",
                    description: "Từ bước ngoặt Đổi Mới 1986 đến đẩy mạnh CNH, HĐH và hội nhập quốc tế.",
                    content: {
                        summary: "Giai đoạn này là bước ngoặt lịch sử, chuyển đổi từ mô hình kinh tế kế hoạch hóa, bao cấp sang kinh tế thị trường định hướng XHCN, mở cửa hội nhập, đưa đất nước ra khỏi khủng hoảng và đạt được những thành tựu to lớn, có ý nghĩa lịch sử.",
                        citations: ["Session 22-28"]
                    },
                    children: [
                        {
                            id: "event-dai-hoi-VI-1986",
                            name: "Đại hội VI (12/1986) - Khởi xướng Đổi Mới",
                            type: "event",
                            period: "1986-1991",
                            icon: "fas fa-sun",
                            description: "Bước ngoặt lịch sử, 'nhìn thẳng vào sự thật', khởi xướng Đổi Mới toàn diện.",
                            content: {
                                summary: "Bối cảnh: Đất nước khủng hoảng KT-XH, lạm phát phi mã 774% (1986)[cite: 925]. Đại hội 'nhìn thẳng vào sự thật, đánh giá đúng sự thật' [cite: 935], khởi xướng đường lối Đổi Mới toàn diện[cite: 937]. Nội dung cốt lõi: Xóa bỏ cơ chế tập trung quan liêu, bao cấp[cite: 963]; Phát triển kinh tế hàng hóa nhiều thành phần[cite: 960]; Quán triệt tư tưởng 'lấy dân làm gốc'[cite: 946]. Đ/c Nguyễn Văn Linh được bầu làm Tổng Bí thư[cite: 933].",
                                citations: ["Session 22"]
                            }
                        },
                        {
                            id: "event-dai-hoi-VII-1991",
                            name: "Đại hội VII (6/1991) - Cương lĩnh 1991",
                            type: "event",
                            period: "1991-1996",
                            icon: "fas fa-scroll",
                            description: "Thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ.",
                            content: {
                                summary: "Thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (Cương lĩnh 1991) [cite: 1119, 1140], đề ra 5 bài học lớn [cite: 1136] và 6 đặc trưng XHCN[cite: 1151]. Mục tiêu: Thoát khỏi khủng hoảng, ổn định KT-XH, phấn đấu GDP năm 2000 gấp đôi 1990[cite: 1191]. Hội nghị giữa nhiệm kỳ (1/1994) lần đầu khẳng định chủ trương xây dựng 'Nhà nước pháp quyền' [cite: 1263, 1264] và xác định 4 nguy cơ thách thức [cite: 1250-1257]. Đối ngoại: Bình thường hóa quan hệ với Trung Quốc (1991) [cite: 1242], với Hoa Kỳ (1995) [cite: 1244] và gia nhập ASEAN (1995)[cite: 1247].",
                                citations: ["Session 22"]
                            }
                        },
                        {
                            id: "event-dai-hoi-VIII-1996",
                            name: "Đại hội VIII (6/1996) - Đẩy mạnh CNH, HĐH",
                            type: "event",
                            period: "1996-2001",
                            icon: "fas fa-industry",
                            description: "Chủ trương đẩy mạnh Công nghiệp hóa, Hiện đại hóa đất nước.",
                            content: {
                                summary: "Bối cảnh: Nước ta đã ra khỏi khủng hoảng KT-XH[cite: 1318]. Đại hội bổ sung đặc trưng: 'Dân giàu, nước mạnh, xã hội công bằng, văn minh'[cite: 1326]. Xác định mục tiêu đẩy mạnh CNH, HĐH đất nước [cite: 1341] và đề ra 6 quan điểm CNH-HĐH[cite: 1356]. Ban hành Nghị quyết TW 5 (7/1998) về 'Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc'[cite: 1456, 1457]. Nền kinh tế vượt qua được tác động tiêu cực từ cuộc khủng hoảng tài chính - tiền tệ Châu Á (1997)[cite: 1431].",
                                citations: ["Session 23"]
                            }
                        },
                        {
                            id: "event-dai-hoi-IX-2001",
                            name: "Đại hội IX (4/2001) - Phát huy sức mạnh dân tộc",
                            type: "event",
                            period: "2001-2006",
                            icon: "fas fa-users",
                            description: "Chủ đề 'Đất nước bước vào thế kỷ mới', phát triển kinh tế thị trường.",
                            content: {
                                summary: "Chủ đề 'Đất nước bước vào thế kỷ mới'[cite: 2480]. Xác định rõ nội dung Tư tưởng Hồ Chí Minh[cite: 2491, 2492]. Chính thức công nhận 'Kinh tế thị trường định hướng XHCN' là mô hình kinh tế tổng quát trong thời kỳ quá độ[cite: 2520, 2521]. Hội nghị TW 5 (3/2002) ra Nghị quyết về kinh tế tư nhân, coi đây là 'bộ phận cấu thành quan trọng', 'chiến lược lâu dài' [cite: 2546-2552]. Ban hành Nghị quyết 36 (2004) về công tác đối với người Việt Nam ở nước ngoài[cite: 2577, 2581].",
                                citations: ["Session 24"]
                            }
                        },
                        {
                            id: "event-dai-hoi-X-2006",
                            name: "Đại hội X (4/2006) - Hội nhập WTO",
                            type: "event",
                            period: "2006-2011",
                            icon: "fas fa-globe-americas",
                            description: "Đẩy mạnh toàn diện đổi mới, chủ động hội nhập, đưa nước ta ra khỏi tình trạng kém phát triển.",
                            content: {
                                summary: "Chủ đề: 'Nâng cao năng lực lãnh đạo... sớm đưa nước ta ra khỏi tình trạng kém phát triển' [cite: 2621-2624]. Bổ sung 2 đặc trưng XHCN ('công bằng, dân chủ', 'Nhà nước pháp quyền XHCN') [cite: 2670-2675]. Bổ sung Điều lệ Đảng: Lần đầu tiên cho phép Đảng viên làm kinh tế tư nhân[cite: 2692]. Thành tựu nổi bật: Việt Nam chính thức gia nhập WTO (11/2006)[cite: 2869, 2872]. Năm 2008, Việt Nam ra khỏi nhóm nước nghèo, trở thành nước có thu nhập trung bình (thấp)[cite: 2928]. GDP 2010 đạt 1.168 USD/người[cite: 2921].",
                                citations: ["Session 25"]
                            }
                        },
                        {
                            id: "event-dai-hoi-XI-2011",
                            name: "Đại hội XI (1/2011) - Cương lĩnh 2011",
                            type: "event",
                            period: "2011-2016",
                            icon: "fas fa-file-alt",
                            description: "Thông qua Cương lĩnh (bổ sung, phát triển năm 2011) và Chiến lược KT-XH 2011-2020.",
                            content: {
                                summary: "Thông qua Cương lĩnh Xây dựng đất nước (bổ sung, phát triển 2011)[cite: 3133, 3137]. Cương lĩnh đề ra 8 đặc trưng XHCN [cite: 3218-3259] và 8 phương hướng phát triển[cite: 3228]. Xác định 3 đột phá chiến lược: (1) Hoàn thiện thể chế KTTT định hướng XHCN; (2) Phát triển nhanh nguồn nhân lực chất lượng cao; (3) Xây dựng kết cấu hạ tầng đồng bộ[cite: 3352, 3353]. Ban hành Nghị quyết TW 4 khóa XI (1/2012) về 'Một số vấn đề cấp bách về xây dựng Đảng hiện nay' [cite: 3383-3386].",
                                citations: ["Session 26"]
                            }
                        },
                        {
                            id: "event-dai-hoi-XII-2016",
                            name: "Đại hội XII (1/2016) - Đẩy mạnh toàn diện, đồng bộ",
                            type: "event",
                            period: "2016-2021",
                            icon: "fas fa-tasks",
                            description: "Đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới; tích cực, chủ động hội nhập quốc tế.",
                            content: {
                                summary: "Chủ đề Đại hội: 'Tăng cường xây dựng Đảng trong sạch, vững mạnh; Phát huy sức mạnh toàn dân tộc...' [cite: 154-160]. Đề ra 6 nhiệm vụ trọng tâm [cite: 189-201]. Ban hành Nghị quyết TW 4 khóa XII (10/2016) về xây dựng, chỉnh đốn Đảng, ngăn chặn 'tự diễn biến', 'tự chuyển hóa'[cite: 296, 297]. Ban hành Nghị quyết TW 5 (6/2017) khẳng định 'Kinh tế tư nhân là một động lực quan trọng' của nền kinh tế[cite: 266, 274].",
                                citations: ["Session 27"]
                            }
                        },
                        {
                            id: "event-dai-hoi-XIII-2021",
                            name: "Đại hội XIII (1/2021) - Khát vọng phát triển",
                            type: "event",
                            period: "2021-nay",
                            icon: "fas fa-trophy",
                            description: "Khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc.",
                            content: {
                                summary: "Khẳng định: 'Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay'[cite: 3044, 3045]. Đề ra 6 nhiệm vụ trọng tâm (nổi bật là kiểm soát Covid-19, phát triển kinh tế số) [cite: 383-408] và 3 đột phá chiến lược. Đặt ra các mục tiêu phát triển cụ thể: Đến 2025: Là nước đang phát triển, có công nghiệp theo hướng hiện đại, vượt mức thu nhập trung bình thấp[cite: 347, 352]. Đến 2030: Là nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao[cite: 349, 353]. Đến 2045: Trở thành nước phát triển, thu nhập cao[cite: 351, 354].",
                                citations: ["Session 27, 28"]
                            }
                        }
                    ]
                },
                {
                    id: "sub-review-doi-moi",
                    name: "Tổng kết 35+ năm Đổi Mới",
                    type: "sub",
                    period: "1986-nay",
                    icon: "fas fa-check-circle",
                    description: "Nhìn lại thành tựu, hạn chế và các bài học kinh nghiệm.",
                    content: {
                        summary: "Công cuộc Đổi Mới (từ 1986) đã đạt được những thành tựu to lớn, có ý nghĩa lịch sử, làm thay đổi căn bản bộ mặt đất nước. Tuy nhiên, vẫn còn nhiều hạn chế, thách thức cần giải quyết.",
                        citations: ["Session 28, 29"]
                    },
                    children: [
                        {
                            id: "event-achievements-doi-moi",
                            name: "Thành tựu",
                            type: "event",
                            period: "1986-nay",
                            icon: "fas fa-chart-line",
                            description: "Những kết quả nổi bật về kinh tế, xã hội, đối ngoại.",
                            content: {
                                summary: "Kinh tế: Ra khỏi khủng hoảng, GDP 2020 đạt 271.2 tỷ USD [cite: 2982], thu nhập bình quân đầu người 2.779 USD [cite: 2980], năng suất lao động tăng 6%/năm (2016-2020)[cite: 2989]. Xã hội: Hoàn thành mục tiêu Thiên niên kỷ của LHQ [cite: 3014], tỷ lệ hộ nghèo đa chiều dưới 3% [cite: 3013], chính trị - xã hội ổn định[cite: 3022]. Đối ngoại: Quan hệ được mở rộng, vị thế quốc tế nâng cao[cite: 3035].",
                                citations: ["Session 28"]
                            }
                        },
                        {
                            id: "event-lessons-doi-moi",
                            name: "Hạn chế và Bài học",
                            type: "event",
                            period: "1986-nay",
                            icon: "fas fa-exclamation-triangle",
                            description: "Những yếu kém và kinh nghiệm rút ra.",
                            content: {
                                summary: "Hạn chế: Đổi mới chưa đồng bộ [cite: 3052], quản lý tài nguyên bất cập [cite: 3055], xây dựng Đảng còn hạn chế[cite: 3060]. Nguyên nhân chủ quan là chủ yếu[cite: 3064]. Bài học kinh nghiệm: Phải có quyết tâm chính trị cao [cite: 3086]; quan điểm 'lấy dân làm gốc' [cite: 3082]; xây dựng, chỉnh đốn Đảng là then chốt [cite: 3078, 3079]; chủ động dự báo tình hình [cite: 3088-3090].",
                                citations: ["Session 28"]
                            }
                        },
                        {
                            id: "event-corruption-issue",
                            name: "Thách thức: Tham nhũng",
                            type: "event",
                            period: "1986-nay",
                            icon: "fas fa-balance-scale-right",
                            description: "Nguyên nhân và tác hại của tham nhũng.",
                            content: {
                                summary: "Nguyên nhân: Hạn chế trong chính sách pháp luật [cite: 798-800, 814], hạn chế trong quản lý điều hành kinh tế [cite: 801, 826], hạn chế trong phát hiện và xử lý [cite: 802, 838], sự xuống cấp về đạo đức của một bộ phận cán bộ[cite: 846]. Tác hại: Làm giảm sút lòng tin của nhân dân [cite: 877], thất thoát kinh tế [cite: 884], đe dọa sự tồn vong của chế độ[cite: 878].",
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