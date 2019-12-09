import React from "react";
import styled from "styled-components";
const DropDown_IMG = require("app/img/web-pagination-down.svg");
const LeftArrow_IMG = require("app/img/left-arrow-disabled.svg");
const RightArrow_IMG = require("app/img/right-arrow-idle.svg");

interface WebPagenationProps {
  offsetNumber?: number;
  limitNumber?: number;
  totalPage?: number;
}

const WebPagenation: React.FunctionComponent<WebPagenationProps> = props => {
  return (
    <WebPagenationLayout>
      <div className="pagenationRange">
        <div className="currentPage">
          {props.offsetNumber}-{props.limitNumber}
        </div>
        <img src={DropDown_IMG} className="buttonDown" />
      </div>
      <div className="pagenationTotal">
        <div className="totalPage">의 {props.totalPage}</div>
      </div>

      <div className="pagenationBtnContainer">
        <div className="buttonLeftArrow">
          <img src={LeftArrow_IMG} className="buttonPrev" />
        </div>

        <div className="buttonRightArrow">
          <img src={RightArrow_IMG} className="buttonNext" />
        </div>
      </div>
    </WebPagenationLayout>
  );
};

const WebPagenationLayout = styled.div`
  width: 184px;
  height: 30px;
  display: flex;
  justify-content: space-between;

  .pagenationRange {
    display: flex;
    margin-top: 8px;
    margin-bottom: 6px;
  }
  .currentPage {
    color: #064679;
    font-size: 14px;
  }
  .buttonDown {
    width: 18px;
    height: 18px;
    object-fit: contain;
    margin-right: 10px;
  }
  .totalPage {
    font-family: NanumSquare_acB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    margin-right: 28px;
    margin-top: 6px;
    margin-bottom: 6px;
  }
  .pagenationBtnContainer {
    display: flex;
    justify-content: center;
    width: 60px;
    height: 30px;
    border-radius: 2px;
  }

  .buttonLeftArrow {
    border: solid 1px #e0e0e1;
    border-radius: 2px 0 0 2px;
  }
  .buttonRightArrow {
    border-top: solid 1px #e0e0e1;
    border-right: solid 1px #e0e0e1;
    border-bottom: solid 1px #e0e0e1;
    border-radius: 0 2px 2px 0;
  }
  .buttonPrev {
    width: 15px;
    height: 15px;
    object-fit: contain;
    margin: 8px 8px 7px 7px;
    border-radius: ;
  }
  .buttonNext {
    width: 15px;
    height: 15px;
    object-fit: contain;
    margin: 8px 8px 7px 7px;
  }
`;
export default WebPagenation;
