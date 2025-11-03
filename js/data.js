// Data structure for the Vietnamese Communist Party History Mindmap
const mindmapData = {
    id: "central",
    name: "Lịch sử Đảng Cộng sản Việt Nam",
    subtitle: "(1930 - nay)",
    type: "central",
    icon: "fas fa-star",
    description: "Hành trình 93 năm xây dựng và phát triển của Đảng Cộng sản Việt Nam",
    content: {
        summary: "Đảng Cộng sản Việt Nam được thành lập ngày 3/2/1930, đã lãnh đạo nhân dân ta qua các cuộc đấu tranh giành độc lập dân tộc, thống nhất đất nước và xây dựng chủ nghĩa xã hội.",
        images: [
            {
                url: "https://via.placeholder.com/400x300/d9534f/ffffff?text=Logo+Dang",
                caption: "Biểu tượng Đảng Cộng sản Việt Nam"
            }
        ],
        videos: [],
        citations: ["Giáo trình Lịch sử Đảng Cộng sản Việt Nam"]
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
                        url: "https://via.placeholder.com/400x300/e74c3c/ffffff?text=Thanh+nien+1930",
                        caption: "Hội nghị thành lập Đảng 3/2/1930"
                    }
                ],
                videos: [
                    {
                        id: "dQw4w9WgXcQ",
                        title: "Lịch sử thành lập Đảng Cộng sản Việt Nam"
                    }
                ],
                citations: ["Giáo trình LSĐ, trang 45-128"]
            },
            children: [
                {
                    id: "context-1930",
                    name: "Bối cảnh ra đời",
                    type: "sub",
                    period: "1930-1945",
                    icon: "fas fa-globe",
                    description: "Tình hình Việt Nam và thế giới trước 1930",
                    content: {
                        summary: "Việt Nam dưới ách thống trị của thực dân Pháp, phong trào yêu nước phát triển mạnh mẽ, cần có một chính đảng cách mạng lãnh đạo.",
                        images: [
                            {
                                url: "https://via.placeholder.com/400x300/c0392b/ffffff?text=VN+Phap+thuoc",
                                caption: "Việt Nam thời Pháp thuộc"
                            }
                        ]
                    }
                },
                {
                    id: "nguyen-ai-quoc",
                    name: "Nguyễn Ái Quốc chuẩn bị",
                    type: "sub",
                    period: "1930-1945",
                    icon: "fas fa-user",
                    description: "Quá trình tìm đường cứu nước của Nguyễn Ái Quốc",
                    content: {
                        summary: "Nguyễn Ái Quốc đi tìm đường cứu nước, thành lập Hội Việt Nam Cách mạng Thanh niên (1925), chuẩn bị cho việc thành lập Đảng.",
                        images: [
                            {
                                url: "https://via.placeholder.com/400x300/c0392b/ffffff?text=Nguyen+Ai+Quoc",
                                caption: "Nguyễn Ái Quốc thời trẻ"
                            }
                        ],
                        videos: [
                            {
                                id: "example1",
                                title: "Tiểu sử Chủ tịch Hồ Chí Minh"
                            }
                        ]
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
                        images: [
                            {
                                url: "https://via.placeholder.com/400x300/c0392b/ffffff?text=Hop+nhat+1930",
                                caption: "Biểu tượng thống nhất"
                            }
                        ]
                    },
                    children: [
                        {
                            id: "political-platform",
                            name: "Cương lĩnh chính trị đầu tiên",
                            type: "event",
                            period: "1930-1945",
                            icon: "fas fa-scroll",
                            description: "Nội dung cương lĩnh chính trị của Đảng",
                            content: {
                                summary: "Đề ra mục tiêu đánh đổ đế quốc Pháp, phong kiến, thực hiện cách mạng dân tộc dân chủ."
                            }
                        }
                    ]
                },
                {
                    id: "movements-1930-1945",
                    name: "Các cao trào (1930-1945)",
                    type: "sub",
                    period: "1930-1945",
                    icon: "fas fa-fist-raised",
                    description: "Các phong trào cách mạng do Đảng lãnh đạo",
                    children: [
                        {
                            id: "soviet-nghe-tinh",
                            name: "Phong trào 1930-1931",
                            subtitle: "(Xô Viết Nghệ Tĩnh)",
                            type: "event",
                            period: "1930-1945",
                            icon: "fas fa-hammer-sickle",
                            description: "Phong trào cách mạng đầu tiên do Đảng lãnh đạo",
                            content: {
                                summary: "Phong trào cách mạng đầu tiên do Đảng lãnh đạo, đỉnh cao là phong trào Xô Viết Nghệ Tĩnh, thể hiện sức mạnh của quần chúng."
                            }
                        },
                        {
                            id: "democratic-movement",
                            name: "Phong trào Dân chủ 1936-1939",
                            type: "event",
                            period: "1930-1945",
                            icon: "fas fa-vote-yea",
                            description: "Phong trào đấu tranh dân chủ",
                            content: {
                                summary: "Lợi dụng chính sách Mặt trận Bình dân của Pháp để phát triển phong trào dân chủ, mở rộng ảnh hưởng của Đảng."
                            }
                        },
                        {
                            id: "liberation-movement",
                            name: "Phong trào Giải phóng dân tộc 1939-1945",
                            type: "event",
                            period: "1930-1945",
                            icon: "fas fa-shield-alt",
                            description: "Phong trào chống Pháp - Nhật",
                            content: {
                                summary: "Chuyển từ đấu tranh dân chủ sang đấu tranh giải phóng dân tộc, chuẩn bị cho Tổng khởi nghĩa."
                            }
                        }
                    ]
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
                        images: [
                            {
                                url: "https://via.placeholder.com/400x300/c0392b/ffffff?text=Cach+mang+T8",
                                caption: "Cướp chính quyền tháng 8/1945"
                            }
                        ],
                        videos: [
                            {
                                id: "example2",
                                title: "Tiến quân ca - Quốc ca Việt Nam"
                            }
                        ]
                    },
                    children: [
                        {
                            id: "independence-declaration",
                            name: "Tuyên ngôn Độc lập 2/9/1945",
                            type: "event",
                            period: "1930-1945",
                            icon: "fas fa-scroll",
                            description: "Khai sinh nước Việt Nam Dân chủ Cộng hòa",
                            content: {
                                summary: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa."
                            }
                        }
                    ]
                }
            ]
        }
    ]
};

// Additional data for other periods (to be loaded dynamically)
const periodData1945_1975 = {
    id: "period-1945-1975",
    name: "Giai đoạn 1945-1975",
    subtitle: "Lãnh đạo kháng chiến và thống nhất đất nước",
    type: "period",
    period: "1945-1975",
    icon: "fas fa-sword",
    description: "Từ sau Cách mạng Tháng Tám đến ngày thống nhất đất nước",
    content: {
        summary: "Giai đoạn Đảng lãnh đạo nhân dân tiến hành hai cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ, giải phóng hoàn toàn miền Nam, thống nhất đất nước.",
        images: [
            {
                url: "https://via.placeholder.com/400x300/3498db/ffffff?text=Khang+chien",
                caption: "Kháng chiến chống Pháp và Mỹ"
            }
        ]
    },
    children: [
        {
            id: "resistance-france",
            name: "Kháng chiến chống Pháp (1945-1954)",
            type: "sub",
            period: "1945-1975",
            icon: "fas fa-shield",
            description: "Cuộc kháng chiến toàn quốc chống thực dân Pháp",
            children: [
                {
                    id: "viet-bac-campaign",
                    name: "Chiến dịch Việt Bắc Thu-Đông 1947",
                    type: "event",
                    period: "1945-1975",
                    icon: "fas fa-mountain"
                },
                {
                    id: "dien-bien-phu",
                    name: "Chiến dịch Điện Biên Phủ 1954",
                    type: "event",
                    period: "1945-1975",
                    icon: "fas fa-trophy",
                    description: "Chiến thắng lịch sử",
                    content: {
                        summary: "Chiến thắng Điện Biên Phủ làm nên 'tiếng sấm' làm rung chuyển địa cầu, buộc Pháp ký Hiệp định Geneva."
                    }
                }
            ]
        }
    ]
};

const periodData1975_2018 = {
    id: "period-1975-2018",
    name: "Giai đoạn 1975-2018",
    subtitle: "Đổi Mới và Hội nhập",
    type: "period",
    period: "1975-2018",
    icon: "fas fa-rocket",
    description: "Từ thời kỳ bao cấp đến bước ngoặt Đổi Mới và sự trỗi dậy của kinh tế tư nhân.",
    children: [
        {
            id: "theory-doi-moi",
            name: "Lý thuyết: Bước ngoặt Đổi Mới - ĐH VI (1986)",
            type: "sub",
            period: "1975-2018",
            icon: "fas fa-book",
            description: "Tư duy lý luận đột phá về kinh tế.",
            children: [
                {
                    id: "context-doi-moi",
                    name: "Bối cảnh (Vì sao phải đổi mới?)",
                    type: "event",
                    period: "1975-2018",
                    icon: "fas fa-question-circle",
                    content: {
                        summary: "Sau 1975, mô hình kinh tế kế hoạch hóa tập trung, bao cấp dẫn đến khủng hoảng kinh tế - xã hội trầm trọng (lạm phát >700%/năm), đòi hỏi phải 'Đổi Mới hay là chết'."
                    }
                },
                {
                    id: "core-content-doi-moi",
                    name: "Nội dung cốt lõi của Đổi Mới",
                    type: "event",
                    period: "1975-2018",
                    icon: "fas fa-cogs",
                    children: [
                        { id: "remove-subsidy", name: "Xóa bỏ cơ chế bao cấp", type: "event", period: "1975-2018" },
                        {
                            id: "multi-component-economy",
                            name: "Phát triển kinh tế hàng hóa nhiều thành phần",
                            type: "event",
                            period: "1975-2018",
                            icon: "fas fa-star",
                            content: { summary: "Chính thức thừa nhận sự tồn tại và vai trò của nhiều hình thức sở hữu (nhà nước, tập thể, tư nhân...), mở đường cho kinh tế tư nhân phát triển hợp pháp." }
                        },
                        { id: "market-mechanism", name: "Chấp nhận cơ chế thị trường", type: "event", period: "1975-2018" }
                    ]
                }
            ]
        },
        {
            id: "practice-startup",
            name: "Thực tiễn: Hệ sinh thái Khởi nghiệp ngày nay",
            type: "sub",
            period: "1975-2018",
            icon: "fas fa-lightbulb",
            description: "Giá trị của Đổi Mới với sự bùng nổ của kinh tế tư nhân và startup.",
            children: [
                {
                    id: "connection-doi-moi",
                    name: "Giá trị & Sự liên hệ",
                    type: "event",
                    period: "1975-2018",
                    icon: "fas fa-link",
                    content: {
                        summary: "Đường lối Đổi Mới 1986 là nền tảng pháp lý và tư tưởng, 'cởi trói' cho nguồn lực xã hội, cho phép cá nhân tự do kinh doanh, tạo ra 'sân chơi' cho các startup như Vingroup, FPT, MoMo, Sky Mavis ra đời."
                    }
                },
                {
                    id: "evidence-startup",
                    name: "Minh chứng & Số liệu",
                    type: "event",
                    period: "1975-2018",
                    icon: "fas fa-chart-bar",
                    content: {
                        summary: "Kinh tế tư nhân đóng góp ~45% GDP. Việt Nam thuộc 'tam giác vàng' khởi nghiệp ở ĐNÁ. Nhiều 'kỳ lân' công nghệ (VNG, MoMo, VNPay, Sky Mavis) đã xuất hiện.",
                        citations: ["Nguồn: Báo cáo NIC, Cổng TTĐT Chính phủ"]
                    }
                },
                {
                    id: "media-startup",
                    name: "Đa phương tiện",
                    type: "event",
                    period: "1975-2018",
                    icon: "fas fa-photo-video",
                    content: {
                        summary: "Tìm kiếm hình ảnh về 'logo Vingroup', 'logo MoMo' hoặc video 'Hệ sinh thái khởi nghiệp Việt Nam' trên YouTube để có minh họa trực quan.",
                        videos: [{ id: "_Tf2c9z_i4g", title: "VTV - Hệ sinh thái khởi nghiệp đổi mới sáng tạo Việt Nam" }]
                    }
                }
            ]
        }
    ]
};

// Export data for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { mindmapData, periodData1945_1975, periodData1975_2018 };
}
