import React from "react";
import FlexLayout from "./FlexLayout";
import ButtonNormal from "./ButtonNormal";

const ButtonRetailDetail: React.FunctionComponent = () => {
  return (
    <FlexLayout justfy={"center"} align={"center"}>
      <ButtonNormal
        size={"wide"}
        mode={"secondary"}
        selectMode={true}
        active={true}
        btnContent={"업체상세보기"}
      />
    </FlexLayout>
  );
};

export default ButtonRetailDetail;
