import React from "react";
import styled from "styled-components";
import InputField from "./InputField";
import ButtonNormal from "./ButtonNormal";

const InputRetailerInfo: React.FunctionComponent = () => {
  return (
    <InputRetailerInfoLayout>
      <div className="input-retailer-container">
        <div className="title">업체정보입력</div>
        <InputField
          size={"large"}
          placeholder={"업체명 입력"}
          labelName={"업체명"}
        />
        <InputField
          size={"large"}
          placeholder={"주소명 입력"}
          labelName={"주소"}
        />
        <div className="bind-small-input-box">
          <InputField
            size={"small"}
            placeholder={"전화번호 입력"}
            labelName={"전화번호"}
          />
          <InputField
            size={"small"}
            placeholder={"이메일 입력"}
            labelName={"이메일"}
          />
        </div>
        <InputField
          size={"large"}
          placeholder={"대표명 입력"}
          labelName={"대표명"}
        />
        <div className="bind-small-input-box">
          <InputField
            size={"small"}
            placeholder={"사업자명 입력"}
            labelName={"사업자명"}
          />
          <InputField
            size={"small"}
            placeholder={"사업자등록번호 입력"}
            labelName={"사업자등록번호"}
          />
        </div>
        <div className="btn-box">
          <div className="btn-bind">
            <ButtonNormal
              mode={"secondary"}
              active={true}
              btnContent={"취소"}
            />
            <ButtonNormal mode={"primary"} active={false} btnContent={"추가"} />
          </div>
        </div>
      </div>
    </InputRetailerInfoLayout>
  );
};

const InputRetailerInfoLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 29px;
  padding-left: 29px;
  .input-retailer-container {
    padding: 30px;
    width: 550px;
    height: 595px;
    border-radius: 4px;
    border: solid 1px #e8e8e8;
  }

  .title {
    margin-bottom: 17px;
    font-family: NanumSquare_acEB;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  }

  .bind-small-input-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn-box {
    display: flex;
    margin-top: 40px;
    justify-content: flex-end;
    align-items: center;
  }

  .btn-bind {
    display: flex;
    justify-content: space-between;
    width: 190px;
  }
`;

export default InputRetailerInfo;
