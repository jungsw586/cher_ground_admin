import React from "react";
import styled from "styled-components";
const Dropdown_IMG = require("app/img/web-dropdown-down.svg");

const ButtonSort: React.FunctionComponent = () => {
  return (
    <ButtonSortLayout>
      <div className="content">정렬</div>
      <img src={Dropdown_IMG} />
    </ButtonSortLayout>
  );
};

const ButtonSortLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  height: 36px;
  border-radius: 2px;
  border: solid 1px #d0d1d1;
  padding: 8px 10px 8px 15px;
  cursor: pointer;

  .content {
    font-family: NanumSquare_acB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #848485;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export default ButtonSort;
