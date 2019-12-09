import React from "react";
const RightArrow_IMG = require("app/img/right-arrow-idle.svg");
import RetailerInfoBoxSubCon from "./RetailerInfoBoxSubCon";
import RetailerInfoBoxTitleConLayout from "./RetailerInfoBoxTitleConLayout";

interface RetailerInfoEmailTabProps {
  orderEmail: string;
  ceoEmail: string;
}

const RetailerInfoEmailTab: React.FunctionComponent<RetailerInfoEmailTabProps> = props => {
  return (
    <RetailerInfoBoxTitleConLayout>
      <div className="title-box">
        <div className="title-content">이메일</div>
      </div>
      <div className="content-box">
        <RetailerInfoBoxSubCon subTitle={"주문"} content={props.orderEmail} />
        <RetailerInfoBoxSubCon subTitle={"대표"} content={props.ceoEmail} />
      </div>
      <img src={RightArrow_IMG} />
    </RetailerInfoBoxTitleConLayout>
  );
};

export default RetailerInfoEmailTab;
