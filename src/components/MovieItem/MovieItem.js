import React from "react";
import { Link } from "react-router-dom";

import Image from "../../components/Image/Image";

const MovieItem = ({ data }) => {
  return (
    <Link
      to={`/movie/${data.id}`}
      className="flex items-center px-2 py-1 hover:bg-[rgba(255,255,255,0.05)] cursor-pointer"
    >
      <Image
        className="w-20 h-[45px] object-cover rounded-lg mr-3"
        src={`https://image.tmdb.org/t/p/w500${
          data.backdrop_path || data.poster_path
        }`}
        alt={data.original_title || data.name}
      />
      <div>
        <p className="text-lg text-[#c6cbd3] font-medium w-[300px] lg:w-32 overflow-hidden whitespace-nowrap text-ellipsis">
          {data.title || data.name}
        </p>
        <p className="text-sm font-normal text-[#c6cbd3]">
          Lượt đánh giá: {data.vote_count}
        </p>
      </div>
    </Link>
  );
};

export default MovieItem;
