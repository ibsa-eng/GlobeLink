import React, { useState } from "react";
import { Widget } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import axios from "axios";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  const handleNewUserMessage = async (newMessage) => {
    // Send user message to backend
    try {
      const response = await axios.post("http://localhost:5000/chat", {
        message: newMessage,
      });
      const botReply = response.data.reply;
      setMessages((prev) => [...prev, { user: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <Widget
        title="Customer Support"
        subtitle="Hi! How can we help?"
        handleNewUserMessage={handleNewUserMessage}
      />
    </div>
  );
};

export default ChatBot;
