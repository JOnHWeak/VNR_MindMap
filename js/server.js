import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// --- Static File Serving ---
const rootDir = path.join(__dirname, '..');
app.use(express.static(rootDir));

// --- API Route for Chatbot ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "AIzaSyC689uk9Yh_irsnAMxTw8LEFUKztth3Go4";
const TOPIC = "trong ngành Lịch sử Đảng Cộng sản Việt Nam, không nói về bất kì lĩnh vực khác cũng như không đúng chủ đề";

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ reply: "Tin nhắn không được để trống." });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Bạn là một chuyên gia ${TOPIC}. Trả lời câu hỏi sau một cách ngắn gọn và chính xác: ${userMessage}` }] }],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || data.error) {
      console.error("Gemini API Error:", data.error?.message || 'Unknown error');
      return res.status(500).json({ reply: `Lỗi từ API: ${data.error?.message || 'Không rõ lỗi'}` });
    }

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "Xin lỗi, tôi chưa có câu trả lời cho vấn đề này.";
    res.json({ reply });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ reply: "Lỗi server hoặc không thể kết nối đến API." });
  }
});

// --- Serve HTML files ---
app.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'index.html'));
});

app.get('/main', (req, res) => {
    res.sendFile(path.join(rootDir, 'main.html'));
});

// --- Start Server ---
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});