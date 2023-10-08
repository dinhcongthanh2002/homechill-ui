import React from "react";
import "tippy.js/dist/tippy.css";

import SubNav from "../SubNav/Menus";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

const Navbar = () => {
  return (
    <div className="bg-[#0d253f] font-roboto w-full h-16 fixed top-0 left-0 right-0 z-10 select-none">
      <div className="w-full lg:max-w-[90rem] mx-auto px-2 lg:px-4 flex justify-between items-center h-full">
        {/* Menu */}
        <div className="xl:hidden">
          <Menu />
        </div>
        <div className="flex items-center">
          {/* logo */}
          <Logo />
          {/* SubNav */}
          <SubNav />
        </div>
        {/* input search */}
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
