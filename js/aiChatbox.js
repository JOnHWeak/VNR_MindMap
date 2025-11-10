const chatbox = document.getElementById("chatbox");
const toggleBtn = document.getElementById("chat-toggle");
const closeBtn = document.getElementById("closeChat");
const chatlog = document.getElementById("chatlog");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

toggleBtn.addEventListener("click", () => chatbox.classList.toggle("hidden"));
closeBtn.addEventListener("click", () => chatbox.classList.add("hidden"));
sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

async function sendMessage() {
  const message = input.value.trim();
  if (!message) return;
  addMessage("user", message);
  input.value = "";

  const loading = addMessage("ai", "Đang suy nghĩ...");
  const reply = await getAIResponse(message);
  loading.textContent = reply;
}

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatlog.appendChild(msg);
  chatlog.scrollTop = chatlog.scrollHeight;
  return msg;
}

async function getAIResponse(text) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    const data = await response.json();

    if (!response.ok) {
      // Hiển thị lỗi chi tiết từ server nếu có
      return data.reply || `Lỗi: Server phản hồi với mã ${response.status}`;
    }

    return data.reply;
  } catch (error) {
    console.error("Fetch error:", error);
    return "Lỗi: Không thể gửi yêu cầu đến server.";
  }
}