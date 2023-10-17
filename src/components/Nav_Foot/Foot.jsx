import React from "react";
import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoTwitter } from "react-icons/bi";
const Foot = () => {
  return (
    <div className="text-gray-500 flex flex-col items-center gap-4 my-5 px-5">
      <div className="flex items-center gap-5 text-2xl cursor-pointer">
        <BiLogoFacebookCircle className="hover:scale-105 hover:text-white"/>
        <BiLogoTwitter className="hover:scale-105 hover:text-white"/>
        <BiLogoInstagramAlt className="hover:scale-105 hover:text-white"/>
      </div>
      <p className="text-center">
        &copy;2023 - OPAQUE INDUSTRIES LTD. All Rights Reserved.
      </p>
      <div className="underline flex items-center gap-2">
        <p>Terms & conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Foot;
