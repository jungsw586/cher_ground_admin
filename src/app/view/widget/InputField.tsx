import React from "react";
import styled from "styled-components";

interface InputFieldProps {
  size?: string;
  placeholder?: string;
  labelName?: string;
}

const InputField: React.FunctionComponent<InputFieldProps> = props => {
  return (
    <InputFieldLayout size={props.size}>
      <div className="labelbox">
        <div className="label">{props.labelName}</div>
      </div>
      <input className="inputbox" type="text" placeholder={props.placeholder} />
    </InputFieldLayout>
  );
};

const InputFieldLayout = styled.div<InputFieldProps>`
  display: flex;
  flex-direction: column;
  width: ${props => {
    console.log(props.size);
    if (props.size === "small") {
      return "240px";
    } else if (props.size === "medium") {
      return "340px";
    } else if (props.size === "large") {
      return "490px";
    }
  }};
  margin-bottom: 20px;

  .labelbox {
    padding: 0 0 5px 10px;
    width: 100%;
  }
  .label {
    width: 330px;
    height: 13px;
    font-family: NanumSquare_acB;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #656667;
  }
  .inputbox {
    width: ${props => {
      console.log(props.size);
      if (props.size === "small") {
        return "240px";
      } else if (props.size === "medium") {
        return "340px";
      } else if (props.size === "large") {
        return "490px";
      }
    }};
    padding: 0 10px;
    height: 46px;
    border-radius: 2px;
    background-color: #f6f6f6;
    border-style: none;
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

export default InputField;
