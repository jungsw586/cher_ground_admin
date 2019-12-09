import React, { useEffect, useState } from "react";

import NavTopBar from "../widget/NavTopBar";
import MenuBar from "../widget/MenuBar";
import MainBodyLayout from "../widget/MainBodyLayout";
import MainContentLayout from "../widget/MainContentLayout";
import PageTitle from "../widget/PageBarTitle";

const InvoiceView: React.FunctionComponent = () => {
  return (
    <>
      <NavTopBar />
      <MainBodyLayout>
        <MenuBar />
        <MainContentLayout>
          <PageTitle title={"청구서"} />
          <div>청구서페이지입니다.</div>
        </MainContentLayout>
      </MainBodyLayout>
    </>
  );
};

export default InvoiceView;
