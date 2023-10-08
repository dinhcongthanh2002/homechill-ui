import React from "react";
import { Link } from "react-router-dom";

const NavbarActionMovies = ({ name, className }) => {
  return (
    <Link
      to="/phim-hanh-dong"
      className={`p-1 m-2 hover:text-primary ${className}`}
    >
      {name}
    </Link>
  );
};

export default NavbarActionMovies;
