import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className="bg-[#0d253f] w-full min-h-[200px] mt-8 text-white">
      <div className="lg:max-w-[90rem] mx-auto px-2 lg:px-4 lg:p-5">
        <div className="grid grid-cols-3 lg:grid-cols-4 min-h-[200px] gap-4 text-sm">
          <div className="hidden lg:block lg:ml-20">
            <Logo />
          </div>
          <div className="m-3">
            <p className="text-primary font-semibold text-[15px] mb-2 text-center">
              Phim mới
            </p>
            <div className="columns-2">
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="/phim-hanh-dong">Phim Hành Động</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="/phim-phieu-luu">Phim Phiêu Lưu</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="/phim-hoat-hinh">Phim Hoạt Hình</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="/phim-hai">Phim Hài</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="/phim-hinh-su">Phim Hình Sự</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="/phim-tai-lieu">Phim Tài Liệu</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="/phim-gia-dinh">Phim Gia Đình</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="/phim-kinh-di">Phim Kinh Dị</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="/phim-ca-nhac">Phim Ca Nhạc</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="/phim-lang-man">Phim Lãng Mạn</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="/phim-khoa-hoc-vien-tuong">
                  Phim Khoa Học Viễn Tưởng
                </Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="/phim-gay-can">Phim Gây Cấn</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="/phim-chien-tranh">Phim Chiến Tranh</Link>
              </div>
            </div>
          </div>
          <div className="m-3 text-center">
            <p className="text-primary font-semibold text-[15px] mb-2">
              Trợ giúp
            </p>
            <div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="">Hỏi đáp</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="">Liên hệ</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="">Tin tức</Link>
              </div>
            </div>
          </div>
          <div className="m-3 text-center">
            <p className="text-primary font-semibold text-[15px] mb-2">
              Thông tin
            </p>
            <div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="">Điều khoản sử dụng</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="">Chính sách riêng tư</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="">Khiếu nại bản quyền</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="">Về chúng tôi</Link>
              </div>
              <div className="py-1 mb-[2px] hover:text-primary">
                <Link to="/">
                  &copy; {new Date().getFullYear()} HomeChill.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
