// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/",
        // baseUrl: "https://mech-arcade-backend.vercel.app/api/",
    }),
    // baseQuery: fetchBaseQuery({ baseUrl: "config.base_url" }),
    tagTypes: ["products"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/product",
                method: "GET",
            }),
            providesTags: ["products"],
        }),
        getSingleProduct: builder.query({
            query: (id: string) => ({
                url: `/product/${id}`,
                method: "GET",
            }),
            providesTags: ["products"],
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                    url: "/product",
                    method: "POST",
                    body: product,
                
            }),
            invalidatesTags: ["products"],
        }),
        updateProduct: builder.mutation({
            query: ({ id, product }) => ({
              url: `product/${id}`,
              method: 'PATCH',
              body: product,
            }),
            invalidatesTags: ['products'],
          }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `product/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["products"],
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetProductsQuery,
    useGetSingleProductQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = baseApi;
