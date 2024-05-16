import React from "react";
import { useCartContext } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";

const Home = () => {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = useCartContext();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock)
      sortedProducts = sortedProducts.filter((prod) => {
        return prod.inStock > 0;
      });

    if (byFastDelivery)
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);

    if (byRating)
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating);

    if (searchQuery)
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
