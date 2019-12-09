import React, { useState } from "react";
import styled from "styled-components";
import FlexLayout from "./FlexLayout";
import NavTabBar from "./NavTabBar";
import ButtonOption from "./ButtonOption";
import ModalAlert from "./ModalAlert";
const Delete_IMG = require("app/img/delete-idle.svg");

interface RetailerNavTabProps {
  RTInfoAtive: boolean;
  WSInfoAtive: boolean;
  handlerRetailerInfoModeOn: any;
  handlerWsListInfoModeOn: any;
}

const RetailerNavTab: React.FunctionComponent<RetailerNavTabProps> = props => {
  const [optionModal, setOptionModal] = useState(false);
  const [deleteAlertOn, setDeleteAlertOn] = useState(false);

  const handlerOptionModal = () => {
    setOptionModal(!optionModal);
  };

  const handlerDeleteAlert = () => {
    setDeleteAlertOn(true);
    setOptionModal(false);
  };

  const handlerDeleteAlertOff = () => {
    setDeleteAlertOn(false);
  };

  return (
    <>
      {deleteAlertOn && (
        <ModalAlert
          handlerOff={handlerDeleteAlertOff}
          title={"소매 업체 삭제"}
          description={"삭제하시겠습니까?"}
          okBtnText={"삭제"}
          cancelBtnText={"취소"}
        />
      )}
      <FlexLayout
        justfy={"space-between"}
        align={"center"}
        margin={"30px 0 0 0"}
        padding={"11px 12px 13px 29px"}
      >
        <FlexLayout width={"160px"} justfy={"center"} align={"center"}>
          <div onClick={props.handlerRetailerInfoModeOn}>
            <NavTabBar content={"업체 정보"} active={props.RTInfoAtive} />
          </div>
          <div onClick={props.handlerWsListInfoModeOn}>
            <NavTabBar content={"거래처 정보"} active={props.WSInfoAtive} />
          </div>
        </FlexLayout>
        <OptionModalLayout>
          <div onClick={handlerOptionModal}>
            <ButtonOption active={optionModal} />
          </div>
          {optionModal && (
            <div className="option-modal">
              <div className="modal-content-box" onClick={handlerDeleteAlert}>
                <img src={Delete_IMG} />
                <div className="content">삭제</div>
              </div>
            </div>
          )}
        </OptionModalLayout>
      </FlexLayout>
    </>
  );
};

const OptionModalLayout = styled.div`
  position: relative;

  .option-modal {
    display: flex;
    align-items: center;
    position: absolute;
    right: 15px;
    top: 50px;
    width: 162px;
    height: 64px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }

  .modal-content-box {
    display: flex;
    align-items: center;
    width: 162px;
    height: 40px;
    cursor: pointer;
  }

  .modal-content-box:hover {
    background-color: var(--sup-gb-2);
  }

  .modal-content-box img {
    width: 24px;
    height: 24px;
    margin: 8px 10px 8px 20px;
  }

  .content {
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

export default RetailerNavTab;
