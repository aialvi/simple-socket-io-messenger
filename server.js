const io = require("socket.io")(3000);

io.on("connection", (socket) => {
  console.log("someone connected");
  socket.emit("message", "Ki obostha!");
  socket.on("disconnect", () => {
    console.log("someone disconnected");
  });
  socket.on("chatmessage", (msg) => {
    io.emit("message", msg);
  });
});
