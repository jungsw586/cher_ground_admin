import React, { useEffect, useState } from "react";

import container from "injector";

import { RetailerViewModel } from "app/viewmodel";

import { Retailer } from "domain/entity";

import NavTopBar from "../widget/NavTopBar";
import MenuBar from "../widget/MenuBar";
import ButtonAddRetail from "../widget/ButtonAddRetail";
import RetailerList from "../widget/RetailerList";
import MainBodyLayout from "../widget/MainBodyLayout";
import MainContentLayout from "../widget/MainContentLayout";
import PageTitle from "../widget/PageBarTitle";
import { RouteComponentProps } from "react-router";

const RetailerView: React.FunctionComponent<RouteComponentProps> = props => {
  const [retailers, setRetailers] = useState<Retailer[]>();

  const viewModel: RetailerViewModel = container.get<RetailerViewModel>(
    "RetailerViewModel"
  );

  useEffect(() => {
    viewModel.output
      .displayRetailerList()
      .then(res => {
        console.log(res);
        setRetailers(res);
      })
      .catch(() => {});
  }, []);

  const goRetailerDetail = (retailerId: string) => {
    props.history.push(`/retailer/${retailerId}`);
  };

  return (
    <>
      <NavTopBar />
      <MainBodyLayout>
        <MenuBar />
        <MainContentLayout>
          <PageTitle title={"소매"} />
          <div
            onClick={() => {
              props.history.push("/retailerAdd");
            }}
          >
            <ButtonAddRetail />
          </div>
          <RetailerList goRetailerDetail={goRetailerDetail} />
          {/* {retailers === undefined ? (
            <div>loading</div>
          ) : (
            <div>{retailers.length}</div>
          )} */}
        </MainContentLayout>
      </MainBodyLayout>
    </>
  );
};

export default RetailerView;
