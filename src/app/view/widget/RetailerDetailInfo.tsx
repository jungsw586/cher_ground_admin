import React from "react";
import styled from "styled-components";
import RetailerInfoOrderFormatTab from "./RetailerInfoOrderFormatTab";
import RetailerInfoRTNameTab from "./RetailerInfoRTNameTab";
import RetailerInfoAddressTab from "./RetailerInfoAddressTab";
import RetailerInfoNumberTab from "./RetailerInfoNumberTab";
import RetailerInfoEmailTab from "./RetailerInfoEmailTab";
import RetailerInfoCeoNameTab from "./RetailerInfoCeoNameTab";
import RetailerInfoRegisterTab from "./RetailerInfoRegisterTab";
import RetailerInfoBankInfoTab from "./RetailerInfoBankInfoTab";

const RetailerDetailInfo: React.FunctionComponent = () => {
  return (
    <RetailerDetailInfoLayout>
      <div className="retailerinfo-title">
        <div>업체 정보</div>
      </div>
      <RetailerInfoOrderFormatTab currentFormatName={"Format 1"} />
      <div className="under-bar"></div>
      <RetailerInfoRTNameTab currentRTName={"Cher_Ground"} />
      <div className="under-bar"></div>
      <RetailerInfoAddressTab
        officeAddress={"서울"}
        warehouseAddress={"동대문"}
      />
      <div className="under-bar"></div>
      <RetailerInfoNumberTab
        officeNumber={"123-123-123"}
        ceoNumber={"123-123-123"}
      />
      <div className="under-bar"></div>
      <RetailerInfoEmailTab
        orderEmail={"abcd@cherground.com"}
        ceoEmail={"abcd@cherground.com"}
      />
      <div className="under-bar"></div>
      <RetailerInfoCeoNameTab ceoName={"CHER G"} />
      <div className="under-bar"></div>
      <RetailerInfoRegisterTab
        registerName={"cher_ground"}
        registerNumber={"123-123-123-123"}
      />
      <div className="under-bar"></div>
      <RetailerInfoBankInfoTab
        bankName={"국민은행"}
        bankAccount={"123-123123-123"}
        accountName={"CHER"}
        memo={"hello"}
      />
    </RetailerDetailInfoLayout>
  );
};

const RetailerDetailInfoLayout = styled.div`
  margin: 0 0 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 953px;
  opacity: 0.9;
  border-radius: 4px;
  border: solid 1px #e8e8e8;

  .under-bar {
    z-index: 10;
    width: 893px;
    height: 1px;
    background-color: #e0e0e1;
  }

  .retailerinfo-title {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .retailerinfo-title div {
    margin: 30px 0 30px 30px;
    font-family: NanumSquare_acEB;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  }
`;

export default RetailerDetailInfo;
