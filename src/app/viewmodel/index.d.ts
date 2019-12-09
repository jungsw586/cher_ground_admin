import {
  RetailerViewInput,
  RetailerViewOutput,
  RetailerViewRoute
} from "./RetailerViewModelImpl";

import {
  WholesalerViewInput,
  WholesalerViewOutput,
  WholesalerViewRoute
} from "./WholesalerViewModelImpl";

export interface RetailerViewModel {
  input: RetailerViewInput;
  output: RetailerViewOutput;
  route: RetailerViewRoute;
}

export interface WholesalerViewModel {
  input: WholesalerViewInput;
  output: WholesalerViewOutput;
  route: WholesalerViewRoute;
}
