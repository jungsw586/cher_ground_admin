import { injectable, inject } from "inversify";

import { Retailer } from "../../domain/entity";

import * as ApiManager from "./ApiManager";

import { RetailerApi } from "./";

@injectable()
export class RetailerApiImpl implements RetailerApi {
  getRetailerById(id: string): Promise<Retailer> {
    return ApiManager.request({
      url: `${ApiManager.BASE_URL}/retailers/:id`,
      method: "GET"
    });
  }

  getRetailerByName(name: string): Promise<Retailer> {
    return ApiManager.request({
      url: `${ApiManager.BASE_URL}/retailers/name/:name`,
      method: "GET"
    });
  }

  getAllRetailers(): Promise<Retailer[]> {
    return ApiManager.request({
      url: `${ApiManager.BASE_URL}/retailers`,
      method: "GET"
    });
  }
  getActiveRetailers(isActive: boolean): Promise<Retailer> {
    return ApiManager.request({
      url: `${ApiManager.BASE_URL}/retailers/:active`,
      method: "GET"
    });
  }

  updateRetailers(retailers: Retailer[]): Promise<boolean> {
    return ApiManager.request({
      url: `${ApiManager.BASE_URL}/retailers`,
      method: "PUT",
      data: retailers
    });
  }
}
