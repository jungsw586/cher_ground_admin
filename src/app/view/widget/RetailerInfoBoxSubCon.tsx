import React from "react";
import styled from "styled-components";

interface RetailerInfoBoxSubConProps {
  subTitle?: string;
  content: string;
}

const RetailerInfoBoxSubCon: React.FunctionComponent<RetailerInfoBoxSubConProps> = props => {
  return (
    <RetailerInfoBoxSubConLayout>
      <div className="subTitle">{props.subTitle}</div>
      <div className="content">{props.content}</div>
    </RetailerInfoBoxSubConLayout>
  );
};

const RetailerInfoBoxSubConLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  .subTitle {
    width: 100px;
    font-family: NanumSquare_acR;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #656667;
  }
  .content {
    width: 550px;
    font-family: NanumSquare_acR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.32px;
    color: #000;
  }
`;

export default RetailerInfoBoxSubCon;
