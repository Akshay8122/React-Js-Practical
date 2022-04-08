export interface UsersAction {
  user: string;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}
export interface UsersList<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}
