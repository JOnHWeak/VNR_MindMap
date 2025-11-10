import fetch from 'node-fetch';

// This is the Vercel Serverless Function handler
export default async function handler(req, res) {
  // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests for CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ reply: 'Method Not Allowed' });
  }

  const GEMINI_API_KEY = "AIzaSyC689uk9Yh_irsnAMxTw8LEFUKztth3Go4";
  const TOPIC = "trong ngành Lịch sử Đảng Cộng sản Việt Nam";
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ reply: "Tin nhắn không được để trống." });
  }

  try {
    const apiResponse = await fetch(
      https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: Bạn là một chuyên gia . Trả lời câu hỏi sau một cách ngắn gọn và chính xác:  }] }],
        }),
      }
    );

    const data = await apiResponse.json();

    if (!apiResponse.ok || data.error) {
      console.error("Gemini API Error:", data.error?.message || 'Unknown error');
      return res.status(500).json({ reply: Lỗi từ API:  });
    }

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "Xin lỗi, tôi chưa có câu trả lời cho vấn đề này.";

    res.status(200).json({ reply });

  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ reply: "Lỗi server hoặc không thể kết nối đến API." });
  }
}
