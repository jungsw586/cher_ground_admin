import React from "react";
const RightArrow_IMG = require("app/img/right-arrow-idle.svg");
import RetailerInfoBoxSubCon from "./RetailerInfoBoxSubCon";
import RetailerInfoBoxTitleConLayout from "./RetailerInfoBoxTitleConLayout";

interface RetailerInfoRegisterTabProps {
  registerName: string;
  registerNumber: string;
}

const RetailerInfoRegisterTab: React.FunctionComponent<RetailerInfoRegisterTabProps> = props => {
  return (
    <RetailerInfoBoxTitleConLayout>
      <div className="title-box">
        <div className="title-content">사업자 정보</div>
      </div>
      <div className="content-box">
        <RetailerInfoBoxSubCon
          subTitle={"사업자 명"}
          content={props.registerName}
        />
        <RetailerInfoBoxSubCon
          subTitle={"사업자 번호"}
          content={props.registerNumber}
        />
      </div>
      <img src={RightArrow_IMG} />
    </RetailerInfoBoxTitleConLayout>
  );
};

export default RetailerInfoRegisterTab;
