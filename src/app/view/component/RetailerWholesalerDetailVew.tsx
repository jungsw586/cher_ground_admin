import React, { useState } from "react";
import NavTopBar from "../widget/NavTopBar";
import MenuBar from "../widget/MenuBar";
import MainBodyLayout from "../widget/MainBodyLayout";
import MainContentLayout from "../widget/MainContentLayout";
import PageBarDepth from "../widget/PageBarDepth";
import { RouteComponentProps } from "react-router";

const RetailerDetailView: React.FunctionComponent<RouteComponentProps> = props => {
  const goBack = () => {
    props.history.goBack();
  };

  return (
    <>
      <NavTopBar />
      <MainBodyLayout>
        <MenuBar />
        <MainContentLayout>
          <PageBarDepth title={"거래처 관리"} goBack={goBack} />
        </MainContentLayout>
      </MainBodyLayout>
    </>
  );
};

export default RetailerDetailView;
