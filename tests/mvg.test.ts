import { MVGBridge } from "../src/index";

describe('mvg', () => {
  const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';
  const EOS_ASSET_ID = '6cfe566e-4aad-470b-8c9a-2fd35b49c68d';

  beforeEach(() => {
  })

  it('/price/simple', async () => {
    console.log(await MVGBridge.price.getPriceSimple({
      from_asset_id: BTC_ASSET_ID,
      to_asset_id: EOS_ASSET_ID,
      amount: "0.1",
      cex: true,
    }))
  })

  it('/price/all', async () => {
    console.log(await MVGBridge.price.getPriceAll({
      from_asset_id: BTC_ASSET_ID,
      to_asset_id: EOS_ASSET_ID,
      amount: "0.1",
      cex: true,
    }))
  })

  it('/order/new', async () => {
    console.log(await MVGBridge.order.New({
      from_asset_id: BTC_ASSET_ID,
      to_asset_id: EOS_ASSET_ID,
      amount: "0.1",
      cex: true,
    }))
  })
})