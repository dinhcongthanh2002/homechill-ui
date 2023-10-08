import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";

import { Wrapper } from "../Popper";
import GenresMovieList from "../SubNav/GenresMovie/GenresMovieList/GenresMovieList";

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive
        visible={menuVisible}
        placement="bottom"
        render={(attrs) => (
          <div
            className="min-w-[320px] text-white mt-[9px] lg:mt-[10px] mx-[-4px] normal-case text-base font-light"
            tabIndex="-1"
            {...attrs}
          >
            <Wrapper>
              <GenresMovieList />
            </Wrapper>
          </div>
        )}
      >
        <div className="xl:hidden px-2" onClick={toggleMenu}>
          <FontAwesomeIcon className="text-white text-2xl" icon={faBars} />
        </div>
      </HeadlessTippy>
    </div>
  );
};

export default Menu;
