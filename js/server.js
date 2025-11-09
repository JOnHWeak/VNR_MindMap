import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = "AIzaSyC689uk9Yh_irsnAMxTw8LEFUKztth3Go4"; // <-- để key thật ở đây
const TOPIC = "trong nghành Lịch sử Đảng Cộng sản Việt Nam, không nói về bất kì lĩnh vực khác cũng như không đúng chủ đề"
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{  text: `Bạn là chuyên gia ${TOPIC}. Trả lời câu hỏi: ${userMessage}`}] }],
        }),
      }
    );

     const data = await response.json();
    console.log("Gemini Response:", data);

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "Không có phản hồi từ Gemini.";
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Lỗi server hoặc API không phản hồi." });
  }
});

app.get(`https://generativelanguage.googleapis.com/v1beta/models:generateContent?key=${GEMINI_API_KEY}`)

app.listen(3001, "127.0.0.1", () =>
  console.log("✅ Server đang chạy tại http://localhost:3001")
);