import UserHeader from "./UserHeader";
import Settings from "./Settings/Settings";

const user = () => {
  return (
    <div
      className=" flex-col hidden md:flex md:flex-col md:w-1/3"
      style={{ flex: 1 }}
    >
      <UserHeader />
      <Settings />
    </div>
  );
};

export default user;
