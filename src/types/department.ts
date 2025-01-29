import { PaginationQuery, QueryParams } from '@/services/routes/types';

export interface Department {
  id: string;
  name: string;
}

export interface DepartmentQuery extends QueryParams, PaginationQuery {
  id?: string;
  name?: string;
}
