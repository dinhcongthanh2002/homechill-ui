import React from "react";
import { Link } from "react-router-dom";

const GenresMovieItem = ({ title, path }) => {
  return (
    <div>
      <Link
        to={path}
        className="w-[175px] lg:h-9 lg:hover:text-primary hover:font-normal"
      >
        <div className="px-3 leading-9">
          <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis">
            {title}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GenresMovieItem;
