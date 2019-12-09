import { Container } from "inversify";
import { GetRetailers, GetWholesalers } from "domain/usecase";
import GetRetailersImpl from "domain/usecase/retailer/GetRetailersImpl";
import { RetailerViewModel } from "app/viewmodel";
import { RetailerViewModelImpl } from "app/viewmodel/RetailerViewModelImpl";
import {
  RetailerRepository,
  WholesalerRepository
} from "domain/interactor/repository";
import { RetailerRepositoryImpl } from "data/interactor/RetailerRepositoryImpl";
import { RetailerApi } from "data/api";
import { RetailerApiImpl } from "data/api/RetailerApiImpl";
import { WholesalerApi } from "data/api";
import { WholesalerApiImpl } from "data/api/WholesalerApiImpl";
import { WholesalerRepositoryImpl } from "data/interactor/WholesalerRepositoryImpl";
import GetWholesalersImpl from "domain/usecase/wholesaler/GetWholesalersImpl";
import { WholesalerViewModel } from "app/viewmodel";
import { WholesalerViewModelImpl } from "app/viewmodel/WholesalerViewModelImpl";

const container = new Container();
// todo: put repository implementation into to()

container.bind<RetailerApi>("RetailerApi").to(RetailerApiImpl);

container
  .bind<RetailerRepository>("RetailerRepository")
  .to(RetailerRepositoryImpl);

container.bind<GetRetailers>("GetRetailers").to(GetRetailersImpl);

container
  .bind<RetailerViewModel>("RetailerViewModel")
  .to(RetailerViewModelImpl);

container.bind<WholesalerApi>("WholesalerApi").to(WholesalerApiImpl);
container
  .bind<WholesalerRepository>("WholesalerRepository")
  .to(WholesalerRepositoryImpl);

container.bind<GetWholesalers>("GetWholesalers").to(GetWholesalersImpl);

container
  .bind<WholesalerViewModel>("WholesalerViewModel")
  .to(WholesalerViewModelImpl);

export default container;
