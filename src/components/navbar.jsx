import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 md:px-10 bg-primary">
      {/* for Logo/ image */}
      <div>
        <img
          src={logo}
          alt="Institute Logo"
          className="w-16 h-16 rounded-full"
        />
      </div>

      {/*--------------------- for navigation links -------------------------------*/}

      <div className="flex space-x-8">
        <Link
          to="/"
          className="text-white hover:text-gray-700 hover:underline decoration-2 underline-offset-4"
        >
          Home
        </Link>

        <Link
          to="/About"
          className="text-white  hover:text-gray-700 hover:underline decoration-2 underline-offset-4"
        >
          About
        </Link>
        
        <Link
          to="/Notification"
          className="text-white  hover:text-gray-700 hover:underline decoration-2 underline-offset-4"
        >
          Notifications
        </Link>

        {/* "About Saylani" external link */}
        <a
          href="https://www.saylaniwelfare.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-700 hover:underline decoration-2 underline-offset-4"
        >
          About Saylani
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
