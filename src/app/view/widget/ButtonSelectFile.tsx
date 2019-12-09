import React from "react";
import ButtonNormal from "../widget/ButtonNormal";
const Search_IMG = require("app/img/fileDownload.svg");

const ButtonSelectFile: React.FunctionComponent = () => {
  return (
    <ButtonNormal
      imgSrc={Search_IMG}
      size={"large"}
      mode={"secondary"}
      selectMode={true}
      btnContent={"파일선택"}
    ></ButtonNormal>
  );
};

export default ButtonSelectFile;
