import React from "react";
import NavTopBar from "../widget/NavTopBar";
import MenuBar from "../widget/MenuBar";
import MainBodyLayout from "../widget/MainBodyLayout";
import MainContentLayout from "../widget/MainContentLayout";
import PageBarDepth from "../widget/PageBarDepth";
import InputRetailerInfo from "../widget/InputRetailerInfo";
import { RouteComponentProps } from "react-router";

const RetailerAddView: React.FunctionComponent<RouteComponentProps> = props => {
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
            title={"소매 업체 추가"}
          />
          <InputRetailerInfo />
        </MainContentLayout>
      </MainBodyLayout>
    </>
  );
};

export default RetailerAddView;
