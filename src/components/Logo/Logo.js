import React from "react";
import { Link } from "react-router-dom";

import PhimChillLogo from "../../assets/images/logo.png";
import Image from "../../components/Image/Image";

const Logo = () => {
  return (
    <div className="w-48 md:w-52 ml-6 lg:ml-0 lg:w-[180px] flex items-center">
      <Link to="/" className="cursor-pointer mr-6">
        <Image className="w-full" src={PhimChillLogo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
