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

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
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

export interface WhitelistBuyer {
  buyerId?: string;
  name?: string;

  /** @format uint64 */
  numOrder?: string;
  orderId?: string[];
  status?: string;
  buyer?: string;
}

export interface WhitelistMonoWhitelist {
  whitelistId?: string;
  buyer?: WhitelistBuyer;
  seller?: WhitelistSeller;
  voter?: WhitelistVoter;
  governor?: string;
}

export type WhitelistMsgCreateBuyerResponse = object;

export type WhitelistMsgCreateMonoWhitelistResponse = object;

export type WhitelistMsgCreateSellerResponse = object;

export type WhitelistMsgCreateVoterResponse = object;

export interface WhitelistMsgCreateWhitelistResponse {
  /** @format uint64 */
  id?: string;
}

export type WhitelistMsgDeleteBuyerResponse = object;

export type WhitelistMsgDeleteMonoWhitelistResponse = object;

export type WhitelistMsgDeleteSellerResponse = object;

export type WhitelistMsgDeleteVoterResponse = object;

export type WhitelistMsgDeleteWhitelistResponse = object;

export type WhitelistMsgUpdateBuyerResponse = object;

export type WhitelistMsgUpdateMonoWhitelistResponse = object;

export type WhitelistMsgUpdateSellerResponse = object;

export type WhitelistMsgUpdateVoterResponse = object;

export type WhitelistMsgUpdateWhitelistResponse = object;

/**
 * Params defines the parameters for the module.
 */
export type WhitelistParams = object;

export interface WhitelistProducer {
  accAddr?: string;
  sellerId?: string;
}

export interface WhitelistQueryAllBuyerResponse {
  buyer?: WhitelistBuyer[];

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

export interface WhitelistQueryAllMonoWhitelistResponse {
  monoWhitelist?: WhitelistMonoWhitelist[];

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

export interface WhitelistQueryAllProducerResponse {
  producer?: WhitelistProducer[];

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

export interface WhitelistQueryAllReviewerResponse {
  reviewer?: WhitelistReviewer[];

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

export interface WhitelistQueryAllSellerResponse {
  seller?: WhitelistSeller[];

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

export interface WhitelistQueryAllUserResponse {
  user?: WhitelistUser[];

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

export interface WhitelistQueryAllVoterResponse {
  voter?: WhitelistVoter[];

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

export interface WhitelistQueryAllWhitelistResponse {
  Whitelist?: WhitelistWhitelist[];

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

export interface WhitelistQueryGetBuyerResponse {
  buyer?: WhitelistBuyer;
}

export interface WhitelistQueryGetMonoWhitelistResponse {
  monoWhitelist?: WhitelistMonoWhitelist;
}

export interface WhitelistQueryGetProducerResponse {
  producer?: WhitelistProducer;
}

export interface WhitelistQueryGetReviewerResponse {
  reviewer?: WhitelistReviewer;
}

export interface WhitelistQueryGetSellerResponse {
  seller?: WhitelistSeller;
}

export interface WhitelistQueryGetUserResponse {
  user?: WhitelistUser;
}

export interface WhitelistQueryGetVoterResponse {
  voter?: WhitelistVoter;
}

export interface WhitelistQueryGetWhitelistResponse {
  Whitelist?: WhitelistWhitelist;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface WhitelistQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: WhitelistParams;
}

export interface WhitelistReviewer {
  accAddr?: string;
  voterId?: string;
}

export interface WhitelistSeller {
  sellerId?: string;
  name?: string;
  desc?: string;
  contactInfo?: string;

  /** @format uint64 */
  numListing?: string;
  listingId?: string[];
  status?: string;
  producer?: string;
}

export interface WhitelistUser {
  accAddr?: string;
  buyerId?: string;
}

export interface WhitelistVoter {
  voterId?: string;
  name?: string;

  /** @format uint64 */
  votingPower?: string;

  /** @format uint64 */
  numVotes?: string;
  voteId?: string[];
  status?: string;
  reviewer?: string;
}

export interface WhitelistWhitelist {
  /** @format uint64 */
  id?: string;
  whitelistId?: string;
  creator?: string;
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
 * @title whitelist/buyer.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryBuyerAll
   * @summary Queries a list of Buyer items.
   * @request GET:/crow-labs/delta/whitelist/buyer
   */
  queryBuyerAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WhitelistQueryAllBuyerResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/buyer`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBuyer
   * @summary Queries a Buyer by index.
   * @request GET:/crow-labs/delta/whitelist/buyer/{buyerId}
   */
  queryBuyer = (buyerId: string, params: RequestParams = {}) =>
    this.request<WhitelistQueryGetBuyerResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/buyer/${buyerId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMonoWhitelistAll
   * @summary Queries a list of MonoWhitelist items.
   * @request GET:/crow-labs/delta/whitelist/mono_whitelist
   */
  queryMonoWhitelistAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WhitelistQueryAllMonoWhitelistResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/mono_whitelist`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMonoWhitelist
   * @summary Queries a MonoWhitelist by index.
   * @request GET:/crow-labs/delta/whitelist/mono_whitelist/{whitelistId}
   */
  queryMonoWhitelist = (whitelistId: string, params: RequestParams = {}) =>
    this.request<WhitelistQueryGetMonoWhitelistResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/mono_whitelist/${whitelistId}`,
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
   * @request GET:/crow-labs/delta/whitelist/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<WhitelistQueryParamsResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryProducerAll
   * @summary Queries a list of Producer items.
   * @request GET:/crow-labs/delta/whitelist/producer
   */
  queryProducerAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WhitelistQueryAllProducerResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/producer`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryProducer
   * @summary Queries a Producer by index.
   * @request GET:/crow-labs/delta/whitelist/producer/{accAddr}
   */
  queryProducer = (accAddr: string, params: RequestParams = {}) =>
    this.request<WhitelistQueryGetProducerResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/producer/${accAddr}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryReviewerAll
   * @summary Queries a list of Reviewer items.
   * @request GET:/crow-labs/delta/whitelist/reviewer
   */
  queryReviewerAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WhitelistQueryAllReviewerResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/reviewer`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryReviewer
   * @summary Queries a Reviewer by index.
   * @request GET:/crow-labs/delta/whitelist/reviewer/{accAddr}
   */
  queryReviewer = (accAddr: string, params: RequestParams = {}) =>
    this.request<WhitelistQueryGetReviewerResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/reviewer/${accAddr}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySellerAll
   * @summary Queries a list of Seller items.
   * @request GET:/crow-labs/delta/whitelist/seller
   */
  querySellerAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WhitelistQueryAllSellerResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/seller`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySeller
   * @summary Queries a Seller by index.
   * @request GET:/crow-labs/delta/whitelist/seller/{sellerId}
   */
  querySeller = (sellerId: string, params: RequestParams = {}) =>
    this.request<WhitelistQueryGetSellerResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/seller/${sellerId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUserAll
   * @summary Queries a list of User items.
   * @request GET:/crow-labs/delta/whitelist/user
   */
  queryUserAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WhitelistQueryAllUserResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/user`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUser
   * @summary Queries a User by index.
   * @request GET:/crow-labs/delta/whitelist/user/{accAddr}
   */
  queryUser = (accAddr: string, params: RequestParams = {}) =>
    this.request<WhitelistQueryGetUserResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/user/${accAddr}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVoterAll
   * @summary Queries a list of Voter items.
   * @request GET:/crow-labs/delta/whitelist/voter
   */
  queryVoterAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WhitelistQueryAllVoterResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/voter`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVoter
   * @summary Queries a Voter by index.
   * @request GET:/crow-labs/delta/whitelist/voter/{voterId}
   */
  queryVoter = (voterId: string, params: RequestParams = {}) =>
    this.request<WhitelistQueryGetVoterResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/voter/${voterId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWhitelistAll
   * @summary Queries a list of Whitelist items.
   * @request GET:/crow-labs/delta/whitelist/whitelist
   */
  queryWhitelistAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<WhitelistQueryAllWhitelistResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/whitelist`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWhitelist
   * @summary Queries a Whitelist by id.
   * @request GET:/crow-labs/delta/whitelist/whitelist/{id}
   */
  queryWhitelist = (id: string, params: RequestParams = {}) =>
    this.request<WhitelistQueryGetWhitelistResponse, RpcStatus>({
      path: `/crow-labs/delta/whitelist/whitelist/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
