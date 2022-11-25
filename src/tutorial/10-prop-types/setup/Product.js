import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  console.log(name, image, price);
  const url = image && image.url;
  return (
    <article className='product'>
      <h2>Single Person</h2>
      <img
        src={url || defaultImg}
        alt={name || "default Images"}
      />
      <h2>{name}</h2>
      <p>${price || 3.99}</p>
    </article>
  );
};
// Product.defaultProps ={
//   name:"default name",
//   price:3.99,
//   image:defaultImg
// }
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default Product;
