import React from "react";
import styled from "styled-components";

interface TableWsListTbodyProps {
  ws_id: string;
  ws_name: string;
  ws_address: string;
  ws_number: string;
  ws_tax_option: string;
}

const TableWsListTbody: React.FunctionComponent<TableWsListTbodyProps> = props => {
  return (
    <TableWsListTbodyContentLayout>
      <td>{props.ws_id}</td>
      <td>{props.ws_name}</td>
      <td>{props.ws_address}</td>
      <td>{props.ws_number}</td>
      <td>{props.ws_tax_option}</td>
    </TableWsListTbodyContentLayout>
  );
};

const TableWsListTbodyContentLayout = styled.tr`
  td {
    padding: 21px 30px;
    height: 58px;
    font-family: NanumSquare_acR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.32px;
    color: var(--sup-blk);
  }
`;

export default TableWsListTbody;
