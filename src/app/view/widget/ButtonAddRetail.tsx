import React from "react";
import FlexLayout from "./FlexLayout";
import ButtonNormal from "./ButtonNormal";

const ButtonAddRetail: React.FunctionComponent = props => {
  return (
    <FlexLayout padding={"0 30px"} justfy={"flex-end"} align={"center"}>
      <ButtonNormal mode={"primary"} active={true} btnContent={"업체추가"} />
    </FlexLayout>
  );
};

export default ButtonAddRetail;
