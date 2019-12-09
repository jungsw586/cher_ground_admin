import React, { useEffect, useState } from "react";

import NavTopBar from "../widget/NavTopBar";
import MenuBar from "../widget/MenuBar";
import MainBodyLayout from "../widget/MainBodyLayout";
import MainContentLayout from "../widget/MainContentLayout";
import PageTitle from "../widget/PageBarTitle";

const OrderView: React.FunctionComponent = () => {
  return (
    <>
      <NavTopBar />
      <MainBodyLayout>
        <MenuBar />
        <MainContentLayout>
          <PageTitle title={"주문"} />
          <div>주문페이지입니다.</div>
        </MainContentLayout>
      </MainBodyLayout>
    </>
  );
};

export default OrderView;
