import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import Image from "../../components/Image/Image";

const API_KEY = "7231178ff0746cf499bae0fd41f7ace1";
const BASE_URL = "https://api.themoviedb.org/3";
const getMoviesTrending = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
      params: {
        api_key: API_KEY,
        // language: "vi-VN",
      },
    });
    return response.data;
  } catch (error) {
    console.log("Get Trending API error ", error);
  }
};

// const CustomNavigation = ({ onNext, onPrev }) => {
//   return (
//     <div className="text-white justify-between items-center relative z-10 text-7xl opacity-60">
//       <div
//         className="custom-next-button absolute left-0 bottom-[40px]"
//         onClick={onNext}
//       >
//         <FontAwesomeIcon
//           className="text-primary hover:opacity-60"
//           icon={faCaretLeft}
//         />
//       </div>
//       <div
//         className="custom-prev-button absolute right-0 bottom-[40px]"
//         onClick={onPrev}
//       >
//         <FontAwesomeIcon
//           className="text-primary hover:opacity-40"
//           icon={faCaretRight}
//         />
//       </div>
//     </div>
//   );
// };

const TrendingMoviesSlider = ({ title }) => {
  const [moviesTrending, setMoviesTrending] = useState([]);

  useEffect(() => {
    getMoviesTrending().then((movies) => {
      setMoviesTrending(movies.results);
    });
  }, []);

  // const swiperRef = useRef(null);

  // const goNext = () => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     swiperRef.current.swiper.slideNext();
  //   }
  // };

  // const goPrev = () => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     swiperRef.current.swiper.slidePrev();
  //   }
  // };

  const breakpoints = {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
    980: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 15,
    },
  };

  return (
    <div className="relative max-w-[90rem] mx-auto pt-16">
      <h1 className="font-extrabold text-transparent bg-clip-text bg-primary text-sm sm:text-lg lg:text-2xl py-4 mt-5 uppercase select-none cursor-text font-roboto">
        {title}
      </h1>

      <Swiper
        // ref={swiperRef}
        breakpoints={breakpoints}
        modules={[Autoplay, Navigation, A11y]}
        navigation
        // ={{
        //   nextEl: ".custom-next-button",
        //   prevEl: ".custom-prev-button",
        // }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {moviesTrending.length > 0 &&
          moviesTrending.map((movie, index) => (
            <SwiperSlide key={movie.id}>
              <Link
                to={`/movie/${movie.id}`}
                className="relative overflow-hidden select-none origin-center w-full cursor-pointer group"
              >
                <Image
                  className="overflow-hidden max-[480px]:w-full w-full object-cover transition-all rounded-t lg:rounded"
                  src={`https://image.tmdb.org/t/p/w500${
                    movie.backdrop_path || movie.poster_path
                  }`}
                  alt={movie.title || movie.name}
                />
                <div className="lg:absolute p-2 lg:p-3 bg-[rgba(0,0,0,.7)] left-0 right-0 bottom-0 text-white w-full rounded-b">
                  <p className="w-44 lg:w-60 overflow-hidden whitespace-nowrap text-ellipsis">
                    {movie.original_title || movie.name}
                  </p>
                </div>
                <FontAwesomeIcon
                  className="absolute hidden lg:block h-[50px] w-[50px] top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] scale-150 transition-all text-primary bg-white rounded-full opacity-0 group-hover:scale-100 group-hover:opacity-80"
                  icon={faCirclePlay}
                />
              </Link>
            </SwiperSlide>
          ))}
        {/* <CustomNavigation onNext={goNext} onPrev={goPrev} /> */}
      </Swiper>
    </div>
  );
};

export default TrendingMoviesSlider;
