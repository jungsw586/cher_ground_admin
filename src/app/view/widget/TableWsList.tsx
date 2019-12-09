import React from "react";
import styled from "styled-components";
import TableWsListTbody from "./TableWsListTbody";

interface TableWsListProps {
  data: any;
}

const TableWsList: React.FunctionComponent<TableWsListProps> = props => {
  return (
    <TableWsListLayout>
      <table>
        <thead>
          <tr>
            <th className="ws-id">WS ID</th>
            <th className="ws-name">상호명</th>
            <th className="ws-address">주소</th>
            <th className="ws-number">전화번호</th>
            <th className="ws-tax-option">부가세 포함 정산</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((el: any) => (
            <TableWsListTbody
              ws_id={el.ws_id}
              ws_name={el.ws_name}
              ws_address={el.ws_address}
              ws_number={el.ws_number}
              ws_tax_option={el.ws_tax_option}
            />
          ))}
        </tbody>
      </table>
    </TableWsListLayout>
  );
};

const TableWsListLayout = styled.div`
  width: 100%;

  table {
    width: 100%;
  }

  thead tr {
    height: 50px;
    background-color: #f1f3f4;
  }

  th {
    padding: 17px 30px;
    margin-bottom: 20px;
  }

  .ws-id {
    text-align: left;
    width: 200px;
    font-family: NanumSquare_acB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.32px;
    color: var(--sup-blk);
  }

  .ws-name {
    text-align: left;

    width: 100px;
    height: 16px;
    font-family: NanumSquare_acB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.32px;
    color: var(--sup-blk);
  }

  .ws-address {
    text-align: left;

    width: 180px;
    height: 16px;
    font-family: NanumSquare_acB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.32px;
    color: var(--sup-blk);
  }

  .ws-number {
    text-align: left;

    width: 180px;
    height: 16px;
    font-family: NanumSquare_acB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.32px;
    color: var(--sup-blk);
  }

  .ws-tax-option {
    text-align: left;

    width: 180px;
    height: 16px;
    font-family: NanumSquare_acB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.32px;
    color: var(--sup-blk);
  }

  tbody tr:hover {
    background-color: var(--sup-gb-2);
  }
`;

export default TableWsList;
