import QuantityPicker from "./quantityPicker";
import "./product.css";
import { useState } from "react";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  
  const onQuantityChange = (value) => {
    console.log("qnty changed", value);
    setQuantity(value);
  };

  const getTotal = () => {
    let total = quantity * props.data.price;
    return "$" + total.toFixed(2);
  };

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="Product" />
      <h5>{props.data.title}</h5>

      <div className="price-info">
        <label className="total">{getTotal()}</label>
        <label className="price">${props.data.price.toFixed(2)}</label>
      </div>

      <QuantityPicker onChange={onQuantityChange} />

      <button className="btn btn-sm btn-primary">Add to cart</button>
    </div>
  );
};

// simple change for git
export default Product;



/**
 * 
 * 
 * create quantity state variable
 * set the value to quantity
 * 
 * calculate the total as quantity * price
 * 
 */