import { injectable, inject } from "inversify";

import { Retailer } from "domain/entity";
import { RetailerViewModel } from "app/viewmodel";

import { GetRetailers } from "domain/usecase";

@injectable()
export class RetailerViewModelImpl implements RetailerViewModel {
  private ucGetRetailers: GetRetailers;

  public input: RetailerViewInput = {
    onClickBack: () => {},
    onClickRetailer: (retailer: Retailer) => {}
  };

  public output: RetailerViewOutput = {
    displayRetailers: (retailers: Retailer[]) => {},
    displayRetailerList: () => {
      return this.ucGetRetailers.execute();
    }
  };

  public route: RetailerViewRoute = {
    toRetailerDetail: () => {}
  };

  constructor(@inject("GetRetailers") getRetailers: GetRetailers) {
    this.ucGetRetailers = getRetailers;
  }
}

export interface RetailerViewInput {
  onClickBack: () => any;
  onClickRetailer: (retailer: Retailer) => void;
}

export interface RetailerViewOutput {
  displayRetailers: (retailers: Retailer[]) => void;
  displayRetailerList: () => Promise<Retailer[]>;
}

export interface RetailerViewRoute {
  toRetailerDetail: () => void;
}
