import { Request } from "express";
import { Params } from "express-serve-static-core";

interface mockRequest {
  id?:string,
  body?: Params;
}

export function makeMockRequest(params: mockRequest) {
  const request = {
    params:{id:params.id}||{},
    body: params.body|| {},
  } as Request;

  return request as Request;
}
