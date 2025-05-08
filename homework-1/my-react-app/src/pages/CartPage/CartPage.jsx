import React from "react";
import PropTypes from "prop-types";
import "./CartPage.scss"

const CartPage = ({ cartItems, onRemove }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.article} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                  <button onClick={() => onRemove(item.article)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="total-price">Total: ${totalPrice}</div>
        </>
      )}
    </div>
  );
};

CartPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartPage;
