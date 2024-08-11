import React, { useState, useEffect } from "react";
import Message from "./Message";
import Input from "./Input";
import ".././style.css";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const savedMessages =
      JSON.parse(localStorage.getItem("chatMessages")) || [];
    setMessages(savedMessages);
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = () => {
    if (currentMessage.trim()) {
      const newMessage = {
        text: currentMessage,
        sender: "me",
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, newMessage]);
      setCurrentMessage("");
    }
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
  };

  return (
    <div className="chat-room">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message
            key={index}
            message={msg}
            onDelete={() => handleDeleteMessage(index)}
          />
        ))}
      </div>
      <Input
        currentMessage={currentMessage}
        setCurrentMessage={setCurrentMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default ChatRoom;
