import React from "react";
import ButtonNormal from "../widget/ButtonNormal";

const ButtonAssignWS: React.FunctionComponent = () => {
  return (
    <ButtonNormal
      size={"large"}
      mode={"secondary"}
      selectMode={true}
      btnContent={"업체지정"}
    ></ButtonNormal>
  );
};

export default ButtonAssignWS;
