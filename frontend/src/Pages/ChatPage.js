import React, { useEffect } from "react";
import axios from "axios";
import { REACT_APP_IP, REACT_APP_PORT } from "../services/common";

const ChatPage = () => {
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const data = await axios.get(
          `http://${REACT_APP_IP}:${REACT_APP_PORT}/api/chat`
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChats();
  }, []);

  return <div>Chat PAge</div>;
};

export default ChatPage;
