import React, { useState } from "react";
import styled from "styled-components";
import Search_ICON from "app/img/search-idle-sup-gr-50.svg";

interface SearchBarProps {
  category: string;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = props => {
  const [searchOn, handlerSearchBox] = useState(false);

  //const handlerSearchBox = () => {};

  return (
    <SearchBarContainerLayout>
      <div className="searchBar-container">
        <div className="search-box off">
          <img src={Search_ICON} />
          <input
            className="search-box"
            placeholder={`${props.category}검색`}
            type="text"
          />
        </div>
      </div>
    </SearchBarContainerLayout>
  );
};

const SearchBarContainerLayout = styled.div`
  .searchBar-container {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    width: 1210px;
    height: 46px;
  }

  .search-box {
    width: 650px;
    height: 46px;
    border-radius: 2px;
    background-color: #f6f6f6;
    border-style: none;
  }

  .off {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 30px;
    width: 650px;
    height: 46px;
    border-radius: 2px;
    background-color: #f6f6f6;
    border-style: none;
  }

  .off img {
    width: 24px;
    height: 24px;
    margin: 11px 10px;
    object-fit: contain;
  }

  .off .placeholder {
    width: 52px;
    height: 16px;
    font-family: NanumSquare_acB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #b2b2b2;
  }

  .off:hover {
    cursor: text;
  }
`;

export default SearchBar;
