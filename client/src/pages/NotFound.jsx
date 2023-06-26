import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <h1 className="text-5xl font-bold text-white mb-8">404</h1>
      <p className="text-2xl text-white mb-8">Oops! Page not found</p>
      <Link
        to="/"
        className="bg-white text-purple-500 font-bold py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
