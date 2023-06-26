import ChatMessage from "../components/chat/Chat";
import User from "../components/user/User";

const Chat = () => {
  return (
    <div className="bg-pink-100 h-screen flex justify-center items-center">
      <div className="border border-white shadow-lg rounded-lg h-4/5 w-[65%] flex overflow-hidden">
        <ChatMessage />
        <User />
      </div>
    </div>
  );
};

export default Chat;
