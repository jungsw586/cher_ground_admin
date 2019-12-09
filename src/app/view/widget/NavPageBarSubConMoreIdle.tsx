import React from "react";
import styled from "styled-components";
import NavPageBarLeftSide from "./NavPageBarLeftSide";
const MoreIdle_IMG = require("app/img/more-idle.svg");

interface NavPageBarProps {
  content1: string;
  content2?: string;
  subContent?: string;
}

const NavPageBarSubConMoreIdle: React.FunctionComponent<NavPageBarProps> = props => {
  return (
    <NavPageBarSubConMoreIdleLayout>
      <div className="navPageBar-container">
        <div className="navPageBar-leftside">
          <NavPageBarLeftSide
            content1={props.content1}
            content2={props.content2}
          />
          <div className="sub-content">{props.subContent}</div>
        </div>

        <div className="navPage-rightside">
          <img src={MoreIdle_IMG} className="more-idle" />
        </div>
      </div>
    </NavPageBarSubConMoreIdleLayout>
  );
};

const NavPageBarSubConMoreIdleLayout = styled.div`
  .navPageBar-container {
    display: flex;
    justify-content: space-between;
    width: 1210px;
    height: 82px;
    padding: 0 30px;
  }
  .navPageBar-leftside {
    display: flex;
    justify-content: space-around;
  }
  .sub-content {
    font-family: NanumSquare_acB;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--sup-gr);
    margin: 35px 0 34px 30px;
  }
  .navPage-rightside {
    display: flex;
    justify-content: center;
  }
  .more-idle {
    width: 24px;
    height: 24px;
    margin: 29px 20px;
  }
`;

export default NavPageBarSubConMoreIdle;
