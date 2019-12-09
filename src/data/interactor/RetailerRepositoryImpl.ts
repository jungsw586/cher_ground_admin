import { Retailer } from "domain/entity";

import { RetailerApi } from "data/api";

import { RetailerRepository } from "domain/interactor/repository";
import { inject, injectable } from "inversify";

@injectable()
export class RetailerRepositoryImpl implements RetailerRepository {
  private retailerApi: RetailerApi;

  constructor(@inject("RetailerApi") retailerApi: RetailerApi) {
    this.retailerApi = retailerApi;
  }

  getRetailerById(id: string): Promise<Retailer> {
    return this.retailerApi.getRetailerById(id);
  }

  getRetailerByName(name: string): Promise<Retailer> {
    return this.retailerApi.getRetailerByName(name);
  }
  getAllRetailers(): Promise<Retailer[]> {
    return this.retailerApi.getAllRetailers();
  }

  getActiveRetailers(isActive: boolean): Promise<Retailer> {
    return this.retailerApi.getActiveRetailers(isActive);
  }

  updateRetailers(retailers: Retailer[]): Promise<boolean> {
    return this.retailerApi.updateRetailers(retailers);
  }
}
