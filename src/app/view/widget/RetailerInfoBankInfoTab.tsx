import React from "react";
const RightArrow_IMG = require("app/img/right-arrow-idle.svg");
import RetailerInfoBoxSubCon from "./RetailerInfoBoxSubCon";
import RetailerInfoBoxTitleConLayout from "./RetailerInfoBoxTitleConLayout";

interface RetailerInfoBankInfoTabProps {
  bankName: string;
  bankAccount: string;
  accountName: string;
  memo: string;
}

const RetailerInfoBankInfoTab: React.FunctionComponent<RetailerInfoBankInfoTabProps> = props => {
  return (
    <RetailerInfoBoxTitleConLayout>
      <div className="title-box">
        <div className="title-content">계좌 정보</div>
      </div>
      <div className="content-box">
        <RetailerInfoBoxSubCon subTitle={"은행명"} content={props.bankName} />
        <RetailerInfoBoxSubCon
          subTitle={"계좌번호"}
          content={props.bankAccount}
        />
        <RetailerInfoBoxSubCon
          subTitle={"예금주"}
          content={props.accountName}
        />
        <RetailerInfoBoxSubCon subTitle={"적요"} content={props.memo} />
      </div>
      <img src={RightArrow_IMG} />
    </RetailerInfoBoxTitleConLayout>
  );
};

export default RetailerInfoBankInfoTab;
