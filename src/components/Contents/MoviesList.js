import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import * as movieListService from "../../services/moviesListService";
import Image from "../../components/Image/Image";

const MoviesList = ({ title, genres, path, params }) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await movieListService.getMoviesList(genres, path);
      return setMoviesList(result.results);
    };
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between">
        <Link
          to={params}
          className="font-extrabold text-transparent bg-clip-text bg-primary text-sm lg:text-2xl md:text-2xl py-4 mt-5 uppercase lg:cursor-pointer font-roboto select-none"
        >
          {title}
        </Link>
        <Link
          to={params}
          className="text-white font-medium p-1 md:p-2 text-sm md:text-base mt-5 bg-zinc-600 rounded lg:hover:text-primary"
        >
          Xem tất cả
        </Link>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 auto-rows-auto gap-2 lg:gap-[10px]">
        {moviesList.length > 0 &&
          moviesList.map((movie, index) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className={`${
                index === 0
                  ? "col-span-2 row-span-2 relative lg:text-xl overflow-hidden select-none origin-center sm:max-h-80 lg:max-h-full cursor-pointer group"
                  : "relative overflow-hidden select-none origin-center max-h-36 cursor-pointer group"
              }`}
            >
              <Image
                className="w-full object-cover rounded transition-all lg:hover:scale-125"
                src={`https://image.tmdb.org/t/p/w500/${
                  movie.backdrop_path || movie.poster_path
                }`}
                alt={movie.title || movie.original_title}
              />
              <div className="absolute flex items-center p-[5px] md:p-2 lg:p-2 bg-[rgba(0,0,0,.7)] bottom-0 left-0 right-0 text-white w-full rounded-b">
                <p className="text-sm md:text-base lg:text-base w-60 overflow-hidden whitespace-nowrap text-ellipsis">
                  {movie.title || movie.original_title}
                </p>
              </div>
              <FontAwesomeIcon
                className="absolute h-[50px] w-[50px] top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] scale-150 transition-all text-primary bg-white rounded-full opacity-0 group-hover:scale-100 group-hover:opacity-80"
                icon={faCirclePlay}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
