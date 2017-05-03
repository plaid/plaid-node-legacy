export interface Credentials {
  username: string;
  password: string;
}

export interface PlaidError {
  code: number;
  message: string;
  resolve: string;
}

export type Callback = (error: Error | PlaidError | null, response: any) => void;
export type MfaCallback = (error: Error | PlaidError | null, mfaResponse: any, response: any) => void;

export function getCategory(category_id: string, plaid_env: string, callback: Callback): void;
export function getCategories(plaid_env: string, callback: Callback): void;

export function getInstitution(institution_id: string, plaid_env: string, callback: Callback): void;
export function getInstitutions(plaid_env: string, callback: Callback): void;

export function searchInstitutions(query: {id?: string, product?: string, query?: string}, env: string, callback: Callback): void;
export function searchAllInstitutions(query: {id?: string, product?: string, query?: string}, env: string, callback: Callback): void;

declare class Client {
  constructor(client_id: string, secret: string, plaid_env: string, headers?: {[headerName: string]: string});

  addAuthUser(institution_type: string, credentials: Credentials, options: Object, callback: MfaCallback);
  addAuthUser(institution_type: string, credentials: Credentials, callback: MfaCallback);
  stepAuthUser(access_token: string, mfaResponse: String, options: Object, callback: MfaCallback);
  stepAuthUser(access_token: string, mfaResponse: String, callback: MfaCallback);
  getAuthUser(access_token: string, options: Object, callback: Callback);
  getAuthUser(access_token: string, callback: Callback);
  patchAuthUser(access_token: string, credentials: Credentials, options: Object, callback: MfaCallback);
  patchAuthUser(access_token: string, credentials: Credentials, callback: MfaCallback);
  deleteAuthUser(access_token: string, options: Object, callback: Callback);
  deleteAuthUser(access_token: string, callback: Callback);

  addConnectUser(institution_type: string, credentials: Credentials, options: Object, callback: MfaCallback);
  addConnectUser(institution_type: string, credentials: Credentials, callback: MfaCallback);
  stepConnectUser(access_token: string, mfaResponse: String, options: Object, callback: MfaCallback);
  stepConnectUser(access_token: string, mfaResponse: String, callback: MfaCallback);
  getConnectUser(access_token: string, options: Object, callback: Callback);
  getConnectUser(access_token: string, callback: Callback);
  patchConnectUser(access_token: string, credentials: Credentials, options: Object, callback: MfaCallback);
  patchConnectUser(access_token: string, credentials: Credentials, callback: MfaCallback);
  deleteConnectUser(access_token: string, options: Object, callback: Callback);
  deleteConnectUser(access_token: string, callback: Callback);

  addIncomeUser(institution_type: string, credentials: Credentials, options: Object, callback: MfaCallback);
  addIncomeUser(institution_type: string, credentials: Credentials, callback: MfaCallback);
  stepIncomeUser(access_token: string, mfaResponse: String, options: Object, callback: MfaCallback);
  stepIncomeUser(access_token: string, mfaResponse: String, callback: MfaCallback);
  getIncomeUser(access_token: string, options: Object, callback: Callback);
  getIncomeUser(access_token: string, callback: Callback);
  patchIncomeUser(access_token: string, credentials: Credentials, options: Object, callback: MfaCallback);
  patchIncomeUser(access_token: string, credentials: Credentials, callback: MfaCallback);
  deleteIncomeUser(access_token: string, options: Object, callback: Callback);
  deleteIncomeUser(access_token: string, callback: Callback);

  addInfoUser(institution_type: string, credentials: Credentials, options: Object, callback: MfaCallback);
  addInfoUser(institution_type: string, credentials: Credentials, callback: MfaCallback);
  stepInfoUser(access_token: string, mfaResponse: String, options: Object, callback: MfaCallback);
  stepInfoUser(access_token: string, mfaResponse: String, callback: MfaCallback);
  getInfoUser(access_token: string, options: Object, callback: Callback);
  getInfoUser(access_token: string, callback: Callback);
  patchInfoUser(access_token: string, credentials: Credentials, options: Object, callback: MfaCallback);
  patchInfoUser(access_token: string, credentials: Credentials, callback: MfaCallback);
  deleteInfoUser(access_token: string, options: Object, callback: Callback);
  deleteInfoUser(access_token: string, callback: Callback);

  addRiskUser(institution_type: string, credentials: Credentials, options: Object, callback: MfaCallback);
  addRiskUser(institution_type: string, credentials: Credentials, callback: MfaCallback);
  stepRiskUser(access_token: string, mfaResponse: String, options: Object, callback: MfaCallback);
  stepRiskUser(access_token: string, mfaResponse: String, callback: MfaCallback);
  getRiskUser(access_token: string, options: Object, callback: Callback);
  getRiskUser(access_token: string, callback: Callback);
  patchRiskUser(access_token: string, credentials: Credentials, options: Object, callback: MfaCallback);
  patchRiskUser(access_token: string, credentials: Credentials, callback: MfaCallback);
  deleteIncomeUser(access_token: string, options: Object, callback: Callback);
  deleteIncomeUser(access_token: string, callback: Callback);


  getBalance(access_token: string, callback: Callback);

  upgradeUser(access_token: string, upgrade_to: string, options: Object, callback: MfaCallback);
  upgradeUser(access_token: string, upgrade_to: string, callback: MfaCallback);

  exchangeToken(public_token: string, callback: Callback);

  getLongtailInstitutions(optionsObject: Object, callback: Callback);
}
