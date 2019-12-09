import React from "react";
import ButtonNormal from "../widget/ButtonNormal";
const Search_IMG = require("app/img/whiteSearchIcon.svg");

interface ButtonSearchProps {
  mode: string;
  active: boolean;
  selectMode: boolean;
}

const ButtonSearch: React.FunctionComponent<ButtonSearchProps> = props => {
  return (
    <ButtonNormal
      imgSrc={Search_IMG}
      size={"large"}
      mode={props.mode}
      active={props.active}
      selectMode={props.selectMode}
      btnContent={"검색"}
    ></ButtonNormal>
  );
};

export default ButtonSearch;
