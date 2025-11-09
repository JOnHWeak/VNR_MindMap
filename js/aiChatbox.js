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
  const response = await fetch("http://127.0.0.1:3001/chat", { // Gọi tới server của bạn
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text })
  });

  if (!response.ok) return "Lỗi: không thể kết nối server.";
  const data = await response.json();
  return data.reply;
}

