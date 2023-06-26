import Credit from "./Credit";
import Subscription from "./Subscription";
import Support from "./Support";
import Invite from "./Invite";
import Logout from "./Logout";

const Settings = () => {
  return (
    <div className="bg-gray-100  flex flex-1 flex-col items-center  py-5 px-3 cursor-pointer">
      <Credit />
      <Subscription />
      <Support />
      <Invite />
      <Logout />
    </div>
  );
};

export default Settings;
