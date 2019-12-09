import React, { useState } from "react";
import NavTopBar from "../widget/NavTopBar";
import MenuBar from "../widget/MenuBar";
import MainBodyLayout from "../widget/MainBodyLayout";
import MainContentLayout from "../widget/MainContentLayout";
import PageBarDepth from "../widget/PageBarDepth";
import RetailerNavTab from "../widget/RetailerNavTab";
import { RouteComponentProps } from "react-router";
import TableWsList from "../widget/TableWSList";
import WS_LIST from "../widget/DATA";

interface RetailerDetailWsInfoParams {
  id: string;
}

const RetailerDetailWsInfoView: React.FunctionComponent<RouteComponentProps<
  RetailerDetailWsInfoParams
>> = props => {
  const handlerRetailerInfoModeOn = () => {
    props.history.push(`/retailer_info/${props.match.params.id}`);
  };

  const handlerWsListInfoModeOn = () => {
    props.history.push(`/retailer_ws_info/${props.match.params.id}`);
  };

  const goWsDetailView = (wholesalerId: string) => {
    props.history.push(`/retailer_ws_detail/${wholesalerId}`);
  };

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <>
      <NavTopBar />
      <MainBodyLayout>
        <MenuBar />
        <MainContentLayout>
          <PageBarDepth title={"Cher_Ground"} goBack={goBack} />
          <RetailerNavTab
            RTInfoAtive={false}
            WSInfoAtive={true}
            handlerRetailerInfoModeOn={handlerRetailerInfoModeOn}
            handlerWsListInfoModeOn={handlerWsListInfoModeOn}
          />
          <TableWsList data={WS_LIST} goWsDetailView={goWsDetailView} />
        </MainContentLayout>
      </MainBodyLayout>
    </>
  );
};

export default RetailerDetailWsInfoView;
