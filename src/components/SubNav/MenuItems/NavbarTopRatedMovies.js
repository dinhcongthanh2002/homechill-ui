import React from "react";
import { Link } from "react-router-dom";

const NavbarTopRatedMovies = ({ className, name }) => {
  return (
    <Link
      to="/phim-duoc-xep-hang-hang-dau"
      className={`p-1 m-2 hover:text-primary ${className}`}
    >
      {name}
    </Link>
  );
};

export default NavbarTopRatedMovies;
