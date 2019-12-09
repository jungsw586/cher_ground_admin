import React from "react";
const RightArrow_IMG = require("app/img/right-arrow-idle.svg");
import RetailerInfoBoxSubCon from "./RetailerInfoBoxSubCon";
import RetailerInfoBoxTitleConLayout from "./RetailerInfoBoxTitleConLayout";

interface RetailerInfoCeoNameTabProps {
  ceoName: string;
}

const RetailerInfoCeoNameTab: React.FunctionComponent<RetailerInfoCeoNameTabProps> = props => {
  return (
    <RetailerInfoBoxTitleConLayout>
      <div className="title-box">
        <div className="title-content">대표자</div>
      </div>
      <div className="content-box">
        <RetailerInfoBoxSubCon content={props.ceoName} />
      </div>
      <img src={RightArrow_IMG} />
    </RetailerInfoBoxTitleConLayout>
  );
};

export default RetailerInfoCeoNameTab;
