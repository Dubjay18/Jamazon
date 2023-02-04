import { useGetAllProductsQuery } from "@/redux/api";
import React, { useEffect } from "react";
import Card from "./Card";

function Products() {
  const { data, isLoading, error } =
    useGetAllProductsQuery();
  useEffect(() => {
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);
  return (
    <div className='min-h-screen bg-gray-300 text-white py-8'>
      <h1 className='text-center text-gray-700  text-2xl font-semibold'>
        Some of Our Products
      </h1>
      <div className='grid p-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
        {data && !isLoading ? (
          data.map((product, i) => {
            return (
              <Card
                key={i}
                title={product?.title}
                price={product?.price}
                image={product?.image}
              />
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}

export default Products;
