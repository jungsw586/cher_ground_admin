import React from "react";
const RightArrow_IMG = require("app/img/right-arrow-idle.svg");
import RetailerInfoBoxSubCon from "./RetailerInfoBoxSubCon";
import RetailerInfoBoxTitleConLayout from "./RetailerInfoBoxTitleConLayout";

interface RetailerInfoAddressTabProps {
  officeAddress: string;
  warehouseAddress: string;
}

const RetailerInfoAddressTab: React.FunctionComponent<RetailerInfoAddressTabProps> = props => {
  return (
    <RetailerInfoBoxTitleConLayout>
      <div className="title-box">
        <div className="title-content">주소</div>
      </div>
      <div className="content-box">
        <RetailerInfoBoxSubCon
          subTitle={"사무실"}
          content={props.officeAddress}
        />
        <RetailerInfoBoxSubCon
          subTitle={"물류"}
          content={props.warehouseAddress}
        />
      </div>
      <img src={RightArrow_IMG} />
    </RetailerInfoBoxTitleConLayout>
  );
};

export default RetailerInfoAddressTab;
