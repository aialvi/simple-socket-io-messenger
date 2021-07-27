const socket = io("http://localhost:3000");
const messages = document.getElementById("messages");
const msgForm = document.getElementById("msgForm");

socket.on("message", (data) => {
  console.log(data);
  appendMessages(data);
});

msgForm.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("chatmessage", msgForm.msg.value);
  console.log("new message from msgfrom", msgForm.msg.value);
  msgForm.msg.value = "";
});

function appendMessages(message) {
  const html = `<div>${message}</div>`;
  messages.innerHTML += html;
}
