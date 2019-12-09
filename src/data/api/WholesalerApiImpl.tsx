import { injectable, inject } from "inversify";

import { Wholesaler } from "domain/entity";

import * as ApiManager from "./ApiManager";

import { WholesalerApi } from "./";

@injectable()
export class WholesalerApiImpl implements WholesalerApi {
  getWholesalerById(id: string): Promise<Wholesaler> {
    return ApiManager.request({
      url: `${ApiManager.BASE_URL}/wholesalers/:id`,
      method: "GET"
    });
  }
  getWholesalerByName(name: string): Promise<Wholesaler> {
    return ApiManager.request({
      url: `${ApiManager.BASE_URL}/wholesalers/name/:name`,
      method: "GET"
    });
  }
  getAllWholesalers(): Promise<Wholesaler[]> {
    return ApiManager.request({
      url: `${ApiManager.BASE_URL}/wholesalers`,
      method: "GET"
    });
  }

  updateWholesalers(wholesalers: Wholesaler[]): Promise<boolean> {
    return ApiManager.request({
      url: `${ApiManager.BASE_URL}/wholesalers`,
      method: "PUT",
      data: wholesalers
    });
  }
}
