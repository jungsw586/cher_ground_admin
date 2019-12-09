import React from "react";
import ButtonNormal from "../widget/ButtonNormal";
const Search_IMG = require("app/img/circlePlus.svg");

const ButtonAdd: React.FunctionComponent = () => {
  return (
    <ButtonNormal
      imgSrc={Search_IMG}
      size={"large"}
      mode={"secondary"}
      selectMode={true}
      btnContent={"추가"}
    ></ButtonNormal>
  );
};

export default ButtonAdd;
