import React from "react";
const RightArrow_IMG = require("app/img/right-arrow-idle.svg");
import RetailerInfoBoxSubCon from "./RetailerInfoBoxSubCon";
import RetailerInfoBoxTitleConLayout from "./RetailerInfoBoxTitleConLayout";

interface RetailerInfoRTNameTabProps {
  currentRTName: string;
}

const RetailerInfoRTNameTab: React.FunctionComponent<RetailerInfoRTNameTabProps> = props => {
  return (
    <RetailerInfoBoxTitleConLayout>
      <div className="title-box">
        <div className="title-content">업체명</div>
      </div>
      <div className="content-box">
        <RetailerInfoBoxSubCon content={props.currentRTName} />
      </div>
      <img src={RightArrow_IMG} />
    </RetailerInfoBoxTitleConLayout>
  );
};
export default RetailerInfoRTNameTab;
