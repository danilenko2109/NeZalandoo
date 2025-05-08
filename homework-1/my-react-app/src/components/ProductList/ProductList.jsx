import React from "react";
import PropTypes from "prop-types"; 
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

const ProductList = ({ products, onAddToCart, onAddToFavorites, favoriteItems }) => {
  return (
    <div className="product-list">
     
      {products.map((product) => {
        const isFavorite = favoriteItems.some(
          (fav) => fav.article === product.article
        );
      

        return (
          
          <ProductCard
            key={product.article}
            {...product}
            onAddToCart={onAddToCart}
            onAddToFavorites={onAddToFavorites}
            isFavorite={isFavorite}
          />
        );
      })}
    </div>
  );
};


ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      article: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired, 
  onAddToCart: PropTypes.func.isRequired, 
  onAddToFavorites: PropTypes.func.isRequired,
  favoriteItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      article: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired, 
};

export default ProductList;
