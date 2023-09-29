export interface PriceSimpleReq {
  from_asset_id: string
  to_asset_id: string
  amount?: string
  except?: string
  cex: boolean
}

export interface PriceSimpleResp {
  amount: string
  fee: string
}

export interface PriceAllReq {
  from_asset_id: string
  to_asset_id: string
  amount?: string
  except?: string
  cex: boolean
}

export interface PriceAllResp {
  name: string
  amount: string
  fee: string
}