import React from "react";
import NavbarGenresMovies from "./MenuItems/NavbarGenresMovies";
import NavbarTopRatedMovies from "./MenuItems/NavbarTopRatedMovies";

const MenuList = () => {
  return (
    <div className="flex justify-between items-center text-white uppercase cursor-pointer text-[15px]">
      <NavbarGenresMovies name="Thể loại" />
      <NavbarTopRatedMovies name="Phim được xếp hạng hàng đầu" />
    </div>
  );
};

export default MenuList;
