import React from "react";
import styled from "styled-components";
import NavPageBarLeftSide from "./NavPageBarLeftSide";
import ButtonNormal from "./ButtonNormal";

interface NavPageBarProps {
  content1: string;
  content2?: string;
}

const NavPageBar: React.FunctionComponent<NavPageBarProps> = props => {
  return (
    <NavPageBarLayout>
      <div className="navPageBar-container">
        <NavPageBarLeftSide
          content1={props.content1}
          content2={props.content2}
        />

        <div className="navPage-rightside">
          <ButtonNormal mode={"secondary"} btnContent={"Text"} />
          <ButtonNormal mode={"primary"} active={true} btnContent={"Text"} />
        </div>
      </div>
    </NavPageBarLayout>
  );
};

const NavPageBarLayout = styled.div`
  .navPageBar-container {
    display: flex;
    justify-content: space-between;
    width: 1210px;
    height: 82px;
    padding: 0 30px;
  }

  .navPage-rightside {
    display: flex;
    justify-content: space-between;
    width: 190px;
    margin-top: 23px;
    margin-bottom: 23px;
  }
`;

export default NavPageBar;
