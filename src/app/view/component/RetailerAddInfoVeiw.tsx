import React from "react";
import NavTopBar from "../widget/NavTopBar";
import MenuBar from "../widget/MenuBar";
import MainBodyLayout from "../widget/MainBodyLayout";
import MainContentLayout from "../widget/MainContentLayout";
import PageBarDepth from "../widget/PageBarDepth";
import InputRetailerInfo from "../widget/InputRetailerInfo";
import { RouteComponentProps } from "react-router";

const RetailerAddView: React.FunctionComponent<RouteComponentProps> = props => {
  const goBack = () => {
    props.history.goBack();
  };

  return (
    <>
      <NavTopBar />
      <MainBodyLayout>
        <MenuBar />
        <MainContentLayout>
          <PageBarDepth title={"소매 업체 추가"} goBack={goBack} />
          <InputRetailerInfo />
        </MainContentLayout>
      </MainBodyLayout>
    </>
  );
};

export default RetailerAddView;
