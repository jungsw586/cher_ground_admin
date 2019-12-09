import React from "react";
import ButtonNormal from "../widget/ButtonNormal";
const Search_IMG = require("app/img/filterIdle.svg");

const ButtonFilter: React.FunctionComponent = () => {
  return (
    <ButtonNormal
      imgSrc={Search_IMG}
      size={""}
      mode={"secondary"}
      selectMode={false}
      btnContent={"필터"}
    ></ButtonNormal>
  );
};

export default ButtonFilter;
