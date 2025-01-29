export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  page: number;
  size: number;
  total: number;
}

export interface ApiError {
  message: string;
  status: number;
}

export interface IRepositoryServices<TKey, TCreate, TUpdate, TGet> {
  create: (data: TCreate) => Promise<ApiResponse<TGet>>;
  getAll: () => Promise<ApiResponse<TGet[]>>;
  getById: (key: TKey) => Promise<ApiResponse<TGet>>;
  update: (key: TKey, data: TUpdate) => Promise<ApiResponse<TGet>>;
  delete: (key: TKey) => Promise<ApiResponse<void>>;
}
