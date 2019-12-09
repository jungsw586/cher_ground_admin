import React from "react";
import RetailerDetailMemo from "../widget/RetailerDetailMemo";
import RetailerDetailInfo from "../widget/RetailerDetailInfo";

const RetailerInfoCard: React.FunctionComponent = () => {
  return (
    <>
      <RetailerDetailMemo />
      <RetailerDetailInfo />
    </>
  );
};

export default RetailerInfoCard;
