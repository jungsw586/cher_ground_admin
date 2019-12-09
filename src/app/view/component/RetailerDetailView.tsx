import React, { useState } from "react";
import NavTopBar from "../widget/NavTopBar";
import MenuBar from "../widget/MenuBar";
import MainBodyLayout from "../widget/MainBodyLayout";
import MainContentLayout from "../widget/MainContentLayout";
import PageBarDepth from "../widget/PageBarDepth";
import RetailerNavTab from "../widget/RetailerNavTab";
import { RouteComponentProps } from "react-router";
import RetailerInfoCard from "../widget/RetailerInfoCard";

interface RetailerDetailParams {
  id: string;
}

const RetailerDetailView: React.FunctionComponent<RouteComponentProps<
  RetailerDetailParams
>> = props => {
  const handlerRetailerInfoModeOn = () => {
    props.history.push(`/retailer_info/${props.match.params.id}`);
  };

  const handlerWsListInfoModeOn = () => {
    props.history.push(`/retailer_ws_info/${props.match.params.id}`);
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
            RTInfoAtive={true}
            WSInfoAtive={false}
            handlerRetailerInfoModeOn={handlerRetailerInfoModeOn}
            handlerWsListInfoModeOn={handlerWsListInfoModeOn}
          />
          <RetailerInfoCard />
        </MainContentLayout>
      </MainBodyLayout>
    </>
  );
};

export default RetailerDetailView;
