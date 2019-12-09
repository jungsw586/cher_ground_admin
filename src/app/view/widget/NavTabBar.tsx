import React from "react";
import styled from "styled-components";

interface NavTabBarProps {
  content?: string;
  active?: boolean;
}

const NavTabBar: React.FunctionComponent<NavTabBarProps> = props => {
  return (
    <NavTabBarLayout active={props.active}>{props.content}</NavTabBarLayout>
  );
};

const NavTabBarLayout = styled.div<NavTabBarProps>`
  width: 80px;
  height: 24px;
  font-family: NanumSquare_acB;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${props => (props.active ? "#000" : "#848485")};
  border-bottom: ${props =>
    props.active ? "2px solid #f44016" : "2px solid #d0d1d1"};
  cursor: pointer;
`;

export default NavTabBar;
