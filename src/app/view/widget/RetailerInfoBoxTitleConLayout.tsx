import styled from "styled-components";

const RetailerInfoBoxTitleConLayout = styled.div`
  display: flex;
  padding: 30px 30px 0px 30px;
  width: 100%;
  justify-content: space-between;
  align-items: space-between;

  .title-box {
    width: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .title-content {
    font-family: NanumSquare_acB;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #656667;
  }

  .content-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export default RetailerInfoBoxTitleConLayout;
