import React from "react";
const RightArrow_IMG = require("app/img/right-arrow-idle.svg");
import RetailerInfoBoxSubCon from "./RetailerInfoBoxSubCon";
import RetailerInfoBoxTitleConLayout from "./RetailerInfoBoxTitleConLayout";

interface RetailerInfoNumberTabProps {
  officeNumber: string;
  ceoNumber: string;
}

const RetailerInfoNumberTab: React.FunctionComponent<RetailerInfoNumberTabProps> = props => {
  return (
    <RetailerInfoBoxTitleConLayout>
      <div className="title-box">
        <div className="title-content">전화번호</div>
      </div>
      <div className="content-box">
        <RetailerInfoBoxSubCon
          subTitle={"사무실"}
          content={props.officeNumber}
        />
        <RetailerInfoBoxSubCon subTitle={"대표"} content={props.ceoNumber} />
      </div>
      <img src={RightArrow_IMG} />
    </RetailerInfoBoxTitleConLayout>
  );
};

export default RetailerInfoNumberTab;
