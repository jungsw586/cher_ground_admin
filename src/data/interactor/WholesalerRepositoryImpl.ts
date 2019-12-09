import { Wholesaler } from "domain/entity";

import { WholesalerApi } from "../api";

import { WholesalerRepository } from "domain/interactor/repository";
import { inject, injectable } from "inversify";

@injectable()
export class WholesalerRepositoryImpl implements WholesalerRepository {
  private wholesalerApi: WholesalerApi;

  constructor(@inject("WholesalerApi") wholesalerApi: WholesalerApi) {
    this.wholesalerApi = wholesalerApi;
  }

  getWholesalerById(id: string): Promise<Wholesaler> {
    return this.wholesalerApi.getWholesalerById(id);
  }

  getWholesalerByName(name: string): Promise<Wholesaler> {
    return this.wholesalerApi.getWholesalerByName(name);
  }
  getAllWholesalers(): Promise<Wholesaler[]> {
    return this.wholesalerApi.getAllWholesalers();
  }

  updateWholesalers(wholesalers: Wholesaler[]): Promise<boolean> {
    return this.wholesalerApi.updateWholesalers(wholesalers);
  }
}
