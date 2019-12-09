import { injectable, inject } from "inversify";

import { Wholesaler } from "domain/entity";
import { WholesalerViewModel } from "app/viewmodel";

import { GetWholesalers } from "domain/usecase";

@injectable()
export class WholesalerViewModelImpl implements WholesalerViewModel {
  private ucGetWholesalers: GetWholesalers;

  public input: WholesalerViewInput = {
    onClickBack: () => {},
    onClickWholesaler: (wholesaler: Wholesaler) => {}
  };

  public output: WholesalerViewOutput = {
    displayWholesalers: (wholesaler: Wholesaler[]) => {},
    displayWholesalerList: () => {
      return this.ucGetWholesalers.execute();
    }
  };

  public route: WholesalerViewRoute = {
    toWholesalerDetail: () => {}
  };

  constructor(@inject("GetWholesalers") getWholesalers: GetWholesalers) {
    this.ucGetWholesalers = getWholesalers;
  }
}

export interface WholesalerViewInput {
  onClickBack: () => any;
  onClickWholesaler: (wholesaler: Wholesaler) => void;
}

export interface WholesalerViewOutput {
  displayWholesalers: (wholesaler: Wholesaler[]) => void;
  displayWholesalerList: () => Promise<Wholesaler[]>;
}

export interface WholesalerViewRoute {
  toWholesalerDetail: () => void;
}
