import React from "react";
import styled from "styled-components";
const Option_IMG = require("app/img/more-idle.svg");
const Option_selected_IMG = require("app/img/more-selected.svg");

interface ButtonOptionProps {
  active: boolean;
}

const ButtonOption: React.FunctionComponent<ButtonOptionProps> = props => {
  return (
    <ButtonOptionLayout active={props.active}>
      {!props.active ? (
        <img src={Option_IMG} />
      ) : (
        <img src={Option_selected_IMG} />
      )}
    </ButtonOptionLayout>
  );
};

const ButtonOptionLayout = styled.div<ButtonOptionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  img {
    width: ${props => (!props.active ? "24px" : "auto")};
    height: ${props => (!props.active ? "24px" : "auto")};
    cursor: pointer;
  }
`;

export default ButtonOption;
