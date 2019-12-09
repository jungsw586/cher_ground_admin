import React, { useState } from "react";
import NavTopBar from "../widget/NavTopBar";
import MenuBar from "../widget/MenuBar";
import MainBodyLayout from "../widget/MainBodyLayout";
import MainContentLayout from "../widget/MainContentLayout";
import PageBarDepth from "../widget/PageBarDepth";
import RetailerNavTab from "../widget/RetailerNavTab";
import { RouteComponentProps } from "react-router";
import RetailerInfoCard from "../widget/RetailerInfoCard";
import TableWsList from "../widget/TableWSList";
import WS_LIST from "../widget/DATA";

const RetailerDetailView: React.FunctionComponent<RouteComponentProps> = props => {
  const [retailerInfoMode, setRetailerInfoMode] = useState(true);

  const handlerRetailerInfoModeOn = () => {
    setRetailerInfoMode(true);
  };

  const handlerWsListInfoModeOn = () => {
    setRetailerInfoMode(false);
  };

  return (
    <>
      <NavTopBar />
      <MainBodyLayout>
        <MenuBar />
        <MainContentLayout>
          <PageBarDepth
            history={props.history}
            match={props.match}
            location={props.location}
            title={"Cher_Ground"}
          />
          <RetailerNavTab
            RTInfoAtive={retailerInfoMode}
            WSInfoAtive={!retailerInfoMode}
            handlerRetailerInfoModeOn={handlerRetailerInfoModeOn}
            handlerWsListInfoModeOn={handlerWsListInfoModeOn}
          />
          {retailerInfoMode ? (
            <RetailerInfoCard />
          ) : (
            <TableWsList data={WS_LIST} />
          )}
        </MainContentLayout>
      </MainBodyLayout>
    </>
  );
};

export default RetailerDetailView;
