import React from 'react'
import { useNavigate } from "react-router-dom";

function Cart({ cart, total, clearCart }) {
  const navigate = useNavigate();

  const handleBuy = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!"); 
      return;
    }
    alert("Thank you for your purchase!");
    clearCart(); 
    navigate("/");
  };
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some products!</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <span>{item.name} - ${item.price}</span>
            </li>
          ))}
        </ul>
      )}
      <h3>Total = ${total}</h3> 
      <button
        onClick={handleBuy}
        style={{
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Buy
      </button>
    </div>
  );
}
export default Cart;