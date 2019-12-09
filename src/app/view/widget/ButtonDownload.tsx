import React from "react";
import ButtonNormal from "../widget/ButtonNormal";
const Download_IMG = require("app/img/download.svg");

interface ButtonDownloadProps {
  active: boolean;
}

const ButtonDownload: React.FunctionComponent<ButtonDownloadProps> = props => {
  return (
    <ButtonNormal
      imgSrc={Download_IMG}
      size={"large"}
      mode={"primary"}
      active={props.active}
      btnContent={"내려받기"}
    ></ButtonNormal>
  );
};

export default ButtonDownload;
