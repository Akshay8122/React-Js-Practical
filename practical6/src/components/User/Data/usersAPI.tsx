import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  endpoints: (
    builder: EndpointBuilder<
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      never,
      "user"
    >
  ) => ({
    getUsers: builder.query({
      query: (page: number = 1) => `users?page=${page}`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
