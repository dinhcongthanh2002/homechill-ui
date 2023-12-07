import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useState } from "react";
import Image from "../Image/Image";
import Tippy from "@tippyjs/react/headless";
import MenuUser from "../MenuUser/MenuUser";
import { IoMdArrowDropdown } from "react-icons/io";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        setUser(res.data);
        setIsLoggedIn(true);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="text-white">
      {!isLoggedIn && (
        <p
          className="cursor-pointer px-3 py-3 rounded bg-sky-500 hover:bg-sky-600"
          onClick={() => login()}
        >
          Đăng nhập
        </p>
      )}
      {isLoggedIn && (
        <div>
          {user && (
            <Tippy
              interactive
              hideOnClick="toggle"
              delay={[0, 700]}
              offset={[12, 8]}
              placement="bottom-end"
              render={(attrs) => (
                <div
                  className="min-w-[270px] bg-[#1e293b] h-auto rounded-lg shadow-3xl"
                  tabIndex="-1"
                  {...attrs}
                >
                  <MenuUser data={user} handleSignOut={handleSignOut} />
                </div>
              )}
            >
              <div className="flex items-center  cursor-pointer">
                <Image
                  className="w-8 h-8 object-cover rounded-full mr-2"
                  src={user.picture}
                />
                <p>{user.given_name}</p>
                <IoMdArrowDropdown />
              </div>
            </Tippy>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
