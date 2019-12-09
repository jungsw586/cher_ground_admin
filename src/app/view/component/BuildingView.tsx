import React, { useEffect, useState } from "react";

import NavTopBar from "../widget/NavTopBar";
import MenuBar from "../widget/MenuBar";
import MainBodyLayout from "../widget/MainBodyLayout";
import MainContentLayout from "../widget/MainContentLayout";
import PageTitle from "../widget/PageBarTitle";
import SearchBar from "../widget/SearchBar";
import WebPagenation from "../widget/WebPagenation";

const BuildingView: React.FunctionComponent = () => {
  return (
    <>
      <NavTopBar />
      <MainBodyLayout>
        <MenuBar />
        <MainContentLayout>
          <PageTitle title={"상가"} />
          <WebPagenation offsetNumber={1} limitNumber={10} totalPage={200} />
          <SearchBar category={"상가"} />
          <div>상가페이지입니다.</div>
        </MainContentLayout>
      </MainBodyLayout>
    </>
  );
};

export default BuildingView;
