import React from "react";

function Products({ products, addToCart , total}) {
    return (
        <div>
            
          <h2>List of Products</h2>
          <h3 style={{ marginBottom: "20px" }}>Total in Cart: ${total}</h3>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <span>
            {product.name} price = ${product.price}
          </span>
          <button onClick={() => addToCart(product)}>+</button>
        </div>
      ))}
    </div>
  );
};
export default Products;
