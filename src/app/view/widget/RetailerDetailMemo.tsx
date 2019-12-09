import React from "react";
import styled from "styled-components";
const RightArrow_IMG = require("app/img/right-arrow-idle.svg");

const RetailerDetailMemoBox: React.FunctionComponent = () => {
  return (
    <RetailerDetailMemoBoxLayout>
      <div className="memo-title-box">
        <div className="title">메모</div>
        <div className="edit-date">
          Admin님이 어제 오후 5:15에 마지막으로 수정했습니다.
        </div>
      </div>
      <div className="memo-detail-box">
        <div className="memo-description">안녕하세요</div>
        <img src={RightArrow_IMG} />
      </div>
    </RetailerDetailMemoBoxLayout>
  );
};

const RetailerDetailMemoBoxLayout = styled.div`
  margin: 30px 0 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 953px;
  opacity: 0.9;
  border-radius: 4px;
  border: solid 1px #e8e8e8;

  .memo-title-box {
    width: 100%;
  }

  .title {
    opacity: 0.9;
    font-family: NanumSquare_acEB;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
    margin: 30px 0 0 30px;
  }

  .edit-date {
    font-family: NanumSquare_acB;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #656667;
    margin: 9px 0 10px 30px;
  }

  .memo-detail-box {
    padding: 28px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height 81px;
  }

  .memo-detail-box img {
    width: 24px;
    height: 24px;
  }

  .memo-description {
    opacity: 0.9;
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

export default RetailerDetailMemoBox;
