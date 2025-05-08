import { Routes, Route } from "react-router";
import ProductList from "./components/ProductList/ProductList";
import CartPage from "./pages/CartPage/CartPage";
import FavoritesPage from "./pages/FavoritePage/FavoritePage";


const AppRoutes = ({ 
  products, 
  handleAddToCart, 
  toggleFavorite, 
  cartItems, 
  handleRemove, 
  favoriteItems 
}) => {
  return (
    <Routes>
      <Route
        path="/" 
        element={
          <ProductList 
            products={products} 
            onAddToCart={handleAddToCart} 
            onAddToFavorites={toggleFavorite} 
            favoriteItems={favoriteItems} 
          />
        } 
      />

      <Route 
        path="/cart" 
        element={
          <CartPage 
            cartItems={cartItems} 
            onRemove={handleRemove} 
          />
        } 
      />

      <Route 
        path="/favorites" 
        element={
          <FavoritesPage 
            favoriteItems={favoriteItems} 
            onAddToCart={handleAddToCart} 
            toggleFavorite={toggleFavorite} 
          />
        } 
      />
    </Routes>
  );
};

export default AppRoutes;
