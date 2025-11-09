// Data structure for the Vietnamese Communist Party History Mindmap
// Phần 2: ĐỔI MỚI, CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA VÀ HỘI NHẬP QUỐC TẾ (1986-2018)

const mindmapData = {
  id: "central",
  name: "Đổi mới, CNH, HĐH & Hội nhập quốc tế",
  subtitle: "(1986-2018)",
  type: "central",
  icon: "fas fa-star",
  description:
    "Giai đoạn Đổi mới, Công nghiệp hóa, Hiện đại hóa và Hội nhập quốc tế của Việt Nam.",
  content: {
    summary:
      "Từ năm 1986, Đảng khởi xướng và lãnh đạo công cuộc Đổi Mới toàn diện, đưa đất nước ra khỏi khủng hoảng kinh tế-xã hội, chuyển đổi sang nền kinh tế thị trường định hướng xã hội chủ nghĩa, đẩy mạnh công nghiệp hóa, hiện đại hóa và chủ động hội nhập quốc tế.",
    images: [
      {
        url: "https://via.placeholder.com/400x300/d9534f/ffffff?text=Doi+Moi+1986",
        caption: "Công cuộc Đổi Mới 1986-2018",
      },
    ],
    videos: [],
    citations: ["Giáo trình Lịch sử Đảng Cộng sản Việt Nam"],
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
      content: { summary: "Giai đoạn đầu tiên của công cuộc đổi mới." },
      children: [
        {
          id: "e1-1",
          name: "Đại hội VI (15-18/12/1986)",
          type: "event",
          icon: "fas fa-flag-checkered",
          content: { summary: "Khởi đầu đổi mới" },
          children: [
            {
              id: "e1-1-1",
              name: "Bối cảnh",
              type: "detail",
              children: [
                {
                  id: "e1-1-1-1",
                  name: "Liên Xô, các nước XHCN khó khăn kinh tế",
                  type: "detail-item",
                },
                {
                  id: "e1-1-1-2",
                  name: "Việt Nam bị cấm vận, cô lập",
                  type: "detail-item",
                },
                {
                  id: "e1-1-1-3",
                  name: "Lạm phát cao (774% năm 1986)",
                  type: "detail-item",
                },
                {
                  id: "e1-1-1-4",
                  name: "Phân phối, lưu thông rối loạn",
                  type: "detail-item",
                },
                {
                  id: "e1-1-1-5",
                  name: "Vi phạm pháp luật, tham nhũng lan rộng",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e1-1-2",
              name: "Nội dung",
              type: "detail",
              children: [
                {
                  id: "e1-1-2-1",
                  name: "3 đặc trưng cơ bản của CNXH",
                  type: "detail-item",
                },
                {
                  id: "e1-1-2-2",
                  name: "Đường lối đổi mới toàn diện",
                  type: "detail-item",
                },
                {
                  id: "e1-1-2-3",
                  name: "4 nhiệm vụ chính",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e1-1-3",
              name: "Hạn chế",
              type: "detail",
              children: [
                {
                  id: "e1-1-3-1",
                  name: "Chưa phát hiện khuyết điểm mô hình CNXH Phương Bắc",
                  type: "detail-item",
                },
                {
                  id: "e1-1-3-2",
                  name: "Đặt chỉ tiêu kinh tế vượt quá hiện thực",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e1-1-4",
              name: "Kết quả (1986-1987)",
              type: "detail",
              children: [
                {
                  id: "e1-1-4-1",
                  name: "Lạm phát giảm còn 67,1% (1991)",
                  type: "detail-item",
                },
                {
                  id: "e1-1-4-2",
                  name: "Bỏ phân phối theo tem phiếu (1988)",
                  type: "detail-item",
                },
                {
                  id: "e1-1-4-3",
                  name: "Tự cung cấp và xuất khẩu gạo (1989)",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e1-2",
          name: "Hội nghị TW 6 (8/1979 & 3/1989)",
          type: "event",
          icon: "fas fa-cogs",
          content: { summary: "Điều chỉnh chính sách" },
          children: [
            {
              id: "e1-2-1",
              name: "Hội nghị TW 6 (8/1979)",
              type: "detail",
              children: [
                {
                  id: "e1-2-1-1",
                  name: "Bước tự phê phán đầu tiên",
                  type: "detail-item",
                },
                {
                  id: "e1-2-1-2",
                  name: "Phá bỏ rào cản cho sản xuất bung ra",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e1-2-2",
              name: "Hội nghị TW 2 (4/1987)",
              type: "detail",
              children: [
                {
                  id: "e1-2-2-1",
                  name: "4 giảm: chi ngân sách, nhập giá, lạm phát, khó khăn",
                  type: "detail-item",
                },
                {
                  id: "e1-2-2-2",
                  name: "Thực hiện chế độ một giá",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e1-2-3",
              name: "Hội nghị TW 6 (3/1989)",
              type: "detail",
              children: [
                {
                  id: "e1-2-3-1",
                  name: "Xác định đổi mới là con đường tất yếu",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e1-3",
          name: "Khoán 10 & chính sách nông nghiệp",
          type: "event",
          icon: "fas fa-tractor",
          content: { summary: "Đột phá trong nông nghiệp" },
          children: [
            {
              id: "e1-3-1",
              name: "Nghị quyết 10 (4/1988)",
              type: "detail",
              children: [
                {
                  id: "e1-3-1-1",
                  name: "Khoán sản phẩm cuối cùng cho nông dân",
                  type: "detail-item",
                },
                {
                  id: "e1-3-1-2",
                  name: "Canh tác trên đất 15 năm",
                  type: "detail-item",
                },
                {
                  id: "e1-3-1-3",
                  name: "Thu nhập từ 40% sản lượng khoán trở lên",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e1-3-2",
              name: "Kết quả",
              type: "detail",
              children: [
                {
                  id: "e1-3-2-1",
                  name: "Sản lượng lương thực tăng lên 17 triệu tấn (1981-1985)",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e1-4",
          name: "Đổi mới trong công nghiệp",
          type: "event",
          icon: "fas fa-industry",
          content: { summary: "Cải cách doanh nghiệp" },
          children: [
            {
              id: "e1-4-1",
              name: "Quyết định 25-CP (1/1981)",
              type: "detail",
              children: [
                {
                  id: "e1-4-1-1",
                  name: "Quyền chủ động sản xuất, kinh doanh của xí nghiệp",
                  type: "detail-item",
                },
                {
                  id: "e1-4-1-2",
                  name: "Tự chủ tài chính",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e1-4-2",
              name: "Quyết định 26-CP",
              type: "detail",
              children: [
                {
                  id: "e1-4-2-1",
                  name: "Mở rộng lương khoán, lương sản phẩm",
                  type: "detail-item",
                },
                {
                  id: "e1-4-2-2",
                  name: "Sử dụng hình thức tiền thưởng",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e1-5",
          name: "Đại hội VII (24-27/6/1991)",
          type: "event",
          icon: "fas fa-chart-line",
          content: { summary: "Tiếp tục đổi mới" },
          children: [
            {
              id: "e1-5-1",
              name: "Nội dung chính",
              type: "detail",
              children: [
                {
                  id: "e1-5-1-1",
                  name: "Xây dựng kinh tế thị trường hàng hóa nhiều thành phần",
                  type: "detail-item",
                },
                {
                  id: "e1-5-1-2",
                  name: "Vận động theo cơ chế thị trường, quản lý của Nhà nước",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e1-5-2",
              name: "Cương lĩnh năm 1991",
              type: "detail",
              children: [
                {
                  id: "e1-5-2-1",
                  name: "5 bài học kinh nghiệm",
                  type: "detail-item",
                },
                {
                  id: "e1-5-2-2",
                  name: "6 đặc trưng cơ bản của CNXH",
                  type: "detail-item",
                },
                {
                  id: "e1-5-2-3",
                  name: "7 phương hướng xây dựng CNXH",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e1-5-3",
              name: "Chiến lược KT-XH đến 2000",
              type: "detail",
              children: [
                {
                  id: "e1-5-3-1",
                  name: "Mục tiêu: Ra khỏi khó khăn, ổn định, phát triển",
                  type: "detail-item",
                },
                {
                  id: "e1-5-3-2",
                  name: "GDP năm 2000 tăng gấp đôi 1990",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
      ],
    },
    // NHÁNH 2: GIAI ĐOẠN TIẾP TỤC ĐỔI MỚI (1991-1996)
    {
      id: "branch-2",
      name: "GIAI ĐOẠN TIẾP TỤC ĐỔI MỚI",
      subtitle: "(1991-1996)",
      type: "period",
      icon: "fas fa-arrow-up",
      description: "Củng cố và phát triển thành quả đổi mới",
      content: {
        summary: "Giai đoạn tiếp tục đổi mới, ổn định và phát triển.",
      },
      children: [
        {
          id: "e2-1",
          name: "Mục tiêu và kết quả chung",
          type: "event",
          icon: "fas fa-trophy",
          description: "Thành tựu 1991-1996",
          content: {
            summary:
              "Giai đoạn 5 năm (1991-1996) đạt nhiều thành tựu quan trọng trong việc ổn định và phát triển kinh tế.",
          },
          children: [
            {
              id: "e2-1-1",
              name: "Mục tiêu chính",
              type: "detail",
              children: [
                {
                  id: "e2-1-1-1",
                  name: "Vượt qua khó khăn thích ứng",
                  type: "detail-item",
                },
                {
                  id: "e2-1-1-2",
                  name: "Ổn định hóa và phát triển kinh tế",
                  type: "detail-item",
                },
                {
                  id: "e2-1-1-3",
                  name: "Tăng cường ổn định chính trị",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e2-1-2",
              name: "Kết quả 5 năm (1991-1996)",
              type: "detail",
              children: [
                {
                  id: "e2-1-2-1",
                  name: "GDP tăng 8,2% (kế hoạch 5,5-6,5%)",
                  type: "detail-item",
                },
                {
                  id: "e2-1-2-2",
                  name: "Lạm phát từ 67,1% (1991) giảm xuống 12,7% (1995)",
                  type: "detail-item",
                },
                {
                  id: "e2-1-2-3",
                  name: "Nền kinh tế thị trường hàng hóa nhiều thành phần hình thành",
                  type: "detail-item",
                },
                {
                  id: "e2-1-2-4",
                  name: "Bắt đầu tích lũy từ trong nước",
                  type: "detail-item",
                },
                {
                  id: "e2-1-2-5",
                  name: "Nhanh chóng ổn định tình hình",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e2-2",
          name: "Hội nghị TW 3 (6/1992)",
          type: "event",
          icon: "fas fa-globe-asia",
          description: "Chính sách đối ngoại",
          content: {
            summary:
              "Đề ra ba quyết sách chiến lược, mở rộng quan hệ đối ngoại.",
          },
          children: [
            {
              id: "e2-2-1",
              name: "Ba quyết sách chiến lược",
              type: "detail",
              content: { summary: "Ba quyết sách chiến lược quan trọng" },
              children: [
                {
                  id: "e2-2-1-1",
                  name: "Củng cố quốc phòng, an ninh",
                  type: "detail-item",
                },
                {
                  id: "e2-2-1-2",
                  name: "Mở rộng quan hệ đối ngoại",
                  type: "detail-item",
                },
                {
                  id: "e2-2-1-3",
                  name: "Đổi mới và chính sách ứng phó",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e2-2-2",
              name: "Mối quan hệ quốc tế",
              type: "detail",
              content: { summary: "Các mối quan hệ quốc tế quan trọng" },
              children: [
                {
                  id: "e2-2-2-1",
                  name: "Bình thường hóa quan hệ Việt Nam-Trung Quốc (từ 11/1991)",
                  type: "detail-item",
                },
                {
                  id: "e2-2-2-2",
                  name: "Rút quân tình nguyện khỏi Campuchia (vào 9/1989)",
                  type: "detail-item",
                },
                {
                  id: "e2-2-2-3",
                  name: "Thành lập quan hệ ngoại giao với Hoa Kỳ (11/7/1995)",
                  type: "detail-item",
                },
                {
                  id: "e2-2-2-4",
                  name: "Gia nhập ASEAN (28/7/1995)",
                  type: "detail-item",
                },
                {
                  id: "e2-2-2-5",
                  name: "Đến cuối năm 1995: quan hệ ngoại giao với 160 nước",
                  type: "detail-item",
                },
                {
                  id: "e2-2-2-6",
                  name: "Quan hệ thương mại với trên 100 nước",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e2-3",
          name: "Hiệp định biên giới với Trung Quốc",
          type: "event",
          icon: "fas fa-handshake",
          description: "Giải quyết vấn đề biên giới",
          content: {
            summary:
              "Ký kết và hoàn thành phân giới cắm mốc với Trung Quốc, tạo nền tảng cho hòa bình và hợp tác.",
          },
          children: [
            {
              id: "e2-3-1",
              name: "Thông tin chung",
              type: "detail",
              children: [
                {
                  id: "e2-3-1-1",
                  name: "Ký kết năm 1999",
                  type: "detail-item",
                },
                {
                  id: "e2-3-1-2",
                  name: "Hoàn thành 31/12/2008",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e2-3-2",
              name: "Nội dung",
              type: "detail",
              children: [
                {
                  id: "e2-3-2-1",
                  name: "Xác định rõ ràng biên giới trên Đất liền",
                  type: "detail-item",
                },
                {
                  id: "e2-3-2-2",
                  name: "Hiện đại hóa biên giới",
                  type: "detail-item",
                },
                {
                  id: "e2-3-2-3",
                  name: "Tạo nền tảng cho hòa bình, hữu nghị, ổn định, hợp tác",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e2-4",
          name: "Chính sách nông dân, nông nghiệp",
          type: "event",
          icon: "fas fa-leaf",
          description: "Xây dựng nông thôn mới",
          content: {
            summary:
              "Tập trung phát triển nông nghiệp, nông thôn và công nghiệp hóa.",
          },
          children: [
            {
              id: "e2-4-1",
              name: "Hội nghị Trung ương 5 (6/1993)",
              type: "detail",
              children: [
                {
                  id: "e2-4-1-1",
                  name: "Xây dựng nông thôn mới (kinh tế phát triển, văn hóa phong phú)",
                  type: "detail-item",
                },
                {
                  id: "e2-4-1-2",
                  name: "Hệ thống chính trị vững mạnh, phát huy dân chủ",
                  type: "detail-item",
                },
                {
                  id: "e2-4-1-3",
                  name: "Ổn định chính trị, tăng cường quy tắc",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e2-4-2",
              name: "Hội nghị Trung ương 7 (7/1994)",
              type: "detail",
              children: [
                {
                  id: "e2-4-2-1",
                  name: "Phát triển công nghiệp, công nghệ",
                  type: "detail-item",
                },
                {
                  id: "e2-4-2-2",
                  name: "Xây dựng giai cấp công nhân mới",
                  type: "detail-item",
                },
                {
                  id: "e2-4-2-3",
                  name: "Mục tiêu là công nghiệp hóa, hiện đại hóa",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e2-5",
          name: "Hội nghị Ban chấp hành toàn quốc giữa kỳ",
          subtitle: "(1/1994)",
          type: "event",
          icon: "fas fa-balance-scale",
          description: "Nhà nước pháp quyền",
          content: {
            summary:
              "Hội nghị lần đầu tiên trong lịch sử Đảng, chuẩn bị cho Đại hội VIII.",
          },
          children: [
            {
              id: "e2-5-1",
              name: "Nội dung chính",
              type: "detail",
              children: [
                {
                  id: "e2-5-1-1",
                  name: "Xây dựng Nhà nước pháp quyền XHCN",
                  type: "detail-item",
                },
                {
                  id: "e2-5-1-2",
                  name: "Thực hiện Nghị quyết Đại hội VII",
                  type: "detail-item",
                },
                {
                  id: "e2-5-1-3",
                  name: "Chuẩn bị tư tưởng cho Đại hội VIII",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
      ],
    },
    // NHÁNH 3: CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA (1996-2001)
    {
      id: "branch-3",
      name: "GIAI ĐOẠN CNH, HĐH",
      subtitle: "(1996-2001)",
      type: "period",
      icon: "fas fa-industry",
      description: "Công nghiệp hóa, hiện đại hóa đất nước",
      content: { summary: "Chuyển sang công nghiệp hóa, hiện đại hóa." },
      children: [
        {
          id: "e3-1",
          name: "Đại hội VIII (28/6-1/7/1996)",
          type: "event",
          icon: "fas fa-landmark",
          description: "Mở ra thời kỳ CNH, HĐH",
          content: {
            summary: "Đại hội VIII tổng kết 10 năm đổi mới.",
          },
          children: [
            {
              id: "e3-1-1",
              name: "Bối cảnh",
              type: "detail",
              content: { summary: "Thông tin về Đại hội VIII" },
              children: [
                {
                  id: "e3-1-1-1",
                  name: "1.198 đại biểu, đại diện hơn 2,1 triệu đảng viên",
                  type: "detail-item",
                },
                {
                  id: "e3-1-1-2",
                  name: "Sau 10 năm đổi mới, đạt thành tựu lớn",
                  type: "detail-item",
                },
                {
                  id: "e3-1-1-3",
                  name: "Nhân dân Việt Nam giành được thắng lợi ban đầu",
                  type: "detail-item",
                },
                {
                  id: "e3-1-1-4",
                  name: "Lạm phát từ 67,1% (1991) giảm xuống 12,7% (1995)",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e3-1-2",
              name: "5 bài học chính",
              type: "detail",
              content: { summary: "Bài học từ 10 năm đổi mới" },
              children: [
                {
                  id: "e3-1-2-1",
                  name: "Giữ vững mục tiêu độc lập dân tộc CNXH",
                  type: "detail-item",
                },
                {
                  id: "e3-1-2-2",
                  name: "Kết hợp sát chặt kinh tế với chính trị từ đầu",
                  type: "detail-item",
                },
                {
                  id: "e3-1-2-3",
                  name: "Xây dựng nền kinh tế thị trường hàng hóa nhiều thành phần",
                  type: "detail-item",
                },
                {
                  id: "e3-1-2-4",
                  name: "Phát triển dân chủ tập thể nhân dân",
                  type: "detail-item",
                },
                {
                  id: "e3-1-2-5",
                  name: "Mở rộng hợp tác quốc tế",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e3-1-3",
              name: "Mục tiêu tổng quát",
              type: "detail",
              content: { summary: "Mục tiêu của Đại hội VIII" },
              children: [
                {
                  id: "e3-1-3-1",
                  name: "Chuẩn bị cho tiền công nghiệp hóa",
                  type: "detail-item",
                },
                {
                  id: "e3-1-3-2",
                  name: "Chuyển sang thời kỳ công nghiệp hóa, hiện đại hóa",
                  type: "detail-item",
                },
                {
                  id: "e3-1-3-3",
                  name: "Tạo cơ sở vật chất-kỹ thuật cho CNXH",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e3-2",
          name: "Chiến lược phát triển kinh tế 2001-2010",
          type: "event",
          icon: "fas fa-map-marked-alt",
          description: "Định hướng dài hạn",
          content: {
            summary:
              "Đề ra chiến lược phát triển kinh tế-xã hội cho giai đoạn 2001-2010.",
          },
          children: [
            {
              id: "e3-2-1",
              name: "Mục tiêu tổng quát",
              type: "detail",
              children: [
                {
                  id: "e3-2-1-1",
                  name: "Ra khỏi tình trạng khó khăn",
                  type: "detail-item",
                },
                {
                  id: "e3-2-1-2",
                  name: "Ổn định, phát triển kinh tế-xã hội",
                  type: "detail-item",
                },
                {
                  id: "e3-2-1-3",
                  name: "Tạo nền tảng cho năm 2020",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e3-2-2",
              name: "Chỉ tiêu cơ bản",
              type: "detail",
              children: [
                {
                  id: "e3-2-2-1",
                  name: "GDP năm 2000 tăng gấp đôi so với 1990",
                  type: "detail-item",
                },
                {
                  id: "e3-2-2-2",
                  name: "Chuyển dịch cơ cấu kinh tế",
                  type: "detail-item",
                },
                {
                  id: "e3-2-2-3",
                  name: "Phát triển nông nghiệp, nông thôn",
                  type: "detail-item",
                },
                {
                  id: "e3-2-2-4",
                  name: "Công nghiệp hóa, hiện đại hóa",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e3-2-3",
              name: "Quan điểm chỉ đạo",
              type: "detail",
              children: [
                {
                  id: "e3-2-3-1",
                  name: "Phát triển KT-XH theo con đường độc lập dân tộc",
                  type: "detail-item",
                },
                {
                  id: "e3-2-3-2",
                  name: "Xây dựng CNXH: dân giàu, nước mạnh, tình người đoàn kết",
                  type: "detail-item",
                },
                {
                  id: "e3-2-3-3",
                  name: "Mục tiêu là con người",
                  type: "detail-item",
                },
                {
                  id: "e3-2-3-4",
                  name: "Giải phóng sức sản xuất, khai thác tiềm năng",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e3-3",
          name: "Khoán trong nông nghiệp (Khoán 10 cải tiến)",
          type: "event",
          icon: "fas fa-seedling",
          description: "Hoàn thiện chính sách khoán",
          content: {
            summary:
              "Cải tiến chính sách khoán 10, tăng quyền tự chủ cho nông dân, thúc đẩy sản xuất nông nghiệp.",
          },
          children: [
            {
              id: "e3-3-1",
              name: "Nội dung",
              type: "detail",
              children: [
                {
                  id: "e3-3-1-1",
                  name: "Nhà nước công nhận khoán diện tích đất",
                  type: "detail-item",
                },
                {
                  id: "e3-3-1-2",
                  name: "Người nông dân có quyền tự do sản xuất",
                  type: "detail-item",
                },
                {
                  id: "e3-3-1-3",
                  name: "Thu hoạch vượt khoán được hưởng",
                  type: "detail-item",
                },
                {
                  id: "e3-3-1-4",
                  name: "Có quyền mua bán tự do",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e3-3-2",
              name: "Kết quả",
              type: "detail",
              children: [
                {
                  id: "e3-3-2-1",
                  name: "Nông sản phát triển liên tục",
                  type: "detail-item",
                },
                {
                  id: "e3-3-2-2",
                  name: "Từ nhập khẩu sang xuất khẩu",
                  type: "detail-item",
                },
                {
                  id: "e3-3-2-3",
                  name: "Năm 1989 có dự trữ và xuất khẩu",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e3-4",
          name: "Chính sách FDI và hợp tác quốc tế",
          type: "event",
          icon: "fas fa-handshake",
          description: "Thu hút đầu tư nước ngoài",
          content: {
            summary:
              "Ban hành Luật Đầu tư nước ngoài, mở cửa thu hút vốn FDI và mở rộng hợp tác quốc tế.",
          },
          children: [
            {
              id: "e3-4-1",
              name: "Luật Đầu tư nước ngoài",
              type: "detail",
              children: [
                {
                  id: "e3-4-1-1",
                  name: "Lần đầu tiên thông qua (kỳ 8 Quốc hội)",
                  type: "detail-item",
                },
                {
                  id: "e3-4-1-2",
                  name: "Có hiệu lực từ 1/1/1988",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e3-4-2",
              name: "Kết quả",
              type: "detail",
              children: [
                {
                  id: "e3-4-2-1",
                  name: "Công ty của hơn 50 nước đầu tư",
                  type: "detail-item",
                },
                {
                  id: "e3-4-2-2",
                  name: "Hơn 100 nước có quan hệ thương mại",
                  type: "detail-item",
                },
                {
                  id: "e3-4-2-3",
                  name: "FDI tăng 20,3 tỷ USD",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e3-5",
          name: "Hội nghị TW 3 (6/1997)",
          type: "event",
          icon: "fas fa-gavel",
          description: "Nhà nước pháp quyền",
          content: {
            summary:
              "Tiếp tục xây dựng Nhà nước pháp quyền XHCN, phát huy quyền làm chủ của nhân dân.",
          },
          children: [
            {
              id: "e3-5-1",
              name: "Nội dung chính",
              type: "detail",
              children: [
                {
                  id: "e3-5-1-1",
                  name: "Phát huy quyền làm chủ của nhân dân",
                  type: "detail-item",
                },
                {
                  id: "e3-5-1-2",
                  name: "Xây dựng Nhà nước pháp quyền XHCN",
                  type: "detail-item",
                },
                {
                  id: "e3-5-1-3",
                  name: "Tăng cường lãnh đạo của Đảng",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
      ],
    },
    // NHÁNH 4: GIAI ĐOẠN NÂNG CAO VÀ HOÀN THIỆN (2001-2018)
    {
      id: "branch-4",
      name: "GIAI ĐOẠN NÂNG CAO VÀ HOÀN THIỆN",
      subtitle: "(2001-2018)",
      type: "period",
      icon: "fas fa-chart-line",
      description: "Nâng cao chất lượng, hiệu quả đổi mới",
      content: {
        summary:
          "Giai đoạn tiếp tục đổi mới, nâng cao chất lượng, hiệu quả, hội nhập sâu rộng.",
      },
      children: [
        {
          id: "e4-1",
          name: "Đại hội IX (8/2001)",
          type: "event",
          icon: "fas fa-sync-alt",
          description: "Tiếp tục đổi mới",
          content: {
            summary:
              "Tiếp tục đổi mới, cải cách, nâng cao hiệu quả doanh nghiệp.",
          },
          children: [
            {
              id: "e4-1-1",
              name: "Bối cảnh",
              type: "detail",
              content: { summary: "Bối cảnh diễn ra Đại hội IX" },
              children: [
                {
                  id: "e4-1-1-1",
                  name: "Sự kiện 11/9/2001 tại Mỹ",
                  type: "detail-item",
                },
                {
                  id: "e4-1-1-2",
                  name: "Thế giới thay đổi mau lẹ",
                  type: "detail-item",
                },
                {
                  id: "e4-1-1-3",
                  name: "Tình hình phức tạp",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e4-1-2",
              name: "Nội dung chính",
              type: "detail",
              content: { summary: "Nội dung chính của Đại hội IX" },
              children: [
                {
                  id: "e4-1-2-1",
                  name: "Tiếp tục đổi mới, cải cách",
                  type: "detail-item",
                },
                {
                  id: "e4-1-2-2",
                  name: "Nâng cao hiệu quả doanh nghiệp",
                  type: "detail-item",
                },
                {
                  id: "e4-1-2-3",
                  name: "Sắp xếp, cải tổ doanh nghiệp nhà nước",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e4-2",
          name: "Hội nghị TW 8 (7/2003) - Chiến lược bảo vệ Tổ quốc",
          type: "event",
          icon: "fas fa-shield-alt",
          description: "Bảo vệ Tổ quốc",
          content: {
            summary:
              "Đề ra chiến lược bảo vệ Tổ quốc toàn diện trong tình hình mới.",
          },
          children: [
            {
              id: "e4-2-1",
              name: "Ba nghị quyết quan trọng",
              type: "detail",
              children: [
                {
                  id: "e4-2-1-1",
                  name: "Phát huy sức mạnh đoàn kết toàn dân",
                  type: "detail-item",
                },
                {
                  id: "e4-2-1-2",
                  name: "Ổn định chính trị, tăng cường ổn định xã hội",
                  type: "detail-item",
                },
                {
                  id: "e4-2-1-3",
                  name: "Chiến lược bảo vệ Tổ quốc trong tình hình mới",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e4-2-2",
              name: "Mục tiêu bảo vệ",
              type: "detail",
              children: [
                {
                  id: "e4-2-2-1",
                  name: "Bảo vệ độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ",
                  type: "detail-item",
                },
                {
                  id: "e4-2-2-2",
                  name: "Bảo vệ Đảng, Nhà nước, nhân dân, chủ nghĩa XHCN",
                  type: "detail-item",
                },
                {
                  id: "e4-2-2-3",
                  name: "Bảo vệ sự nghiệp đổi mới, công nghiệp hóa, hiện đại hóa",
                  type: "detail-item",
                },
                {
                  id: "e4-2-2-4",
                  name: "Bảo vệ an ninh chính trị, an ninh quốc gia",
                  type: "detail-item",
                },
                {
                  id: "e4-2-2-5",
                  name: "Giữ gìn an ninh chính trị, môi trường hòa bình",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e4-3",
          name: "WTO và hội nhập quốc tế",
          type: "event",
          icon: "fas fa-globe",
          description: "Hội nhập kinh tế quốc tế",
          content: {
            summary:
              "Việt Nam chính thức gia nhập WTO, một dấu mốc quan trọng trong hội nhập kinh tế quốc tế.",
          },
          children: [
            {
              id: "e4-3-1",
              name: "Gia nhập WTO",
              type: "detail",
              content: { summary: "Quá trình gia nhập WTO" },
              children: [
                {
                  id: "e4-3-1-1",
                  name: "28/7/1994: Được công nhận tham gia Công ước Luật biển 1982",
                  type: "detail-item",
                },
                {
                  id: "e4-3-1-2",
                  name: "11/2006: Chính thức gia nhập WTO (thành viên thứ 150)",
                  type: "detail-item",
                },
                {
                  id: "e4-3-1-3",
                  name: "Một dấu mốc quan trọng trong hội nhập kinh tế quốc tế",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e4-3-2",
              name: "Kết quả sau 1 năm (2007)",
              type: "detail",
              content: { summary: "Kết quả kinh tế sau khi gia nhập" },
              children: [
                { id: "e4-3-2-1", name: "GDP tăng 8,48%", type: "detail-item" },
                {
                  id: "e4-3-2-2",
                  name: "Xuất khẩu tăng 21,5%",
                  type: "detail-item",
                },
                {
                  id: "e4-3-2-3",
                  name: "FDI tăng 20,3 tỷ USD",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e4-4",
          name: "Hội nghị TW 5 (3/2002) - Phát triển kinh tế tư nhân",
          type: "event",
          icon: "fas fa-store",
          description: "Khuyến khích kinh tế tư nhân",
          content: {
            summary:
              "Coi kinh tế tập thể và tư nhân là bộ phận quan trọng của nền kinh tế.",
          },
          children: [
            {
              id: "e4-4-1",
              name: "Kinh tế tập thể",
              type: "detail",
              children: [
                {
                  id: "e4-4-1-1",
                  name: "Coi là bộ phận quan trọng của nền kinh tế",
                  type: "detail-item",
                },
                {
                  id: "e4-4-1-2",
                  name: "Là văn chiến lược lâu dài",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e4-4-2",
              name: "Kinh tế tư nhân",
              type: "detail",
              children: [
                {
                  id: "e4-4-2-1",
                  name: "Phát triển rộng khắp trong cả nước",
                  type: "detail-item",
                },
                {
                  id: "e4-4-2-2",
                  name: "Gắn với phát triển kinh tế",
                  type: "detail-item",
                },
                {
                  id: "e4-4-2-3",
                  name: "Hạn chế: quy mô nhỏ, công nghệ lạc hậu",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e4-5",
          name: "Đại hội X (18-25/4/2006)",
          type: "event",
          icon: "fas fa-forward",
          description: "Tiếp tục đổi mới toàn diện",
          content: {
            summary:
              "Tiếp tục đổi mới toàn diện, nâng cao hiệu quả và chất lượng.",
          },
          children: [
            {
              id: "e4-5-1",
              name: "Nội dung chính",
              type: "detail",
              children: [
                {
                  id: "e4-5-1-1",
                  name: "Tiếp tục đổi mới toàn diện",
                  type: "detail-item",
                },
                {
                  id: "e4-5-1-2",
                  name: "Nâng cao hiệu quả, chất lượng",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e4-6",
          name: "Đại hội XI (12-19/1/2011)",
          type: "event",
          icon: "fas fa-star",
          description: "Bổ sung Cương lĩnh",
          content: {
            summary:
              "Đại hội XI bổ sung, phát triển Cương lĩnh xây dựng nước CNXH.",
          },
          children: [
            {
              id: "e4-6-1",
              name: "Thông tin chung",
              type: "detail",
              children: [
                {
                  id: "e4-6-1-1",
                  name: "1.377 đại biểu, đại diện 3,6 triệu đảng viên",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e4-6-2",
              name: "Bối cảnh",
              type: "detail",
              children: [
                {
                  id: "e4-6-2-1",
                  name: "Kỷ niệm 1.000 năm Thăng Long-Hà Nội",
                  type: "detail-item",
                },
                {
                  id: "e4-6-2-2",
                  name: "Thành tựu lớn nhưng còn nhiều khó khăn",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e4-6-3",
              name: "Nội dung chính",
              type: "detail",
              children: [
                {
                  id: "e4-6-3-1",
                  name: "Cương lĩnh xây dựng nước CNXH (bổ sung, phát triển năm 2011)",
                  type: "detail-item",
                },
                {
                  id: "e4-6-3-2",
                  name: "Chiến lược, chương trình phát triển 2011-2020",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e4-6-4",
              name: "Những bài học chính",
              type: "detail",
              children: [
                {
                  id: "e4-6-4-1",
                  name: "Giữ vững mục tiêu độc lập dân tộc CNXH",
                  type: "detail-item",
                },
                {
                  id: "e4-6-4-2",
                  name: "Kết hợp lực mạnh dân tộc với lực mạnh thời đại",
                  type: "detail-item",
                },
                {
                  id: "e4-6-4-3",
                  name: "Phát huy sức mạnh đoàn kết toàn dân",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
      ],
    },
    // NHÁNH 5: CÁC CHÍNH SÁCH CHỦ YẾU
    {
      id: "branch-5",
      name: "CÁC CHÍNH SÁCH CHỦ YẾU",
      type: "period",
      icon: "fas fa-file-contract",
      description: "Các chính sách quan trọng trong giai đoạn đổi mới",
      content: { summary: "Tổng hợp các chính sách chủ yếu được triển khai." },
      children: [
        {
          id: "e5-1",
          name: "Cải cách chính sách tiền lương, bảo hiểm xã hội",
          type: "event",
          icon: "fas fa-money-bill-wave",
          description: "Cải cách tiền lương",
          content: {
            summary:
              "Cải cách chính sách tiền lương, bảo hiểm xã hội nhằm đầu tư cho phát triển và tạo nguồn nhân lực chất lượng cao.",
          },
          children: [
            {
              id: "e5-1-1",
              name: "Mục tiêu",
              type: "detail",
              children: [
                {
                  id: "e5-1-1-1",
                  name: "Đầu tư cho phát triển",
                  type: "detail-item",
                },
                {
                  id: "e5-1-1-2",
                  name: "Tạo nguồn nhân lực chất lượng cao",
                  type: "detail-item",
                },
                {
                  id: "e5-1-1-3",
                  name: "Nâng cao hiệu quả hoạt động bộ máy nhà nước",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e5-1-2",
              name: "Nội dung chính 2008-2012",
              type: "detail",
              children: [
                {
                  id: "e5-1-2-1",
                  name: "Trả lương đảm bảo sống được bằng lương trung bình",
                  type: "detail-item",
                },
                {
                  id: "e5-1-2-2",
                  name: "Bảo hiểm xã hội, trợ cấp bảo trợ",
                  type: "detail-item",
                },
                {
                  id: "e5-1-2-3",
                  name: "Liên hệ với kiềm chế tăng giá",
                  type: "detail-item",
                },
                {
                  id: "e5-1-2-4",
                  name: "Bảo đảm cho người nghèo",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e5-2",
          name: "Chính sách nông dân, nông nghiệp (1993)",
          type: "event",
          icon: "fas fa-tractor",
          description: "Phát triển nông nghiệp, nông thôn",
          content: {
            summary:
              "Chính sách phát triển toàn diện nông nghiệp, nông thôn, xây dựng nông thôn mới.",
          },
          children: [
            {
              id: "e5-2-1",
              name: "3 mục tiêu chính",
              type: "detail",
              children: [
                {
                  id: "e5-2-1-1",
                  name: "Xây dựng nông thôn mới",
                  type: "detail-item",
                },
                {
                  id: "e5-2-1-2",
                  name: "Phát triển kinh tế nông nghiệp",
                  type: "detail-item",
                },
                {
                  id: "e5-2-1-3",
                  name: "Văn hóa phong phú, tinh thần lao động",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e5-3",
          name: "Chính sách dân tộc",
          type: "event",
          icon: "fas fa-users",
          description: "Đoàn kết các dân tộc",
          content: {
            summary:
              "Phát huy sức mạnh đoàn kết toàn dân, bình đẳng giữa các dân tộc.",
          },
          children: [
            {
              id: "e5-3-1",
              name: "Hội nghị Trung ương 7 (3/2003)",
              type: "detail",
              children: [
                {
                  id: "e5-3-1-1",
                  name: "Phát huy sức mạnh đoàn kết toàn dân",
                  type: "detail-item",
                },
                {
                  id: "e5-3-1-2",
                  name: "Các dân tộc bình đẳng, đoàn kết, giúp nhau",
                  type: "detail-item",
                },
                {
                  id: "e5-3-1-3",
                  name: "Xóa bỏ định kiến, thành kiến, phân biệt chủng tộc",
                  type: "detail-item",
                },
                {
                  id: "e5-3-1-4",
                  name: "Xây dựng tinh thần cải mượn, tin tưởng lẫn nhau",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e5-4",
          name: "Chính sách tôn giáo",
          type: "event",
          icon: "fas fa-praying-hands",
          description: "Tự do tín ngưỡng, tôn giáo",
          content: {
            summary:
              "Tôn trọng quyền tự do tín ngưỡng, tôn giáo của nhân dân, đồng thời quản lý theo pháp luật.",
          },
          children: [
            {
              id: "e5-4-1",
              name: "Nguyên tắc",
              type: "detail",
              children: [
                {
                  id: "e5-4-1-1",
                  name: "Tôn trọng quyền tự do tín ngưỡng, theo hoặc không theo tôn giáo",
                  type: "detail-item",
                },
                {
                  id: "e5-4-1-2",
                  name: "Quản lý tôn giáo theo pháp luật",
                  type: "detail-item",
                },
                {
                  id: "e5-4-1-3",
                  name: "Giữ gìn phạm vi tôn giáo",
                  type: "detail-item",
                },
                {
                  id: "e5-4-1-4",
                  name: "Không dùng tôn giáo để chống đối nhà nước",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
      ],
    },
    // NHÁNH 6: THÀNH TỰU VÀ HẠN CHẾ (1986-2018)
    {
      id: "branch-6",
      name: "THÀNH TỰU VÀ HẠN CHẾ",
      subtitle: "(1986-2018)",
      type: "period",
      icon: "fas fa-balance-scale",
      description: "Đánh giá tổng kết giai đoạn đổi mới",
      content: {
        summary: "Tổng kết thành tựu, hạn chế và bài học kinh nghiệm.",
      },
      children: [
        {
          id: "e6-1",
          name: "Thành tựu lớn",
          type: "event",
          icon: "fas fa-trophy",
          description: "Những thành tựu nổi bật",
          content: {
            summary:
              "Đạt được nhiều thành tựu to lớn trong phát triển kinh tế-xã hội và hội nhập quốc tế.",
          },
          children: [
            {
              id: "e6-1-1",
              name: "Thành tựu chính",
              type: "detail",
              children: [
                {
                  id: "e6-1-1-1",
                  name: "Ra khỏi tình trạng khó khăn kinh tế-xã hội",
                  type: "detail-item",
                },
                {
                  id: "e6-1-1-2",
                  name: "GDP tăng hơn gấp đôi",
                  type: "detail-item",
                },
                {
                  id: "e6-1-1-3",
                  name: "Xóa bỏ phân phối theo tem phiếu (1988)",
                  type: "detail-item",
                },
                {
                  id: "e6-1-1-4",
                  name: "Đạt tự cấp lương thực, có dự trữ, xuất khẩu",
                  type: "detail-item",
                },
                {
                  id: "e6-1-1-5",
                  name: "Thành lập quan hệ ngoại giao với nhiều nước",
                  type: "detail-item",
                },
                {
                  id: "e6-1-1-6",
                  name: "Gia nhập các tổ chức quốc tế (ASEAN, WTO)",
                  type: "detail-item",
                },
                {
                  id: "e6-1-1-7",
                  name: "Bình thường hóa quan hệ với các nước lớn",
                  type: "detail-item",
                },
                {
                  id: "e6-1-1-8",
                  name: "Kinh tế phát triển nhanh trong khu vực",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e6-1-2",
              name: "Kết quả cụ thể",
              type: "detail",
              children: [
                {
                  id: "e6-1-2-1",
                  name: "Năm 2000: GDP tăng gấp đôi so 1990",
                  type: "detail-item",
                },
                {
                  id: "e6-1-2-2",
                  name: "2007: GDP tăng 8,48%, xuất khẩu 21,5%, FDI 20,3 tỷ USD",
                  type: "detail-item",
                },
                {
                  id: "e6-1-2-3",
                  name: "Kinh tế thị trường nhiều thành phần hình thành",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e6-2",
          name: "Hạn chế, yếu kém",
          type: "event",
          icon: "fas fa-exclamation-triangle",
          description: "Những hạn chế còn tồn tại",
          content: {
            summary: "Vẫn còn nhiều hạn chế, yếu kém cần khắc phục.",
          },
          children: [
            {
              id: "e6-2-1",
              name: "Những vấn đề còn tồn tại",
              type: "detail",
              children: [
                {
                  id: "e6-2-1-1",
                  name: "Nước còn khó khăn, kém phát triển so với khu vực",
                  type: "detail-item",
                },
                {
                  id: "e6-2-1-2",
                  name: "Kinh tế tập thể, tư nhân còn yếu",
                  type: "detail-item",
                },
                {
                  id: "e6-2-1-3",
                  name: "Công nghiệp hóa, hiện đại hóa chưa hoàn toàn",
                  type: "detail-item",
                },
                {
                  id: "e6-2-1-4",
                  name: "Tham nhũng, quan liêu vẫn còn",
                  type: "detail-item",
                },
                {
                  id: "e6-2-1-5",
                  name: "Tiêu cực trong đảng viên",
                  type: "detail-item",
                },
                {
                  id: "e6-2-1-6",
                  name: "Bất bình đẳng xã hội vẫn tồn tại",
                  type: "detail-item",
                },
              ],
            },
            {
              id: "e6-2-2",
              name: "Các yếu tố kìm hãm",
              type: "detail",
              children: [
                {
                  id: "e6-2-2-1",
                  name: "Điểm xuất phát thấp",
                  type: "detail-item",
                },
                {
                  id: "e6-2-2-2",
                  name: "Thiệt hại chiến tranh lâu dài",
                  type: "detail-item",
                },
                {
                  id: "e6-2-2-3",
                  name: "Cấm vận, bao vây quốc tế",
                  type: "detail-item",
                },
                {
                  id: "e6-2-2-4",
                  name: "Sai lầm trong lãnh đạo, quản lý",
                  type: "detail-item",
                },
                {
                  id: "e6-2-2-5",
                  name: "Thiên tai, dịch bệnh",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
        {
          id: "e6-3",
          name: "Bài học kinh nghiệm",
          type: "event",
          icon: "fas fa-lightbulb",
          description: "Bài học từ quá trình đổi mới",
          content: {
            summary:
              "Rút ra những bài học kinh nghiệm quý báu từ quá trình đổi mới.",
          },
          children: [
            {
              id: "e6-3-1",
              name: "5 bài học chính từ đổi mới",
              type: "detail",
              children: [
                {
                  id: "e6-3-1-1",
                  name: "Giữ vững nguyên lý độc lập dân tộc CNXH",
                  type: "detail-item",
                },
                {
                  id: "e6-3-1-2",
                  name: "Sự nghiệp cách mạng là của nhân dân, do nhân dân, vì nhân dân",
                  type: "detail-item",
                },
                {
                  id: "e6-3-1-3",
                  name: "Không ngừng củng cố, tăng cường đoàn kết",
                  type: "detail-item",
                },
                {
                  id: "e6-3-1-4",
                  name: "Kết hợp sức mạnh dân tộc với sức mạnh thời đại",
                  type: "detail-item",
                },
                {
                  id: "e6-3-1-5",
                  name: "Lãnh đạo của Đảng là nhân tố quyết định thắng lợi",
                  type: "detail-item",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
