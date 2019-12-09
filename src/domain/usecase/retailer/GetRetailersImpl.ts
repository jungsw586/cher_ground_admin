import { inject, injectable } from "inversify";
import { GetRetailers } from "domain/usecase";

import { RetailerRepository } from "../../interactor/repository";

@injectable()
export default class GetRetailersImpl implements GetRetailers {
  private retailerRepositorty: RetailerRepository;

  constructor(
    @inject("RetailerRepository") retailerRepository: RetailerRepository
  ) {
    this.retailerRepositorty = retailerRepository;
  }

  execute() {
    return this.retailerRepositorty.getAllRetailers();
  }
}
