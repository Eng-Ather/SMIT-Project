import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { fontAwesome } from "fontawesome";

function Navbar() {
  return (
    <nav className="flex justify-center lg:justify-between items-center container mx-auto p-2 md:px-10 bg-primary">
      {/* for Logo/ image */}
      <div className="flex">
        <span>
          <img
            src={logo}
            alt="SMIT"
            className="w-10 h-10 lg:w-16 lg:h-16 rounded-full"
          />
        </span>
        <span className="hidden mx-8 my-4">
          <p className="text-2xl text-white pacifico-regular">
            Empowering Innovation Through IT Excellence
          </p>
        </span>
      </div>

      {/*--------------------- for navigation links -------------------------------*/}

      <div className="hidden md:flex lg:flex space-x-2 md:space-x-4 lg:space-x-8">
        <Link
          to="/"
          className="text-white text-base md:text-lg lg:text-xl font-bold hover:text-gray-700 hover:underline decoration-2 underline-offset-4"
        >
          Home
        </Link>

        <Link
          to="/About"
          className="text-white text-base md:text-lg lg:text-xl font-bold hover:text-gray-700 hover:underline decoration-2 underline-offset-4"
        >
          About
        </Link>

        <Link
          to="/Notification"
          className="text-white text-base md:text-lg lg:text-xl font-bold hover:text-gray-700 hover:underline decoration-2 underline-offset-4"
        >
          Notifications
        </Link>

        {/* "About Saylani" external link */}
        <a
          href="https://www.saylaniwelfare.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-base md:text-lg lg:text-xl font-bold hover:text-gray-700 hover:underline decoration-2 underline-offset-4"
        >
          About Saylani
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
