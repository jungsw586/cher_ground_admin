import React from "react";
import ButtonNormal from "../widget/ButtonNormal";
const Search_IMG = require("app/img/cycleIcon.svg");

const ButtonOverWrite: React.FunctionComponent = () => {
  return (
    <ButtonNormal
      imgSrc={Search_IMG}
      size={"large"}
      mode={"secondary"}
      selectMode={true}
      btnContent={"덮어쓰기"}
    ></ButtonNormal>
  );
};

export default ButtonOverWrite;
