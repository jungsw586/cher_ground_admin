import React from "react";
import styled from "styled-components";

interface ButtonNormalProps {
  imgSrc?: any;
  size?: string;
  mode?: string;
  selectMode?: boolean;
  active?: boolean;
  btnContent?: string;
}

const ButtonLayout: React.FunctionComponent<ButtonNormalProps> = props => {
  return (
    <ButtonNormalLayout
      size={props.size}
      mode={props.mode}
      selectMode={props.selectMode}
      active={props.active}
    >
      {props.imgSrc && <img src={props.imgSrc} />}
      <div className="btn-content">{props.btnContent}</div>
    </ButtonNormalLayout>
  );
};
const ButtonNormalLayout = styled.div<ButtonNormalProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => {
    if (props.size === "large") {
      return "120px";
    } else if (props.size === "wide") {
      return "180px";
    } else {
      return "90px";
    }
  }};
  height: ${props => {
    if (props.size === "large") {
      return "46px";
    } else if (props.size === "wide") {
      return "38px";
    } else {
      return "36px";
    }
  }};
  border-radius: 2px;
  background-color: ${props => {
    if (props.mode === "primary" && props.active) {
      return "#064679";
    } else if (props.mode === "primary" && !props.active) {
      return "#d0d1d1";
    } else {
      return "#fff";
    }
  }};
  border: ${props => (props.mode === "primary" ? "none" : "solid 1px #d0d1d1")};
  cursor: pointer;
  :hover {
    ${props => props.selectMode && "background-color:#e7ecf1"};
    ${props => props.selectMode && "border:none"};
  }
  .btn-content {
    font-family: NanumSquare_acB;
    font-size: ${props => (props.size === "wide" ? "12px" : "14px")};
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.33px;
    text-align: center;
    color: ${props => (props.mode === "primary" ? "#ffffff" : "#848485")};
  }

  img {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`;
export default ButtonLayout;
