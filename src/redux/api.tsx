import { IProduct } from "@/types";
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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = storeApi;
