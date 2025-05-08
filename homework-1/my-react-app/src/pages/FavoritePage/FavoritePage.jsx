import React from "react";
import PropTypes from "prop-types";
import "./FavoritePage.scss"

const FavoritesPage = ({ favoriteItems, onAddToCart, toggleFavorite }) => {
  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      {favoriteItems.length === 0 ? (
        <p className="empty-favorites">No favorite items yet.</p>
      ) : (
        <div className="favorites-list">
          {favoriteItems.map((item) => (
            <div key={item.article} className="favorite-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <button onClick={() => onAddToCart(item)}>Add to Cart</button>
                <button onClick={() => toggleFavorite(item)}>Remove from Favorites</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

FavoritesPage.propTypes = {
  favoriteItems: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default FavoritesPage;
