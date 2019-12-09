import { Retailer, Wholesaler } from "domain/entity";

export interface RetailerApi {
  getRetailerById(id: string): Promise<Retailer>;
  getRetailerByName(name: string): Promise<Retailer>;
  getAllRetailers(): Promise<Retailer[]>;
  getActiveRetailers(isActive: boolean): Promise<Retailer>;

  updateRetailers(retailers: Retailer[]): Promise<boolean>;
}

export interface WholesalerApi {
  getWholesalerById(id: string): Promise<Wholesaler>;
  getWholesalerByName(name: string): Promise<Wholesaler>;
  getAllWholesalers(): Promise<Wholesaler[]>;

  updateWholesalers(wholesalers: Wholesaler[]): Promise<boolean>;
}
