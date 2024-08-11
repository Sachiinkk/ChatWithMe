import React from "react";

const Message = ({ message, onDelete }) => {
  return (
    <div
      className={`message ${message.sender === "me" ? "right" : "left"}`}
      onContextMenu={(e) => {
        e.preventDefault();
        onDelete();
      }}
    >
      <p>{message.text}</p>
    </div>
  );
};

export default Message;
