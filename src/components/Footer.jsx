import React from "react";
import footerImage from "../images/footerImage.jpg";

function Footer() {
  return (
    <footer className=" text-white py-6 mt-12">
      <div
        className=" mx-auto text-center bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${footerImage})` }}
      >
        <p><hr className="border-gray-500" />
         2024 LMS FOR GULSHAN CAMPUS SMIT with TEAM - I. All Rights Reserved.
         <hr className="border-gray-500" />
        </p> <br /><br/>

       

        <p>
          <hr className="border-gray-500" /> 2024 LMS FOR GULSHAN CAMPUS SMIT with TEAM - I. All Rights
          Reserved. <hr className="border-gray-500" />
        </p> <br />
      </div>
    </footer>
  );
}

export default Footer;
