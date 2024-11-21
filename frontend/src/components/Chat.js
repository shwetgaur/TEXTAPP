import io from "socket.io-client";

const socket = io("http://localhost:5000");

socket.on("message", (msg) => {
    console.log("New message received:", msg);
});
