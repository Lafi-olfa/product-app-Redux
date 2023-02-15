import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/productList/ProductList";
import HeaderNav from "./components/headerNav/HeaderNav";
import AddProduct from "./components/addProduct/AddProduct";
import { useSelector } from "react-redux";

const App = () => {
  const [search, setSearch] = useState("");
  const { products } = useSelector((state) => state);
  const [rating, setRating] = useState(2);
  const handelRate=(x)=>{
    setRating(x)
  }
  return (
    <div>
      <HeaderNav search={search} setSearch={setSearch} rating={rating} handelRate={handelRate} setRating={setRating} />
      <AddProduct />
      <ProductList products={products.filter((el)=>el.name.toLowerCase().trim().includes(search.toLowerCase().trim()) && el.rate === rating)} />
    </div>
  );
};

export default App;
