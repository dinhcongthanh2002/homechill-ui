import React from "react";

import TrendingMoviesSlider from "../../components/Contents/TrendingMoviesSlider";
import MoviesList from "../../components/Contents/MoviesList";

const HomePage = () => {
  return (
    <div className="lg:max-w-[90rem] mx-auto px-2 lg:px-4">
      <TrendingMoviesSlider title="Phim thịnh hành" />
      <MoviesList title="Phim hành động" genres="28" params="/phim-hanh-dong" />
      <MoviesList title="Phim kinh dị" genres="27" params="/phim-kinh-di" />
      <MoviesList
        title="Phim tình cảm"
        genres="10749"
        params="/phim-lang-man"
      />
      <MoviesList
        title="Phim mới sắp chiếu"
        path="movie/upcoming"
        params="/phim-sap-chieu"
      />
    </div>
  );
};

export default HomePage;
