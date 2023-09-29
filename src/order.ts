import { Conf } from ".";
import { OrderNewReq, OrderNewResp } from "../types/order";

export class Order {
  private axiosConfig: Conf;

  constructor(axiosConfig: Conf) {
    this.axiosConfig = axiosConfig;
  }

  async New(req: OrderNewReq): Promise<OrderNewResp> {
    return this.axiosConfig.api.post('/order/new', req);
  }
}