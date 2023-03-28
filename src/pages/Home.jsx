import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Products from "../components/Products";
import Couresel from "../components/Couresel";


const Home = () => {
  const [products] = useContext(ProductContext);
  return (
    <>
     <Couresel/>
     <div className="container-head">
     <div className="row g-5 mt-2">
        {products.length === 0 ? "Loading" :  products.map((i) => {
          return (
            <Products image={i.image.imgFront}  title={i.title}   store={i.store}  price={i.price.price} discount={i.price.discount}  />
          );
        })}
      </div>
</div>
     
    </>
  );
};

export default Home;
