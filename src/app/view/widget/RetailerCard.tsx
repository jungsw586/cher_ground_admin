import React from "react";
import styled from "styled-components";
import FlexLayout from "./FlexLayout";
import ButtonRetailDetail from "./ButtonRetailDetail";

interface RetailerCardProps {
  id: any;
  title: string;
  author?: string;
  description?: string;
  goRetailerDetail: any;
}

const RetailerCard: React.FunctionComponent<RetailerCardProps> = props => {
  return (
    <RetailerCardLayout>
      <div className="inner-container">
        <div className="title Small-Selection">{props.title}</div>
        <div className="author Micro-Label-Idle">{`memo by ${props.author}`}</div>
        <div className="description">{props.description}</div>
        <FlexLayout justfy={"center"} align={"center"}>
          <div
            onClick={() => {
              props.goRetailerDetail(props.id);
            }}
          >
            <ButtonRetailDetail />
          </div>
        </FlexLayout>
      </div>
    </RetailerCardLayout>
  );
};

const RetailerCardLayout = styled.div`
  margin: 0 30px 30px 0;
  width: 200px;
  height: 178px;
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;

  .inner-container {
    margin: 20px 10px;
    width: 180px;
    height: 138px;
  }
  .title {
    font-family: NanumSquare_acB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.32px;
    margin-bottom: 26px;
  }

  .author {
    margin-bottom: 5px;
    font-family: NanumSquare_acB;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #656667;
  }

  .description {
    margin-bottom: 17px;
    font-family: NanumSquare_acR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.33px;
  }
`;

export default RetailerCard;
