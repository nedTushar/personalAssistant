import Me from "../../assets/me.jpg";
import Send from "../../assets/send.png";
import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        timestamp: new Date().toLocaleTimeString(),
        isUser: true, // to identify user messages
      };

      setMessages([...messages, newMessage]);
      setInputValue("");

      try {
        const response = await fetch("http://localhost:3001", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role: "user", message: newMessage.text }),
        });

        if (response.ok) {
          const responseData = await response.json();
          const aiResponse = {
            id: messages.length + 2,
            text: responseData.message,
            timestamp: new Date().toLocaleTimeString(),
            isUser: false, // to identify AI-generated responses
          };
          setMessages((prevMessages) => [...prevMessages, aiResponse]);
        } else {
          // Handle error response from backend
          console.error("Failed to get a response from the backend");
        }
      } catch (error) {
        // Handle fetch or network error
        console.error("Error:", error);
      }
    }
  };

  return (
    <div
      className=" flex border-r-2 border-white  flex-col w-max"
      style={{ flex: 2 }}
    >
      {/* chat header */}
      <div className="bg-red-200 flex w-full h-14 justify-between items-center px-5 gap-3 ">
        <div className="flex">
          <img
            className="rounded-full"
            style={{ height: 42, width: 42 }}
            src={Me}
            alt="me"
          />
        </div>
        <span className="text-lg flex flex-1">Your Personal AI</span>
      </div>

      {/* chat message */}
      <div className="flex flex-1 px-4 pt-8 flex-col w-[100%] overflow-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isUser ? "flex-row-reverse" : "flex-row"
            } ${message.isUser ? "items-start" : "items-end"} mb-4`}
          >
            <span className={`mr-2 ${message.isUser ? "ml-2" : "mr-2"}`}></span>
            <p
              className={`py-2 px-2 ${
                message.isUser
                  ? "bg-green-200 rounded-tl-lg"
                  : "bg-blue-200 rounded-tr-lg"
              } max-w-[80%] rounded-b-lg text-base`}
            >
              {message.text}
            </p>
          </div>
        ))}
      </div>

      {/* chat footer */}
      <div className=" bg-red-100 flex w-full h-14 items-center justify-between px-3 gap-3  ">
        <form onSubmit={handleSubmit} className="flex flex-1 gap-4">
          <div className="flex flex-1">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full h-8 outline-none rounded-sm px-2"
              type="text"
              placeholder="type your message..."
            />
          </div>
          <div className="flex items-center">
            <button type="submit">
              <img style={{ height: 22, width: 22 }} src={Send} alt="send" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
