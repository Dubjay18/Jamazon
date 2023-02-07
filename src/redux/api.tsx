import { ILoginUser, IProduct, IUser } from "@/types";
import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

interface test {
  products: IProduct[];
}
// Define a service using a base URL and expected endpoints
export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], void>({
      query: () => `/products`,
    }),
  }),
});
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    signup: builder.mutation<IUser, IUser>({
      query: (payload) => ({
        url: "/users",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    login: builder.mutation<ILoginUser, ILoginUser>({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = storeApi;
export const { useSignupMutation, useLoginMutation } =
  authApi;
