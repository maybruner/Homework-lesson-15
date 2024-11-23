import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Computer", price: 100 },
    { id: 2, name: "Paper", price: 1 },
    { id: 3, name: "Pen", price: 10 },
  ]);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };
  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Products
                  products={products}
                  addToCart={addToCart}
                  total={total}
                />
                <nav style={{ marginBottom: "20px" }}>
                  <Link to="/" style={{ marginRight: "10px" }}>
                    Products
                  </Link>
                  <Link to="/cart">Cart</Link>
                </nav>
              </>
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} total={total} clearCart={clearCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
