import React, { useEffect, useState } from "react";

import container from "injector";

import { WholesalerViewModel } from "app/viewmodel";

import { Wholesaler } from "domain/entity";

import NavTopBar from "../widget/NavTopBar";
import MenuBar from "../widget/MenuBar";
import MainBodyLayout from "../widget/MainBodyLayout";
import MainContentLayout from "../widget/MainContentLayout";
import PageTitle from "../widget/PageBarTitle";
import SearchBar from "../widget/SearchBar";

const WholesalerView: React.FunctionComponent = () => {
  const [wholesalers, setWholesalers] = useState<Wholesaler[]>();

  const viewModel: WholesalerViewModel = container.get<WholesalerViewModel>(
    "WholesalerViewModel"
  );

  useEffect(() => {
    viewModel.output
      .displayWholesalerList()
      .then(res => {
        console.log(res);
        setWholesalers(res);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <NavTopBar />
      <MainBodyLayout>
        <MenuBar />
        <MainContentLayout>
          <PageTitle title={"도매"} />
          <SearchBar category={"도매"} />
          {wholesalers === undefined ? (
            <div>loading</div>
          ) : (
            <div>{wholesalers.length}</div>
          )}
        </MainContentLayout>
      </MainBodyLayout>
    </>
  );
};

export default WholesalerView;
