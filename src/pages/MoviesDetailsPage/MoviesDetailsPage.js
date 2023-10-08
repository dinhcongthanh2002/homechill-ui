import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import * as detailsMoviesService from "../../services/detailsMoviesService";
import Image from "../../components/Image/Image";

const MoviesDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [detailsMovies, setDetailsMovies] = useState([]);

  const numberOfMinutes = detailsMovies.runtime;
  const hour = Math.floor(numberOfMinutes / 60); //Lấy số giờ (phần nguyên khi chia cho 60)
  const minute = numberOfMinutes % 60; // Lấy số phút (phần dư khi chia cho 60)
  const strTotalMinutes = hour + " giờ " + minute + " phút";

  const genreNames = detailsMovies.genres
    ? detailsMovies.genres.map((genre) => genre.name)
    : [];
  const countries = detailsMovies.production_countries
    ? detailsMovies.production_countries.map((countries) => countries.name)
    : [];
  const [isTrailerVisible, setIsTrailerVisible] = useState(false);
  const handleButtonTrailer = () => {
    setIsTrailerVisible(!isTrailerVisible);
  };
  const renderTrailer = () => {
    const keyVideo = detailsMovies.videos.results.find(
      (video) =>
        // video.name === "Official Trailer"
        // (video.name === "Official Trailer" ? video.name : video.name)
        video.name
    );
    return (
      <div className="h-[210px] md:h-[400px] lg:h-[600px]">
        <ReactPlayer
          light={true}
          controls={true}
          volume={0.5}
          width="100%"
          height="100%"
          url={`https://www.youtube.com/watch?v=${keyVideo.key}`}
        />
      </div>
    );
  };
  useEffect(() => {
    const fetchApi = async () => {
      const result = await detailsMoviesService.getDetailsMovies(id);
      setMovie(result);
      return setDetailsMovies(result);
    };
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  if (!movie) {
    return (
      <div className="w-full h-[100vh] text-white text-4xl flex items-center justify-center">
        <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
      </div>
    );
  }
  return (
    <div className="mt-16 text-white lg:max-w-[70rem] mx-auto px-2 lg:px-4">
      <div>
        <div className="relative mt-[73px]">
          <Image
            className="w-full max-h-[611px] object-cover rounded-md"
            src={`https://image.tmdb.org/t/p/w500/${detailsMovies.backdrop_path}`}
            alt={detailsMovies.title || detailsMovies.name}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0000004d]"></div>
          <div className="flex absolute bottom-3 left-3 items-end">
            <Image
              className="w-44 hidden lg:block h-full object-cover rounded border-white border-[1px]"
              src={`https://image.tmdb.org/t/p/w500/${detailsMovies.poster_path}`}
              alt=""
            />
            <div className="lg:ml-6 font-medium">
              <p className="text-[28px] mb-2">
                {detailsMovies.title || detailsMovies.name}
              </p>
              <p className="text-xl mb-[10px]">
                ({new Date(detailsMovies.release_date).getFullYear()})
              </p>
              <div className="font-bold text-sm">
                <button
                  className="py-2 px-3 bg-[#0d253f] mr-2 rounded-sm xl:hover:opacity-80"
                  onClick={handleButtonTrailer}
                >
                  <FontAwesomeIcon icon={faYoutube} /> Xem Trailer
                </button>
                <button
                  className="py-2 px-3 bg-[#d9534f] rounded-sm xl:hover:opacity-80"
                  onClick={() => {
                    alert(
                      `Phim ${
                        detailsMovies.title || detailsMovies.name
                      } chưa có dữ liệu do nhà phát triển không có API 😭`
                    );
                  }}
                >
                  <FontAwesomeIcon icon={faCirclePlay} /> Xem Phim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2e3940] text-[#adb4c1] mt-3 p-2 text-[15px]">
        <div className="lg:grid lg:grid-cols-3 lg:auto-rows-max lg:gap-x-10  font-extralight my-3">
          <div className="lg:grid gap-y-1 mb-2">
            <p className="text-red-600">
              <span className="text-sm font-bold text-white">Đang phát: </span>
              {detailsMovies.status}
            </p>

            <p>
              <span className="text-sm font-bold text-white">Thể loại: </span>
              {genreNames.join(", ")}
            </p>
          </div>
          <div className="lg:grid gap-y-1 mb-2">
            <p>
              <span className="text-sm font-bold text-white">
                Năm phát hành:{" "}
              </span>
              {new Date(detailsMovies.release_date).getFullYear()}
            </p>
            <p>
              <span className="text-sm font-bold text-white">
                Lượt đánh giá:{" "}
              </span>
              <span className="text-primary font-semibold">
                {detailsMovies.vote_count}
              </span>{" "}
              Người Đánh Giá
            </p>
          </div>
          <div className="lg:grid gap-y-1 mb-2">
            <p>
              <span className="text-sm font-bold text-white">Quốc gia: </span>
              {countries.join(", ")}
            </p>
            <p>
              <span className="text-sm font-bold text-white">Thời lượng: </span>
              {strTotalMinutes}
            </p>
          </div>
        </div>
        <div className="border-t border-[#ffffff13]"></div>
        <div className="mt-2">
          <div>
            <h3 className="text-primary text-base font-semibold mt-2 mb-3">
              Nội dung phim
            </h3>
          </div>
          <h2 className="flex justify-center items-center italic mb-3">
            {String.fromCharCode(34)}
            {detailsMovies.tagline}
            {String.fromCharCode(34)}
          </h2>
          <div className="leading-[22px]">{detailsMovies.overview}</div>
        </div>

        <div className="mt-5">
          {isTrailerVisible && (detailsMovies.videos ? renderTrailer() : null)}
        </div>
      </div>
    </div>
  );
};

export default MoviesDetailsPage;
