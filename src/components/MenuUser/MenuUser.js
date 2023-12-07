import React from "react";
import { CiDark } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

import Image from "../Image/Image";

const MenuUser = ({ data, handleSignOut }) => {
  return (
    <div className=" text-[#e2e8f0]">
      {/* info user */}
      <div className="flex items-center p-3 border-b border-dashed border-slate-600">
        <Image
          className="w-9 h-9 object-cover rounded-lg mr-3"
          src={data.picture}
          alt={data.name}
        />
        <div className="flex flex-col justify-between text-sm">
          <p className="font-semibold text-sky-500">{data.name}</p>
          <p className="text-[#999]">{data.email}</p>
        </div>
      </div>
      {/* dark mode */}
      <div className="px-3 py-4 border-b border-dashed border-slate-600 hover:cursor-pointer hover:bg-slate-600/30">
        <div className="flex items-center">
          <CiDark size="20px" className="mr-3" />
          <p className="text-[15px]">Chế độ tối</p>
        </div>
      </div>
      {/* Logout */}
      <div
        className="px-3 py-4 text-[15px] hover:cursor-pointer hover:bg-slate-600/30 hover:rounded-bl-lg hover:rounded-br-lg"
        onClick={() => handleSignOut()}
      >
        <div className="flex items-center">
          <IoIosLogOut size="20px" className="mr-3" />
          <p className="text-[15px]">Đăng xuất</p>
        </div>
      </div>
    </div>
  );
};

export default MenuUser;
