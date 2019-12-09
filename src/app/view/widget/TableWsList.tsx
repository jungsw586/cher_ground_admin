import React from "react";
import styled from "styled-components";
import TableWsListTbody from "./TableWsListTbody";

interface TableWsListProps {
  data: any;
  goWsDetailView?: any;
}

const TableWsList: React.FunctionComponent<TableWsListProps> = props => {
  return (
    <TableWsListLayout>
      <table>
        <thead>
          <TableWsListTbody
            ws_id={"WS ID"}
            ws_name={"상호명"}
            ws_address={"주소"}
            ws_number={"전화번호"}
            ws_tax_option={"부가세 포함 정산"}
          />
        </thead>
        <tbody>
          {props.data.map((el: any) => (
            <TableWsListTbody
              ws_id={el.ws_id}
              ws_name={el.ws_name}
              ws_address={el.ws_address}
              ws_number={el.ws_number}
              ws_tax_option={el.ws_tax_option}
              goWsDetailView={props.goWsDetailView}
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
    text-align: left;
    font-family: NanumSquare_acB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.32px;
    color: var(--sup-blk);
  }

  thead td {
    padding: 17px 30px;
  }

  tbody tr:hover {
    background-color: var(--sup-gb-2);
  }
`;

export default TableWsList;
