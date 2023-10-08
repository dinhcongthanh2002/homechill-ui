import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless";

import * as searchService from "../../services/searchService";
import { Wrapper as PopperWrapper } from "../Popper";
import MovieItem from "../MovieItem/MovieItem";
import { useDebounce } from "../../hooks";

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);

  const debounced = useDebounce(searchValue, 500);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await searchService.getSearchResult(debounced);
      return setSearchResult(result.results);
    };
    fetchApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <Tippy
      visible={showResult && searchResult.length > 0}
      interactive
      placement="bottom"
      render={(attrs) => (
        <div
          className="lg:text-white w-[500px] ml-[-4px] lg:w-64"
          tabIndex="-1"
        >
          <PopperWrapper>
            <h4 className="text-lg lg:text-xl font-semibold px-2 pb-1 text-primary select-none">
              Phim
            </h4>
            <div className="max-h-72 lg:max-h-[600px] md:max-h-[600px] overflow-y-auto">
              {searchResult.length > 0 &&
                searchResult.map((movie) => (
                  <MovieItem key={movie.id} data={movie} />
                ))}
            </div>
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className="flex justify-between items-center w-40 md:w-72 lg:w-64 text-white border-white border-[1px] border-solid rounded">
        <input
          className="px-1 py-2 lg:mr-3 lg:px-2 lg:py-2 w-32 lg:w-full"
          type="text"
          placeholder="Tìm tên phim..."
          onChange={(e) => {
            e.target.value = e.target.value.trimStart();
            setSearchValue(e.target.value);
          }}
          onFocus={(e) => setShowResult(true)}
        />
        <div className="cursor-pointer">
          <FontAwesomeIcon
            className="lg:w-[20px] lg:h-[20px] font-bold mr-2 lg:mr-2 md:mr-2"
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
    </Tippy>
  );
};

export default Search;
