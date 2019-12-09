import React from "react";
import styled from "styled-components";

interface NavPageBarLeftSideProps {
  content1: string;
  content2?: string;
}

const NavPageBarLeftSide: React.FunctionComponent<NavPageBarLeftSideProps> = props => {
  return (
    <NavPageBarLeftSideLayout>
      <div className="content-1 Large-Web-Title">{props.content1}</div>
      <div className="centerline" />
      <div className="content-2 Large-Web-Title">{props.content2}</div>
    </NavPageBarLeftSideLayout>
  );
};

const NavPageBarLeftSideLayout = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;

  .content-1 {
    font-family: NanumSquare_acEB;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--sup-blk);
  }
  .centerline {
    margin-left: 10px;
    width: 10px;
    border-left: 1px solid #d0d1d1;
  }
  .content-2 {
    font-family: NanumSquare_acEB;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--sup-blk);
  }
`;
export default NavPageBarLeftSide;
