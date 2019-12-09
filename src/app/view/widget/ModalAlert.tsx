import React from "react";
import styled from "styled-components";
import ButtonNormal from "./ButtonNormal";

interface ModalAlertProps {
  handlerOff: any;
  title: string;
  description: string;
  okBtnText: string;
  cancelBtnText: string;
}

const ModalAlert: React.FunctionComponent<ModalAlertProps> = props => {
  return (
    <ModalAlertLayout>
      <div className="modalAlert-box">
        <div className="modalAlert-content-box">
          <div className="title">{props.title}</div>
          <div className="content">{props.description}</div>
          <div className="btn-box">
            <div onClick={props.handlerOff}>
              <ButtonNormal btnContent={props.cancelBtnText} />
            </div>
            <div onClick={props.handlerOff}>
              <ButtonNormal
                btnContent={props.okBtnText}
                mode={"primary"}
                active={true}
              />
            </div>
          </div>
        </div>
      </div>
    </ModalAlertLayout>
  );
};

const ModalAlertLayout = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--black-60);

  .modalAlert-box {
    position: fixed;
    padding:30px
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 219px;
    border-radius: 4px;
    background-color: var(--sup-wht);
  }

  .modalAlert-content-box {
    position:relative;
  }

  .title {
    position: absolute;
    font-family: NanumSquare_acB;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000
  }

  .content {
    position: absolute;
    top: 42px;
    font-family: NanumSquare_acR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.32px;
  color: var(--sup-blk);
  }

  .btn-box {
    display: flex;
    justify-content: space-between
    width: 190px;
    align-items: center;
    position: absolute;
    right: 0px;
    top: 123px;
  }
`;

export default ModalAlert;
