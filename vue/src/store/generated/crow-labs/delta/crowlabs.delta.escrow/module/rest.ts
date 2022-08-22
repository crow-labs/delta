/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface EscrowBallot {
  disputeId?: string;
  voterId?: string;
  voteId?: string;
}

export interface EscrowBuyerCrow {
  crowId?: string;
  buyerId?: string;
  buyerCrowId?: string;
}

export interface EscrowBuyerMonoCrow {
  buyerCrowId?: string;
  deposit?: V1Beta1Coin[];
  collateral?: V1Beta1Coin[];
  status?: string;
  buyer?: string;
}

export interface EscrowCrow {
  orderId?: string;
  listingId?: string;
  crowId?: string;
}

export interface EscrowDispute {
  crowId?: string;
  plaintiffId?: string;
  disputeId?: string;
}

export interface EscrowMonoCrow {
  crowId?: string;
  whitelistId?: string;
  sellerCrowId?: string;
  buyerCrowId?: string;
  disputeId?: string[];
  timeout?: string[];
  status?: string;
  seller?: string;
}

export interface EscrowMonoDispute {
  disputeId?: string;
  title?: string;
  desc?: string;
  evidence?: string;
  plaintiff?: string;
}

export interface EscrowMonoRebutal {
  rebuttalId?: string;
  desc?: string;
  evidence?: string;
  defendant?: string;
}

export type EscrowMsgBeginCrowResponse = object;

export type EscrowMsgBuyerDisputeRebuttalResponse = object;

export interface EscrowMsgBuyerRaiseDisputeResponse {
  disputeId?: string;
}

export type EscrowMsgCreateBuyerMonoCrowResponse = object;

export type EscrowMsgCreateMonoCrowResponse = object;

export type EscrowMsgCreateMonoDisputeResponse = object;

export type EscrowMsgCreateMonoRebutalResponse = object;

export type EscrowMsgCreateSellerMonoCrowResponse = object;

export type EscrowMsgCreateVerdictResponse = object;

export type EscrowMsgCreateVoteResponse = object;

export type EscrowMsgDeleteBuyerMonoCrowResponse = object;

export type EscrowMsgDeleteMonoCrowResponse = object;

export type EscrowMsgDeleteMonoDisputeResponse = object;

export type EscrowMsgDeleteMonoRebutalResponse = object;

export type EscrowMsgDeleteSellerMonoCrowResponse = object;

export type EscrowMsgDeleteVerdictResponse = object;

export type EscrowMsgDeleteVoteResponse = object;

export type EscrowMsgJoinCrowResponse = object;

export interface EscrowMsgReleaseCrowResponse {
  status?: string;
}

export type EscrowMsgSellerDisputeRebuttalResponse = object;

export interface EscrowMsgSellerRaiseDisputeResponse {
  disputeId?: string;
}

export type EscrowMsgUpdateBuyerMonoCrowResponse = object;

export type EscrowMsgUpdateMonoCrowResponse = object;

export type EscrowMsgUpdateMonoDisputeResponse = object;

export type EscrowMsgUpdateMonoRebutalResponse = object;

export type EscrowMsgUpdateSellerMonoCrowResponse = object;

export type EscrowMsgUpdateVerdictResponse = object;

export type EscrowMsgUpdateVoteResponse = object;

export interface EscrowMsgVoteOnDisputeResponse {
  voteId?: string;
}

/**
 * Params defines the parameters for the module.
 */
export type EscrowParams = object;

export interface EscrowPoll {
  crowId?: string;
  disputeId?: string;
  verdictId?: string;
  voteIds?: string[];
}

export interface EscrowQueryAllBallotResponse {
  ballot?: EscrowBallot[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllBuyerCrowResponse {
  buyerCrow?: EscrowBuyerCrow[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllBuyerMonoCrowResponse {
  buyerMonoCrow?: EscrowBuyerMonoCrow[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllCrowResponse {
  crow?: EscrowCrow[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllDisputeResponse {
  dispute?: EscrowDispute[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllMonoCrowResponse {
  monoCrow?: EscrowMonoCrow[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllMonoDisputeResponse {
  monoDispute?: EscrowMonoDispute[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllMonoRebutalResponse {
  monoRebutal?: EscrowMonoRebutal[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllPollResponse {
  poll?: EscrowPoll[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllRebuttalResponse {
  rebuttal?: EscrowRebuttal[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllSellerCrowResponse {
  sellerCrow?: EscrowSellerCrow[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllSellerMonoCrowResponse {
  sellerMonoCrow?: EscrowSellerMonoCrow[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllVerdictResponse {
  verdict?: EscrowVerdict[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryAllVoteResponse {
  vote?: EscrowVote[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface EscrowQueryGetBallotResponse {
  ballot?: EscrowBallot;
}

export interface EscrowQueryGetBuyerCrowResponse {
  buyerCrow?: EscrowBuyerCrow;
}

export interface EscrowQueryGetBuyerMonoCrowResponse {
  buyerMonoCrow?: EscrowBuyerMonoCrow;
}

export interface EscrowQueryGetCrowResponse {
  crow?: EscrowCrow;
}

export interface EscrowQueryGetDisputeResponse {
  dispute?: EscrowDispute;
}

export interface EscrowQueryGetMonoCrowResponse {
  monoCrow?: EscrowMonoCrow;
}

export interface EscrowQueryGetMonoDisputeResponse {
  monoDispute?: EscrowMonoDispute;
}

export interface EscrowQueryGetMonoRebutalResponse {
  monoRebutal?: EscrowMonoRebutal;
}

export interface EscrowQueryGetPollResponse {
  poll?: EscrowPoll;
}

export interface EscrowQueryGetRebuttalResponse {
  rebuttal?: EscrowRebuttal;
}

export interface EscrowQueryGetSellerCrowResponse {
  sellerCrow?: EscrowSellerCrow;
}

export interface EscrowQueryGetSellerMonoCrowResponse {
  sellerMonoCrow?: EscrowSellerMonoCrow;
}

export interface EscrowQueryGetVerdictResponse {
  verdict?: EscrowVerdict;
}

export interface EscrowQueryGetVoteResponse {
  vote?: EscrowVote;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface EscrowQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: EscrowParams;
}

export interface EscrowRebuttal {
  disputeId?: string;
  defendantId?: string;
  rebuttalId?: string;
}

export interface EscrowSellerCrow {
  crowId?: string;
  sellerId?: string;
  sellerCrowId?: string;
}

export interface EscrowSellerMonoCrow {
  sellerCrowId?: string;
  collateral?: V1Beta1Coin[];
  status?: string;
  seller?: string;
}

export interface EscrowVerdict {
  verdictId?: string;
  voteIds?: string[];
  resultingVote?: EscrowVote;
  creator?: string;
}

export interface EscrowVote {
  voteId?: string;
  buyerGuilty?: boolean;
  sellerGuilty?: boolean;
  refundToBuyer?: V1Beta1Coin[];
  sendToSeller?: V1Beta1Coin[];
  buyerPunishment?: string;
  sellerPunishment?: string;
  voter?: string;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title escrow/ballot.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryBallotAll
   * @summary Queries a list of Ballot items.
   * @request GET:/crow-labs/delta/escrow/ballot
   */
  queryBallotAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllBallotResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/ballot`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBallot
   * @summary Queries a Ballot by index.
   * @request GET:/crow-labs/delta/escrow/ballot/{disputeId}/{voterId}
   */
  queryBallot = (disputeId: string, voterId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetBallotResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/ballot/${disputeId}/${voterId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBuyerCrowAll
   * @summary Queries a list of BuyerCrow items.
   * @request GET:/crow-labs/delta/escrow/buyer_crow
   */
  queryBuyerCrowAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllBuyerCrowResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/buyer_crow`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBuyerCrow
   * @summary Queries a BuyerCrow by index.
   * @request GET:/crow-labs/delta/escrow/buyer_crow/{crowId}/{buyerId}
   */
  queryBuyerCrow = (crowId: string, buyerId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetBuyerCrowResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/buyer_crow/${crowId}/${buyerId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBuyerMonoCrowAll
   * @summary Queries a list of BuyerMonoCrow items.
   * @request GET:/crow-labs/delta/escrow/buyer_mono_crow
   */
  queryBuyerMonoCrowAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllBuyerMonoCrowResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/buyer_mono_crow`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBuyerMonoCrow
   * @summary Queries a BuyerMonoCrow by index.
   * @request GET:/crow-labs/delta/escrow/buyer_mono_crow/{buyerCrowId}
   */
  queryBuyerMonoCrow = (buyerCrowId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetBuyerMonoCrowResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/buyer_mono_crow/${buyerCrowId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCrowAll
   * @summary Queries a list of Crow items.
   * @request GET:/crow-labs/delta/escrow/crow
   */
  queryCrowAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllCrowResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/crow`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCrow
   * @summary Queries a Crow by index.
   * @request GET:/crow-labs/delta/escrow/crow/{orderId}/{listingId}
   */
  queryCrow = (orderId: string, listingId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetCrowResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/crow/${orderId}/${listingId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDisputeAll
   * @summary Queries a list of Dispute items.
   * @request GET:/crow-labs/delta/escrow/dispute
   */
  queryDisputeAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllDisputeResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/dispute`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDispute
   * @summary Queries a Dispute by index.
   * @request GET:/crow-labs/delta/escrow/dispute/{crowId}/{plaintiffId}
   */
  queryDispute = (crowId: string, plaintiffId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetDisputeResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/dispute/${crowId}/${plaintiffId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMonoCrowAll
   * @summary Queries a list of MonoCrow items.
   * @request GET:/crow-labs/delta/escrow/mono_crow
   */
  queryMonoCrowAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllMonoCrowResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/mono_crow`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMonoCrow
   * @summary Queries a MonoCrow by index.
   * @request GET:/crow-labs/delta/escrow/mono_crow/{crowId}
   */
  queryMonoCrow = (crowId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetMonoCrowResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/mono_crow/${crowId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMonoDisputeAll
   * @summary Queries a list of MonoDispute items.
   * @request GET:/crow-labs/delta/escrow/mono_dispute
   */
  queryMonoDisputeAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllMonoDisputeResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/mono_dispute`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMonoDispute
   * @summary Queries a MonoDispute by index.
   * @request GET:/crow-labs/delta/escrow/mono_dispute/{disputeId}
   */
  queryMonoDispute = (disputeId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetMonoDisputeResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/mono_dispute/${disputeId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMonoRebutalAll
   * @summary Queries a list of MonoRebutal items.
   * @request GET:/crow-labs/delta/escrow/mono_rebutal
   */
  queryMonoRebutalAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllMonoRebutalResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/mono_rebutal`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMonoRebutal
   * @summary Queries a MonoRebutal by index.
   * @request GET:/crow-labs/delta/escrow/mono_rebutal/{rebuttalId}
   */
  queryMonoRebutal = (rebuttalId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetMonoRebutalResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/mono_rebutal/${rebuttalId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/crow-labs/delta/escrow/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<EscrowQueryParamsResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPollAll
   * @summary Queries a list of Poll items.
   * @request GET:/crow-labs/delta/escrow/poll
   */
  queryPollAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllPollResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/poll`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPoll
   * @summary Queries a Poll by index.
   * @request GET:/crow-labs/delta/escrow/poll/{crowId}/{disputeId}
   */
  queryPoll = (crowId: string, disputeId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetPollResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/poll/${crowId}/${disputeId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRebuttalAll
   * @summary Queries a list of Rebuttal items.
   * @request GET:/crow-labs/delta/escrow/rebuttal
   */
  queryRebuttalAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllRebuttalResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/rebuttal`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRebuttal
   * @summary Queries a Rebuttal by index.
   * @request GET:/crow-labs/delta/escrow/rebuttal/{disputeId}/{defendantId}
   */
  queryRebuttal = (disputeId: string, defendantId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetRebuttalResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/rebuttal/${disputeId}/${defendantId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySellerCrowAll
   * @summary Queries a list of SellerCrow items.
   * @request GET:/crow-labs/delta/escrow/seller_crow
   */
  querySellerCrowAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllSellerCrowResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/seller_crow`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySellerCrow
   * @summary Queries a SellerCrow by index.
   * @request GET:/crow-labs/delta/escrow/seller_crow/{crowId}/{sellerId}
   */
  querySellerCrow = (crowId: string, sellerId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetSellerCrowResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/seller_crow/${crowId}/${sellerId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySellerMonoCrowAll
   * @summary Queries a list of SellerMonoCrow items.
   * @request GET:/crow-labs/delta/escrow/seller_mono_crow
   */
  querySellerMonoCrowAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllSellerMonoCrowResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/seller_mono_crow`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySellerMonoCrow
   * @summary Queries a SellerMonoCrow by index.
   * @request GET:/crow-labs/delta/escrow/seller_mono_crow/{sellerCrowId}
   */
  querySellerMonoCrow = (sellerCrowId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetSellerMonoCrowResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/seller_mono_crow/${sellerCrowId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVerdictAll
   * @summary Queries a list of Verdict items.
   * @request GET:/crow-labs/delta/escrow/verdict
   */
  queryVerdictAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllVerdictResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/verdict`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVerdict
   * @summary Queries a Verdict by index.
   * @request GET:/crow-labs/delta/escrow/verdict/{verdictId}
   */
  queryVerdict = (verdictId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetVerdictResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/verdict/${verdictId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVoteAll
   * @summary Queries a list of Vote items.
   * @request GET:/crow-labs/delta/escrow/vote
   */
  queryVoteAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EscrowQueryAllVoteResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/vote`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVote
   * @summary Queries a Vote by index.
   * @request GET:/crow-labs/delta/escrow/vote/{voteId}
   */
  queryVote = (voteId: string, params: RequestParams = {}) =>
    this.request<EscrowQueryGetVoteResponse, RpcStatus>({
      path: `/crow-labs/delta/escrow/vote/${voteId}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
