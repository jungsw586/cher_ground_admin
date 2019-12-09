import React from "react";
import styled from "styled-components";
import MenuTab from "app/view/widget/MenuTab";
const Invoice_ICON = require("app/img/invoice-idle.svg");
const Transfer_ICON = require("app/img/transfer-idle.svg");
const Order_ICON = require("app/img/order-idle.svg");
const Retail_ICON = require("app/img/retail-idle.svg");
const Wholesale_ICON = require("app/img/wholesale-idle.svg");
const Building_ICON = require("app/img/building-idle.svg");
const Settings_ICON = require("app/img/settings-idle.svg");

const MenuBar: React.FunctionComponent = () => {
  return (
    <MenuBarLayout>
      <div className="menuBar-container">
        <div className="menuBar-content-box">
          <div className="tab-box">
            <MenuTab
              pathName={"invoice"}
              tabImg={Invoice_ICON}
              tabName={"청구서"}
            />
            <MenuTab
              pathName={"transfer"}
              tabImg={Transfer_ICON}
              tabName={"입출금"}
            />
            <MenuTab pathName={"order"} tabImg={Order_ICON} tabName={"주문"} />
            <MenuTab
              pathName={"retailer"}
              tabImg={Retail_ICON}
              tabName={"소매"}
            />
            <MenuTab
              pathName={"wholesaler"}
              tabImg={Wholesale_ICON}
              tabName={"도매"}
            />
            <MenuTab
              pathName={"building"}
              tabImg={Building_ICON}
              tabName={"상가"}
            />
          </div>
          <MenuTab
            pathName={"setting"}
            tabImg={Settings_ICON}
            tabName={"설정"}
          />
        </div>
      </div>
    </MenuBarLayout>
  );
};

const MenuBarLayout = styled.div`
  .menuBar-container {
    position: fixed;
    z-index: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 230px;
    height: 100vh;
    background-color: #f4f6f8;
  }

  .menuBar-content-box {
    display: flex;
    margin-top: 110px;
    margin-left: 30px;
    flex-direction: column;
    justify-content: space-between;
    width: 230px;
    height: 70vh;
  }

  .tab-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .tab {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 200px;
    height: 24px;
    margin-bottom: 16px;
  }

  .tab img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 15px;
  }

  .tab-description {
    /* width: 28px; */
    height: 18px;
    font-family: NanumSquare_acB;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #848485;
    text-decoration: none;
  }

  .tab-description:hover {
    cursor: pointer;
    color: #f44016;
  }
`;

export default MenuBar;
