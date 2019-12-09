import React, { Fragment } from "react";
import "reflect-metadata";
import { BrowserRouter as Router, Route } from "react-router-dom";
import InvoiceView from "app/view/component/InvoiceView";
import TransferView from "app/view/component/TransferView";
import OrderView from "app/view/component/OrderView";
import RetailerView from "app/view/component/RetailerView";
import RetailerAddInfoView from "app/view/component/RetailerAddInfoVeiw";
import RetailerDetailView from "app/view/component/RetailerDetailView";
import WholesalerView from "app/view/component/WholesalerView";
import BuildingView from "app/view/component/BuildingView";
import SettingView from "app/view/component/SettingView";
import GlobalStyle from "app/view/widget/GlobalStyle";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Fragment>
        <GlobalStyle />
        <Route path="/" exact component={RetailerView} />
        <Route path="/invoice" exact component={InvoiceView} />
        <Route path="/transfer" exact component={TransferView} />
        <Route path="/order" exact component={OrderView} />
        <Route path="/retailer" exact component={RetailerView} />
        <Route path="/retailer/:id" exact component={RetailerDetailView} />
        <Route path="/retailerAdd" exact component={RetailerAddInfoView} />
        <Route path="/wholesaler" exact component={WholesalerView} />
        <Route path="/building" exact component={BuildingView} />
        <Route path="/setting" exact component={SettingView} />
      </Fragment>
    </Router>
  );
};

export default App;
