import React from "react";
import styled from "styled-components";
const Calendar_IMG = require("app/img/calendar.svg");

const ButtonCalendar: React.FunctionComponent = () => {
  return (
    <ButtonCalendarLayout>
      <div className="content">날짜</div>
      <img src={Calendar_IMG} />
    </ButtonCalendarLayout>
  );
};

const ButtonCalendarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
  height: 36px;
  border-radius: 2px;
  border: solid 1px #d0d1d1;
  padding: 6px 10px;
  cursor: pointer;

  .content {
    font-family: NanumSquare_acB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #848485;
  }

  img {
    width: 20px;
    height: 22px;
  }
`;

export default ButtonCalendar;
