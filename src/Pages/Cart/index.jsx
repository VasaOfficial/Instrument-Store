import React, { useState } from 'react';
import styled from 'styled-components';

import Navbar from '../../components/Navigation';

const CartContainer = styled.div`
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  color: #101840;
`;

const CartHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const CartList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

const ItemName = styled.span`
  font-weight: bold;
`;

const ItemPrice = styled.span`
  font-weight: bold;
  color: #f00;
`;

const RemoveButton = styled.button`
  background-color: #ffc107;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
`;

const BuyButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
`;

function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Item 1', price: 9.99 },
    { id: 2, name: 'Item 2', price: 5.99 },
    { id: 3, name: 'Item 3', price: 3.99 },
  ]);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <Navbar />
      <CartContainer>
        <CartHeader>Shopping Cart</CartHeader>
        <CartList>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
              <RemoveButton onClick={() => handleRemove(item.id)}>
                Remove
              </RemoveButton>
            </CartItem>
          ))}
        </CartList>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontWeight: 'bold' }}>Total:</span>
          <span style={{ fontWeight: 'bold', color: '#f00' }}>
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <BuyButton>Buy</BuyButton>
      </CartContainer>
    </>
  );
}

export default Cart;
