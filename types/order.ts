export interface OrderNewReq {
  from_asset_id: string;
  to_asset_id: string;
  amount?: string;
  except?: string;
  cex: boolean;
}

export interface OrderNewResp {
  trace_id: string;
  address: string;
  memo: string;
  expire: string;
}
