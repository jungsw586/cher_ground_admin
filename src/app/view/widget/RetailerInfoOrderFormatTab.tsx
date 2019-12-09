import React from "react";
const RightArrow_IMG = require("app/img/right-arrow-idle.svg");
import RetailerInfoBoxSubCon from "./RetailerInfoBoxSubCon";
import RetailerInfoBoxTitleConLayout from "./RetailerInfoBoxTitleConLayout";

interface RetailerInfoOrderFormatTabProps {
  currentFormatName: string;
}

const RetailerInfoOrderFormatTab: React.FunctionComponent<RetailerInfoOrderFormatTabProps> = props => {
  return (
    <RetailerInfoBoxTitleConLayout>
      <div className="title-box">
        <div className="title-content">주문서 양식</div>
      </div>
      <div className="content-box">
        <RetailerInfoBoxSubCon content={props.currentFormatName} />
      </div>
      <img src={RightArrow_IMG} />
    </RetailerInfoBoxTitleConLayout>
  );
};
export default RetailerInfoOrderFormatTab;
