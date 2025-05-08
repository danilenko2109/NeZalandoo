import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { FaHeart } from "react-icons/fa"; 
import "./ProductCard.scss";

const ProductCard = ({
  title,
  price,
  image,
  article,
  color,
  onAddToCart,
  onAddToFavorites,
  isFavorite,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    const product = { title, price, image, article, color };
    onAddToCart(product);
    setIsModalOpen(true);
  };

  const handleAddToFavorites = () => {
    const product = { title, price, image, article, color };
    onAddToFavorites(product);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <p>Article: {article}</p>
      <p>Color: {color}</p>

      <div className="product-actions">
        <Button onClick={handleAddToCart}>Add to Cart</Button>
        <button className="btn1" onClick={handleAddToFavorites}>
          <FaHeart color={isFavorite ? "red" : "gray"} size={16} />
        </button>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <img src={image} alt={title} className="product-img" />
          <h2>Item added to cart</h2>
          <p>{title} has been added to your shopping cart.</p>
          <Button onClick={closeModal}>Close</Button>
        </Modal>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onAddToFavorites: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default ProductCard;
