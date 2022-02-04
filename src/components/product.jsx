import QuantityPicker from "./quantityPicker";
import "./product.css";

const Product = (props) => {
  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="Product" />
      <h5>{props.data.title}</h5>

      <div className="price-info">
        <label className="total">$20.00</label>
        <label className="price">${props.data.price}</label>
      </div>

      <QuantityPicker />

      <button className="btn btn-sm btn-primary">Add to cart</button>
    </div>
  );
};

export default Product;
