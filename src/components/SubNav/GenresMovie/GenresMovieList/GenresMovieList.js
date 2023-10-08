import React from "react";
import GenresMovieItem from "../GenresMovieItem/GenresMovieItem";

const GenresMovieList = () => {
  return (
    <div className="columns-2">
      <GenresMovieItem title="Phim Hành Động" path="/phim-hanh-dong" />
      <GenresMovieItem title="Phim Phiêu Lưu" path="/phim-phieu-luu" />
      <GenresMovieItem title="Phim Hoạt Hình" path="/phim-hoat-hinh" />
      <GenresMovieItem title="Phim Hài" path="/phim-hai" />
      <GenresMovieItem title="Phim Hình Sự" path="/phim-hinh-su" />
      <GenresMovieItem title="Phim Tài Liệu" path="/phim-tai-lieu" />
      <GenresMovieItem title="Phim Gia Đình" path="/phim-gia-dinh" />
      <GenresMovieItem title="Phim Kinh Dị" path="/phim-kinh-di" />
      <GenresMovieItem title="Phim Ca Nhạc" path="/phim-ca-nhac" />
      <GenresMovieItem title="Phim Lãng Mạn" path="/phim-lang-man" />
      <GenresMovieItem
        title="Phim Khoa Học Viễn Tưởng"
        path="/phim-khoa-hoc-vien-tuong"
      />
      <GenresMovieItem title="Phim Gây Cấn" path="/phim-gay-can" />
      <GenresMovieItem title="Phim Chiến Tranh" path="/phim-chien-tranh" />
    </div>
  );
};

export default GenresMovieList;
