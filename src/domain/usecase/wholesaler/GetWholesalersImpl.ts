import { inject, injectable } from "inversify";
import { GetWholesalers } from "domain/usecase";

import { WholesalerRepository } from "../../interactor/repository";

@injectable()
export default class GetWholesalersImpl implements GetWholesalers {
  private wholesalerRepository: WholesalerRepository;

  constructor(
    @inject("WholesalerRepository") wholesalerRepository: WholesalerRepository
  ) {
    this.wholesalerRepository = wholesalerRepository;
  }

  execute() {
    return this.wholesalerRepository.getAllWholesalers();
  }
}
