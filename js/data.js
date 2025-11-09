// Data structure for the Vietnamese Communist Party History Mindmap
// Cập nhật ngày 10/11/2025: Chỉ hiển thị giai đoạn 1986-2018 với 6 nhánh chính.
// ĐÃ LÀM PHẲNG: Gộp tất cả node con (cấp 3) vào nội dung của node cha (cấp 2).

const mindmapData = {
    id: "central",
    name: "ĐỔI MỚI, CNH, HĐH & HỘI NHẬP QUỐC TẾ",
    subtitle: "(1986 - 2018)",
    type: "central",
    icon: "fas fa-star",
    description: "Sơ đồ tư duy 6 nhánh chính của giai đoạn Đổi mới, Công nghiệp hóa, Hiện đại hóa và Hội nhập quốc tế (1986-2018).",
    content: {
        summary: "Từ năm 1986, Đảng khởi xướng và lãnh đạo công cuộc Đổi Mới toàn diện, đưa đất nước ra khỏi khủng hoảng kinh tế - xã hội, chuyển đổi sang nền kinh tế thị trường định hướng xã hội chủ nghĩa, đẩy mạnh công nghiệp hóa, hiện đại hóa và chủ động hội nhập quốc tế.",
        images: [
            {
                url: "https://placehold.co/400x300/28a745/ffffff?text=Doi+Moi+1986",
                caption: "Công cuộc Đổi Mới đưa đất nước phát triển"
            }
        ],
        videos: [],
        citations: ["Tổng hợp từ các tài liệu (Session 19-29)"]
    },
    children: [
        // ===== NHÁNH 1 =====
        {
            id: "branch-1",
            name: "NHÁNH 1: GIAI ĐOẠN ĐỐI MỚI TOÀN DIỆN (1986-1996)",
            type: "period",
            period: "1975-nay",
            description: "Giai đoạn 1: 1986-1996 - Khởi đầu đổi mới",
            // THÊM NỘI DUNG VIDEO VÀO ĐÂY
            content: {
                summary: "Giai đoạn khởi đầu công cuộc Đổi Mới toàn diện, đưa đất nước ra khỏi khủng hoảng kinh tế - xã hội (1986-1996).",
                videos: [
                    { id: "xFHawdU99KQ" } // ID từ link youtube
                ]
            },
            children: [
                {
                    id: "event-dai-hoi-vi-1986",
                    name: "1.1 Đại hội VI (15-18/12/1986) - Khởi đầu đổi mới",
                    type: "event",
                    period: "1975-nay",
                    // GỘP NỘI DUNG TỪ CÁC CON VÀO ĐÂY
                    content: {
                        summary: "<b>Bối cảnh:</b> Liên Xô, các nước xã hội chủ nghĩa đang khó khăn kinh tế. Việt Nam bị cấm vận, cô lập. Lạm phát cao (300% năm 1985 lên 774% năm 1986). Phân phối, lưu thông rối loạn. Vi phạm pháp luật, tham nhũng lan rộng.<br><br>" +
                                 "<b>Nội dung Đại hội VI:</b> Xác nhận ba đặc trưng cơ bản của CNXH: Chế độ làm chủ tập thể XHCN, Nền sản xuất lớn, Nền văn hóa mới, Con người mới XHCN. Đường lối đổi mới toàn diện: Thực hiện chế độ quản lý, xa bỏ tập trung, quan liêu, bao cấp; Chuyển sang hạch toán, kinh doanh, kết hợp kế hoạch với thị trường; Giải phóng mọi nơi lực sản xuất. 4 nhiệm vụ chính: Sản xuất tiêu dùng, Đề ra cơ cấu kinh tế hợp lý (3 chng: lương thực, hàng tiêu dùng, hàng xuất khẩu), Cải tạo xã hội chủ nghĩa phù hợp, Xây dựng nên quốc phòng, an ninh.<br><br>" +
                                 "<b>Hạn chế của Đại hội VI:</b> Chưa phát hiện khuyết điểm mô hình CNXH các nước Phương Bắc. Đặt chỉ tiêu kinh tế vượt quá hiện thực.<br><br>" +
                                 "<b>Kết quả giai đoạn 1986-1987:</b> Lạm phát giảm từ 774,7% (1986) xuống 67,1% (1991). Cuối năm 1988: bỏ phân phối theo tem phiếu. Năm 1989: từ nhập khẩu 45 vạn tấn gạo, năm 1989 tự cung cấp và xuất khẩu."
                    }
                    // KHÔNG CÒN children
                },
                {
                    id: "event-hni-tw-6-1979",
                    name: "1.2 Hội nghị Trung ương 6 (8/1979 và 3/1989) - Điều chỉnh chính sách",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Hội nghị Trung ương 6 (8/1979):</b> Bước tự phê phán đầu tiên. Phá bỏ rào cản cho sản xuất bung ra. Quyết định 10/1979: miễn thuế, trả thù lao cho sản xuất. Chỉ thị 100/1981: khoán sản phẩm đến nhóm, người lao động.<br><br>" +
                                 "<b>Hội nghị Trung ương 2 (4/1987):</b> 4 gim: giảm chi ngân sách, giảm nhập tăng giá, giảm lạm phát, giảm khó khăn. Mở rộng giao lưu hàng hóa, giải thể trạm kiểm soát. Thực hiện chế độ một giá, chế độ thống nhất giá. Chuẩn hóa quản lý kinh tế.<br><br>" +
                                 "<b>Hội nghị Trung ương 6 (3/1989):</b> Chính thức dung hòa khi niệm hệ thống chính trị. Xác định đổi mới là con đường tất yếu của nước ta. Không xa rời nguyên lý chủ nghĩa Mác-Lênin."
                    }
                },
                {
                    id: "event-khoan-10",
                    name: "1.3 Khoán 10 và chính sách nông nghiệp",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Nghị quyết 10 của Bộ Chính trị (4/1988):</b> Khoan sản phẩm cuối cùng cho nông dân. Nông dân nhận khoan và canh tác trên diện tích đất trong 15 năm. Bảo đảm thu nhập từ 40 sản lượng khoan trở lên.<br><br>" +
                                 "<b>Kết quả:</b> Sản lượng lương thực tăng từ 13,4 triệu tấn (1976-1980) lên 17 triệu tấn (1981-1985)."
                    }
                },
                {
                    id: "event-doi-moi-cn",
                    name: "1.4 Đổi mới trong công nghiệp",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Quyết định 25-CP (1/1981):</b> Quyền chủ động sản xuất, kinh doanh của xí nghiệp quốc doanh. Tự chủ tài chính.<br><br>" +
                                 "<b>Quyết định 26-CP:</b> Mở rộng hình thức trả lương khoán, lương sản phẩm. Sử dụng hình thức tiền thưởng.<br><br>" +
                                 "<b>Kết quả:</b> Sản xuất công nghiệp đạt kế hoạch. Công nghiệp địa phương vượt kế hoạch 7,5%."
                    }
                },
                {
                    id: "event-dai-hoi-vii-1991",
                    name: "1.5 Đại hội VII (24-27/6/1991) - Tiếp tục đổi mới",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Đại biểu:</b> 1.176 đại biểu, đại diện hơn 2 triệu đảng viên.<br><br>" +
                                 "<b>Nội dung chính:</b> Xây dựng nền kinh tế thị trường hàng hóa nhiều thành phần. Vận động theo cơ chế thị trường, có sự quản lý của Nhà nước. Theo hướng xã hội chủ nghĩa.<br><br>" +
                                 "<b>Cương lĩnh năm 1991:</b> Tổng kết hơn 60 năm lãnh đạo cách mạng Việt Nam. 5 bài học kinh nghiệm. 6 đặc trưng cơ bản của CNXH. 7 phương hướng xây dựng CNXH. Hai nhiệm vụ chiến lược: xây dựng và bảo vệ Tổ quốc.<br><br>" +
                                 "<b>Chiến lược phát triển kinh tế-xã hội đến năm 2000:</b> Mục tiêu: ra khỏi tình trạng khó khăn, ổn định, phát triển. GDP năm 2000 tăng gấp đôi so với năm 1990."
                    }
                }
            ]
        }, // KẾT THÚC NHÁNH 1

        // ===== NHÁNH 2 =====
        {
            id: "branch-2",
            name: "NHÁNH 2: GIAI ĐOẠN TIẾP TỤC ĐỐI MỚI (1991-1996)",
            type: "period",
            period: "1975-nay",
            description: "Giai đoạn 2: 1991-1996",
            // THÊM NỘI DUNG TÓM TẮT
            content: {
                summary: "Tổng quan về giai đoạn tiếp tục đổi mới, ổn định và phát triển kinh tế (1991-1996)."
            },
            children: [
                {
                    id: "event-muc-tieu-1991-1996",
                    name: "2.1 Mục tiêu và kết quả chung",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Mục tiêu chính:</b> Vượt qua khó khăn thích ứng. Ổn định hóa và phát triển kinh tế. Tăng cường ổn định chính trị.<br><br>" +
                                 "<b>Kết quả 5 năm (1991-1996):</b> GDP tăng 8,2% (kế hoạch 5,5-6,5%). Lạm phát từ 67,1% (1991) giảm xuống 12,7% (1995). Nền kinh tế thị trường hàng hóa nhiều thành phần hình thành. Bắt đầu tích lũy từ trong nước. Nhanh chóng ổn định tình hình."
                    }
                },
                {
                    id: "event-doi-ngoai-1992",
                    name: "2.2 Hội nghị Trung ương 3 (6/1992) - Chính sách đối ngoại",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Ba quyết sách chiến lược:</b> Củng cố quốc phòng, an ninh. Mở rộng quan hệ đối ngoại. Đổi mới và chính sách ứng phó.<br><br>" +
                                 "<b>Mối quan hệ quốc tế:</b> Bình thường hóa quan hệ Việt Nam-Trung Quốc (từ 11/1991). Rút quân tình nguyện khỏi Campuchia (vào 9/1989). Thành lập quan hệ ngoại giao với Hoa Kỳ (11/7/1995). Gia nhập ASEAN (28/7/1995). Đến cuối năm 1995: quan hệ ngoại giao với 160 nước. Quan hệ thương mại với trên 100 nước."
                    }
                },
                {
                    id: "event-bien-gioi-tq-1999",
                    name: "2.3 Hiệp định biên giới với Trung Quốc",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Ký kết và hoàn thành:</b> Ký kết năm 1999. Hoàn thành 31/12/2008.<br><br>" +
                                 "<b>Nội dung:</b> Xác định rõ ràng biên giới trên Đất liền. Hiện đại hóa biên giới. Tạo nền tảng cho hòa bình, hữu nghị, ổn định, hợp tác."
                    }
                },
                {
                    id: "event-nong-dan-1993-1994",
                    name: "2.4 Chính sách về nông dân, nông nghiệp",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Hội nghị Trung ương 5 (6/1993):</b> 3 mục tiêu chính: Xây dựng nông thôn mới (kinh tế phát triển, văn hóa phong phú), Hệ thống chính trị vững mạnh, phát huy dân chủ, Ổn định chính trị, tăng cường quy tắc.<br><br>" +
                                 "<b>Hội nghị Trung ương 7 (7/1994):</b> Phát triển công nghiệp, công nghệ. Xây dựng giai cấp công nhân mới. Mc tụ là công nghiệp hóa, hiện đại hóa."
                    }
                },
                {
                    id: "event-hni-giua-ky-1994",
                    name: "2.5 Hội nghị Ban chấp hành toàn quốc giữa kỳ",
                    type: "event",
                    period: "1975-nay",
                    content: { summary: "Hội nghị lần đầu tiên (1/1994): Xây dựng Nhà nước pháp quyền XHCN, Thực hiện Nghị quyết Đại hội VII, Chuẩn bị tư tưởng cho Đại hội VIII." }
                }
            ]
        }, // KẾT THÚC NHÁNH 2

        // ===== NHÁNH 3 =====
        {
            id: "branch-3",
            name: "NHÁNH 3: GIAI ĐOẠN CNH, HĐH (1996-2001)",
            type: "period",
            period: "1975-nay",
            description: "Giai đoạn 3: 1996-2001",
            // THÊM NỘI DUNG TÓM TẮT
            content: {
                summary: "Tổng quan về giai đoạn đẩy mạnh Công nghiệp hóa, Hiện đại hóa đất nước (1996-2001)."
            },
            children: [
                {
                    id: "event-dai-hoi-viii-1996",
                    name: "3.1 Đại hội VIII (28/6-1/7/1996)",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Đại biểu:</b> 1.198 đại biểu, đại diện hơn 2,1 triệu đảng viên.<br><br>" +
                                 "<b>Bối cảnh:</b> Sau 10 năm đổi mới, đạt thành tựu lớn. Nhân dân Việt Nam giành được thắng lợi ban đầu. Vẫn còn tình trạng khó khăn, bất bình đẳng. Lạm phát từ 67,1% (1991) giảm 12,7% (1995).<br><br>" +
                                 "<b>Nội dung chính:</b> Tổng kết 10 năm đổi mới (1986-1996). 5 bài học chính: Giữ vững mục tiêu độc lập dân tộc CNXH; Kết hợp sát chặt kinh tế với chính trị từ đầu; Xây dựng nền kinh tế thị trường hàng hóa nhiều thành phần; Pháp triển quân chủ tập thể nhân dân; Mở rộng hợp tác quốc tế. Mục tiêu tổng quát: Chuẩn bị cho tiền công nghiệp hóa, Cho phép chuyển sang thời kỳ công nghiệp hóa, hiện đại hóa, Tạo cơ sở vật chất-kỹ thuật cho CNXH."
                    }
                },
                {
                    id: "event-cl-kt-2001-2010",
                    name: "3.2 Chiến lược phát triển kinh tế 2001-2010 (Đại hội VIII)",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Mục tiêu tổng quát:</b> Ra khỏi tình trạng khó khăn. Ổn định, phát triển kinh tế-xã hội. Tạo nền tảng cho năm 2020.<br><br>" +
                                 "<b>Chỉ tiêu cơ bản:</b> GDP năm 2000 tăng gấp đôi so với 1990. Chuyển dịch cơ cấu kinh tế. Phát triển nông nghiệp, nông thôn. Công nghiệp hóa, hiện đại hóa.<br><br>" +
                                 "<b>Quan điểm chỉ đạo:</b> Phát triển kinh tế-xã hội theo con đường độc lập dân tộc. Xây dựng CNXH nước ta là quá trình thực hiện: dân giàu, nước mạnh, tình người đoàn kết. Mục tiêu là con người. Giải phóng sức sản xuất, khai thác tiềm năng."
                    }
                },
                {
                    id: "event-khoan-nn-cai-tien",
                    name: "3.3 Khoán trong nông nghiệp (Khoán 10 cải tiến)",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Nội dung:</b> Nhà nước công nhân khoan diện tích đất. Người nông dân có quyền tự do sản xuất. Thu hoạch vượt khoan được hưởng. Có quyền mua bán tự do.<br><br>" +
                                 "<b>Kết quả:</b> Nông sản phát triển liên tục. Từ nhập khẩu sang xuất khẩu. Năm 1989 có dự trữ và xuất khẩu."
                    }
                },
                {
                    id: "event-fdi-1988",
                    name: "3.4 Chính sách FDI và hợp tác quốc tế",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Luật Đầu tư nước ngoài:</b> Lần đầu tiên thông qua (kỳ 8 Quốc hội). Có hiệu lực từ 1/1/1988.<br><br>" +
                                 "<b>Kết quả:</b> Công ty của hơn 50 nước đầu tư. Hơn 100 nước có quan hệ thương mại. FDI tăng 20,3 tỷ USD."
                    }
                },
                {
                    id: "event-hntw3-1997",
                    name: "3.5 Hội nghị Trung ương 3 (6/1997)",
                    type: "event",
                    period: "1975-nay",
                    content: { summary: "Nội dung chính: Phát huy quyền làm chủ của nhân dân. Xây dựng Nhà nước pháp quyền XHCN. Tăng cường lãnh đạo của Đảng." }
                }
            ]
        }, // KẾT THÚC NHÁNH 3

        // ===== NHÁNH 4 =====
        {
            id: "branch-4",
            name: "NHÁNH 4: GIAI ĐOẠN NÂNG CAO VÀ HOÀN THIỆN (2001-2018)",
            type: "period",
            period: "1975-nay",
            description: "Giai đoạn 4: 2001-2018",
            // THÊM NỘI DUNG TÓM TẮT
            content: {
                summary: "Tổng quan về giai đoạn nâng cao và hoàn thiện thể chế kinh tế thị trường, hội nhập quốc tế sâu rộng (2001-2018)."
            },
            children: [
                {
                    id: "event-dai-hoi-ix-2001",
                    name: "4.1 Đại hội IX (8/2001) - Tiếp tục đổi mới",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Bối cảnh:</b> Sự kiện 11/9/2001 tại Mỹ. Thế giới thay đổi mau lẹ. Tình hình phức tạp.<br><br>" +
                                 "<b>Nội dung chính:</b> Tiếp tục đổi mới, cải cách. Nâng cao hiệu quả doanh nghiệp. Sắp xếp, cải tổ doanh nghiệp nhà nước."
                    }
                },
                {
                    id: "event-cl-bvtq-2003",
                    name: "4.2 Hội nghị Trung ương 8 (7/2003) - Chiến lược bảo vệ Tổ quốc",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Ba nghị quyết quan trọng:</b> Phát huy sức mạnh đoàn kết toàn dân. Ổn định chính trị, tăng cường ổn định xã hội. Chiến lược bảo vệ Tổ quốc trong tình hình mới.<br><br>" +
                                 "<b>Mục tiêu bảo vệ:</b> Bảo vệ độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ. Bảo vệ Đảng, Nhà nước, nhân dân, chủ nghĩa XHCN. Bảo vệ sự nghiệp đổi mới, công nghiệp hóa, hiện đại hóa. Bảo vệ an ninh chính trị, an ninh quốc gia. Giữ gìn an ninh chính trị, môi trường hòa bình."
                    }
                },
                {
                    id: "event-wto-2006",
                    name: "4.3 WTO và hội nhập quốc tế",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Gia nhập WTO:</b> 28/7/1994: Được công nhận tham gia Công ước Luật biển 1982. 11/2006: Chính thức gia nhập WTO (thành viên thứ 150). Một dấu mốc quan trọng trong hội nhập kinh tế quốc tế.<br><br>" +
                                 "<b>Kết quả sau 1 năm gia nhập WTO (2007):</b> GDP tăng 8,48%. Xuất khẩu tăng 21,5%. FDI tăng 20,3 tỷ USD."
                    }
                },
                {
                    id: "event-kttn-2002",
                    name: "4.4 Hội nghị Trung ương 5 (3/2002) - Phát triển kinh tế tư nhân",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Kinh tế tập thể:</b> Coi là bộ phận quan trọng của nền kinh tế. Là văn chiến lược lâu dài.<br><br>" +
                                 "<b>Kinh tế tư nhân:</b> Phát triển rộng khắp trong cả nước. Gắn với phát triển kinh tế. Hạn chế: quy mô nhỏ, công nghệ lạc hậu."
                    }
                },
                {
                    id: "event-dai-hoi-x-2006",
                    name: "4.5 Đại hội X (18-25/4/2006)",
                    type: "event",
                    period: "1975-nay",
                    content: { summary: "Nội dung chính: Tiếp tục đổi mới toàn diện, Nâng cao hiệu quả, chất lượng." }
                },
                {
                    id: "event-dai-hoi-xi-2011",
                    name: "4.6 Đại hội XI (12-19/1/2011)",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Đại biểu:</b> 1.377 đại biểu, đại diện 3,6 triệu đảng viên.<br><br>" +
                                 "<b>Bối cảnh:</b> Kỷ niệm 1.000 năm Thăng Long-Hà Nội. Thành tựu lớn nhưng còn nhiều khó khăn.<br><br>" +
                                 "<b>Nội dung chính:</b> Công lĩnh xây dựng nước CNXH (bổ sung, phát triển năm 2011). Chiến lược, chương trình phát triển 2011-2020. Những bài học chính: Giữ vững mục tiêu độc lập dân tộc CNXH, Kết hợp lực mạnh dân tộc với lực mạnh thời đại, Pháy huy sức mạnh đoàn kết toàn dân."
                    }
                }
            ]
        }, // KẾT THÚC NHÁNH 4

        // ===== NHÁNH 5 =====
        {
            id: "branch-5",
            name: "NHÁNH 5: CÁC CHÍNH SÁCH CHỦ YẾU",
            type: "period",
            period: "1975-nay",
            description: "Giai đoạn 5: Chính sách chủ yếu",
            // THÊM NỘI DUNG TÓM TẮT
            content: {
                summary: "Tổng hợp các chính sách chủ yếu về tiền lương, nông nghiệp, dân tộc và tôn giáo trong thời kỳ đổi mới."
            },
            children: [
                {
                    id: "event-cs-luong-bhxh",
                    name: "5.1 Cải cách chính sách tiền lương, bảo hiểm xã hội",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Mục tiêu:</b> Đầu tư cho phát triển. Tạo nguồn nhân lực chất lượng cao. Nâng cao hiệu quả hoạt động bộ máy nhà nước.<br><br>" +
                                 "<b>Nội dung chính 2008-2012:</b> Trả lương đảm bảo sống được bằng lương trung bình. Bảo hiểm xã hội, trợ cấp bảo trợ. Liên hệ với kiềm chế tăng giá. Bảo đảm cho người nghèo."
                    }
                },
                {
                    id: "event-cs-nong-dan-1993",
                    name: "5.2 Chính sách nông dân, nông nghiệp (1993)",
                    type: "event",
                    period: "1975-nay",
                    content: { summary: "3 mục tiêu chính: Xây dựng nông thôn mới, Phát triển kinh tế nông nghiệp, Văn hóa phong phú, tinh thần lao động." }
                },
                {
                    id: "event-cs-dan-toc-2003",
                    name: "5.3 Chính sách dân tộc",
                    type: "event",
                    period: "1975-nay",
                    content: { summary: "Hội nghị Trung ương 7 (3/2003): Phát huy sức mạnh đoàn kết toàn dân, Các dân tộc bình đẳng, đoàn kết, giúp nhau, Xóa bỏ định kiến, thành kiến, phân biệt chủng tộc, Xây dựng tinh thần cải mượn, tin tưởng lẫn nhau." }
                },
                {
                    id: "event-cs-ton-giao",
                    name: "5.4 Chính sách tôn giáo",
                    type: "event",
                    period: "1975-nay",
                    content: { summary: "Nguyên tắc: Tôn trọng quyền tự do tín ngưỡng, theo hoặc không theo tôn giáo; Quản lý tôn giáo theo pháp luật; Giữ gìn phạm vi tôn giáo; Không dùng tôn giáo để chống đối nhà nước." }
                }
            ]
        }, // KẾT THÚC NHÁNH 5

        // ===== NHÁNH 6 =====
        {
            id: "branch-6",
            name: "NHÁNH 6: THÀNH TỰU VÀ HẠN CHẾ (1986-2018)",
            type: "period",
            period: "1975-nay",
            description: "Giai đoạn 6: Thành tựu và Hạn chế",
            // THÊM NỘI DUNG VIDEO VÀO ĐÂY
            content: {
                summary: "Tổng kết các thành tựu, hạn chế và bài học kinh nghiệm của công cuộc Đổi Mới từ 1986 đến 2018.",
                videos: [
                    { id: "IONfqbbvzys" } // ID từ link youtube
                ]
            },
            children: [
                {
                    id: "event-thanh-tuu-lon",
                    name: "6.1 Thành tựu lớn",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Thành tựu chính:</b> Ra khỏi tình trạng khó khăn kinh tế-xã hội. GDP tăng hơn gấp đôi. Xóa bỏ phân phối theo tem phiếu (1988). Đạt tự cấp lương thực, có dự trữ, xuất khẩu. Thành lập quan hệ ngoại giao với nhiều nước. Gia nhập các tổ chức quốc tế (ASEAN, WTO). Bình thường hóa quan hệ với các nước lớn. Kinh tế phát triển nhanh trong khu vực.<br><br>" +
                                 "<b>Kết quả cụ thể:</b> Năm 2000: GDP tăng gấp đôi so 1990. 2007: GDP tăng 8,48%, xuất khẩu 21,5%, FDI 20,3 tỷ USD. Kinh tế thị trường nhiều thành phần hình thành."
                    }
                },
                {
                    id: "event-han-che-1986-2018",
                    name: "6.2 Hạn chế, yếu kém",
                    type: "event",
                    period: "1975-nay",
                    content: {
                        summary: "<b>Những vấn đề còn tồn tại:</b> Nước còn khó khăn, kém phát triển so với khu vực. Kinh tế tập thể, tư nhân còn yếu. Công nghiệp hóa, hiện đại hóa chưa hoàn toàn. Tham nhũng, quan liêu vẫn còn. Tiêu cực trong đảng viên. Bất bình đẳng xã hội vẫn tồn tại.<br><br>" +
                                 "<b>Các yếu tố kìm hãm:</b> Điểm xuất phát thấp. Thiệt hại chiến tranh lâu dài. Cấm vận, bao vây quốc tế. Sai lầm trong lãnh đạo, quản lý. Thiên tai, dịch bệnh."
                    }
                },
                {
                    id: "event-bai-hoc-1986-2018",
                    name: "6.3 Bài học kinh nghiệm",
                    type: "event",
                    period: "1975-nay",
                    content: { summary: "5 bài học chính từ đổi mới: Giữ vững nguyên lý độc lập dân tộc CNXH; Sự nghiệp cách mạng là của nhân dân, do nhân dân, vì nhân dân; Không ngừng căn cố, tăng cường đoàn kết; Kết hợp sức mạnh dân tộc với sức mạnh thời đại; Lãnh đạo của Đảng là nhân tố quyết định thắng lợi." }
                }
                // Dưới đây là phần nội dung về "Khởi nghiệp của sinh viên"
                // Tôi sẽ thêm nó vào đây như một nhánh con của "Bài học kinh nghiệm" hoặc "Thành tựu"
                // Tốt nhất là thêm vào "Thành tựu"
                // Cập nhật: Thêm vào cuối Nhánh 6
            ]
        } // KẾT THÚC NHÁNH 6
    ]
};

// Dữ liệu cho các giai đoạn khác (để trống)
const periodData1945_1975 = {};
const periodData1975_2018 = {};

// Export data for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { mindmapData, periodData1945_1975, periodData1975_2018 };
}