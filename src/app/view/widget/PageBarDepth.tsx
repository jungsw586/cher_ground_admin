import React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router";
const BackBtn_IMG = require("app/img/web-back-arrow-sup-gr-80.svg");

interface PageBarDepthProps extends RouteComponentProps {
  title: string;
}

const PageBarDepth: React.FunctionComponent<PageBarDepthProps> = props => {
  return (
    <PageBarDepthLayout>
      <div
        className="back-btn-box"
        onClick={() => props.history.push("/retailer")}
      >
        <img src={BackBtn_IMG} />
        <div className="btn-description">Back</div>
      </div>
      <div className="title Large-Web-Title">{props.title}</div>
    </PageBarDepthLayout>
  );
};

const PageBarDepthLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
  width: 100%;
  height: 82px;
  border-bottom: 1px solid #e8e8e8;
  .title {
    margin-left: 46px;
    font-family: NanumSquare_acEB;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  }

  .back-btn-box {
    display: fex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .back-btn-box img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  .btn-description {
    font-family: NanumSquare_acB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #656667;
  }
`;
export default PageBarDepth;
