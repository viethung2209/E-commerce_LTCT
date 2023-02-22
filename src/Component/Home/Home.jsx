import React, { useEffect, useState } from "react";
import Featured from "./Featured";
import Categories from "./Categories";
// import Offer from "./Offer";
// import TrendyProducts from "./TrendyProducts";
// import Subscribe from "./Subscribe";
// import JustArrivedProducts from "./JustArrivedProducts";
/* Not doing anything. It is not being used. */
// import Vendor from "./Vendor";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import Products from "./Products";
import { getListProduct } from "../../Api/product.api";
import { getAllCategories } from "../../Api/category.api";

function Home(props) {

  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const getProducts = () => {
    getListProduct()
      .then(res => {
        setProductList(res.data.data);
        console.log(res.data.data[0].sub_products[0].image_url);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const getCategories = () => {

    getAllCategories()
    .then( res => {
      setCategoryList(res.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getProducts();
    getCategories();
  }, [])
  
  return (
    <>
      <Featured />
      <Categories categoryList={categoryList}/>
      <Products productList={productList}/>
    </>
  );
}

export default Home;
