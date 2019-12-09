import React from "react";
import Sellup_IMG from "app/img/sell-up-logo-white.svg";
import styled from "styled-components";

const NavTopBar: React.FunctionComponent = () => {
  return (
    <NavTopBarLayout>
      <div className="navTop-container">
        <div className="logo-box">
          <img src={Sellup_IMG} alt="sell-up-img" />
        </div>
        <div className="userInfo-box">
          <div className="user-symbol">
            <a>A</a>
          </div>
          <div className="user-name">Admin</div>
        </div>
      </div>
    </NavTopBarLayout>
  );
};

const NavTopBarLayout = styled.div`
  .navTop-container {
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #1c242d;
    padding: 15px 0;
  }

  .logo-box img {
    width: 105px;
    height: 50px;
    object-fit: contain;
    margin-left: 30px;
  }

  .userInfo-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 0;
    margin-right: 60px;
    width: 95px;
    height: 36px;
  }

  .user-symbol {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background-color: #4865f3;
  }

  .user-symbol a {
    width: 11px;
    height: 18px;
    text-align: center;
    font-family: NanumSquare_acB;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  }

  .user-name {
    width: 49px;
    height: 18px;
    font-family: NanumSquare_acB;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  }
`;

export default NavTopBar;
