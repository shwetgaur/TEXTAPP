import React, { useState, useEffect } from "react";
import ChatList from "./chatlist";
import ChatWindow from "./chatwindow";
import io from "socket.io-client";

const ChatApp = ({ user }) => {
    const [chats, setChats] = useState([]); // List of all chats
    const [selectedChat, setSelectedChat] = useState(null); // Currently selected chat
    const [socket, setSocket] = useState(null); // WebSocket connection

    // Initialize WebSocket connection
    useEffect(() => {
        const newSocket = io("http://localhost:5000"); // Backend WebSocket server URL
        setSocket(newSocket);

        // Clean up on unmount
        return () => {
            newSocket.disconnect();
        };
    }, []);

    // Fetch chat data from the backend
    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/chats"); // Replace with your backend API
                const data = await response.json();
                setChats(data);
            } catch (error) {
                console.error("Error fetching chats:", error);
            }
        };

        fetchChats();
    }, []);

    // Handle receiving messages in real-time
    useEffect(() => {
        if (socket) {
            socket.on("message", (message) => {
                setChats((prevChats) =>
                    prevChats.map((chat) =>
                        chat.id === message.chatId
                            ? { ...chat, messages: [...chat.messages, message] }
                            : chat
                    )
                );
            });
        }
    }, [socket]);

    // Send a new message to the backend
    const sendMessage = (chatId, text) => {
        if (socket) {
            const message = {
                chatId,
                sender: user,
                text,
                timestamp: new Date().toISOString(),
            };
            socket.emit("message", message);
        }
    };

    return (
        <div className="chat-app">
            {/* List of chats */}
            <ChatList chats={chats} onSelectChat={setSelectedChat} />

            {/* Selected chat window */}
            {selectedChat && (
                <ChatWindow
                    chat={selectedChat}
                    user={user}
                    onSendMessage={(text) => sendMessage(selectedChat.id, text)}
                />
            )}
        </div>
    );
};

export default ChatApp;
