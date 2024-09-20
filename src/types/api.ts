export type ApiResponseData<T = any> = {
  count?: number;
  next?: number | null;
  previous?: number | null;
  results: T;
};