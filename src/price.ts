import { Conf } from ".";
import { PriceSimpleReq, PriceSimpleResp, PriceAllReq, PriceAllResp } from "../types/price";

export class Price {
  private axiosConfig: Conf;

  constructor(axiosConfig: Conf) {
    this.axiosConfig = axiosConfig;
  }

  async getPriceAll(req: PriceAllReq): Promise<PriceAllResp> {
    return this.axiosConfig.api.post('/price/all', req);
  }

  async getPriceSimple(req: PriceSimpleReq): Promise<PriceSimpleResp> {
    return this.axiosConfig.api.post(`/price/simple`, req);
  }
}