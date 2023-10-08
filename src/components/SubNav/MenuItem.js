import React from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import { Wrapper } from "../Popper";
import GenresMovieList from "./GenresMovie/GenresMovieList/GenresMovieList";

const MenuItem = ({ name, className, tippy }) => {
  return tippy ? (
    //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive
        placement="bottom-start"
        render={(attrs) => (
          <div
            className="w-[350px] mt-[10px] normal-case text-[15px] font-light"
            tabIndex="-1"
            {...attrs}
          >
            <Wrapper>
              <GenresMovieList />
            </Wrapper>
          </div>
        )}
      >
        <div className={`p-1 m-2 hover:text-primary ${className}`}>{name}</div>
      </HeadlessTippy>
    </div>
  ) : (
    <div className={`p-1 m-2 hover:text-primary ${className}`}>{name}</div>
  );
};

export default MenuItem;
