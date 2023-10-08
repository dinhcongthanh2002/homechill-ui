import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import * as musicMoviesService from "../../services/musicMoviesService";
import Image from "../../components/Image/Image";

const MusicMoviesPage = () => {
  const [musicMoviesMovies, setMusicMovies] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handleNextPage = () => {
    const fetchApi = async () => {
      const result = await musicMoviesService.getMusicMovies(nextPage);
      return setMusicMovies(result.results);
    };
    fetchApi();
    setNextPage(nextPage + 1);
  };
  const handlePrevPage = () => {
    const fetchApi = async () => {
      const result = await musicMoviesService.getMusicMovies(nextPage);
      return setMusicMovies(result.results);
    };
    fetchApi();
    setNextPage(nextPage - 1);
  };
  useEffect(() => {
    handleNextPage();
    // handlePrevPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-16 text-white lg:max-w-[90rem] mx-auto px-2 lg:px-4">
      <h1 className="uppercase lg:text-[25px] text-primary font-bold select-none cursor-text lg:py-4 mt-24 mb-3">
        Phim ca nhạc
      </h1>
      <div className="mb-3">
        <div className="p-5 bg-[#303b42] text-[15px] leading-[22px]">
          <p className="inline-block text-primary font-bold">Phim Ca Nhạc</p>{" "}
          mới nhất, Tổng hợp danh sách các bộ phim hay được web cập nhật liên
          tục. Tải hơn 10.000 bộ phim ca nhạc năm {new Date().getFullYear() - 1}
          , {new Date().getFullYear()} vietsub, thuyết minh mới nhất, hay nhất.
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 grid-rows-3 gap-[10px]">
        {musicMoviesMovies.length > 0 &&
          musicMoviesMovies.map((movie, index) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="relative overflow-hidden select-none origin-center max-h-36 cursor-pointer group"
            >
              <Image
                className="w-full object-cover transition-all lg:hover:scale-125 rounded"
                src={`https://image.tmdb.org/t/p/w500${
                  movie.backdrop_path || movie.poster_path
                }`}
                alt={movie.title || movie.original_title}
              />
              <div className="absolute flex items-center p-2 bg-[rgba(0,0,0,.7)] bottom-0 left-0 right-0 text-white w-full rounded-b">
                <p className="w-60 overflow-hidden whitespace-nowrap text-ellipsis">
                  {movie.title || movie.original_title}
                </p>
              </div>
              <FontAwesomeIcon
                className="absolute h-[50px] w-[50px] top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] scale-150 transition-all text-primary bg-white rounded-full opacity-0 group-hover:scale-100 group-hover:opacity-80 hidden lg:block"
                icon={faCirclePlay}
              />
            </Link>
          ))}
      </div>

      <div className="flex justify-center items-center mt-6">
        {nextPage > 2 ? (
          <>
            <button
              className="px-3 py-4 bg-[#0d253f] min-w-[97px] rounded hover:text-primary"
              onClick={handlePrevPage}
            >
              Quay lại
            </button>
            <div className="mx-5"></div>
            <button
              className="px-3 py-4 bg-[#0d253f] min-w-[97px] rounded hover:text-primary"
              onClick={handleNextPage}
            >
              Xem thêm
            </button>
          </>
        ) : (
          <button
            className="px-3 py-4 bg-[#0d253f] min-w-[97px] rounded hover:text-primary"
            onClick={handleNextPage}
          >
            Xem thêm
          </button>
        )}
      </div>
    </div>
  );
};

export default MusicMoviesPage;
