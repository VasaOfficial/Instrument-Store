import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from '../../components/Navigation';
import { removeFromCart } from '../../features/cartSlice';

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

const EmptyCartText = styled.h3`
  text-align: center;
`;

const ItemAmount = styled.span`
  color: #f00;
`;

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <Navbar />
      <CartContainer>
        <CartHeader>Shopping Cart</CartHeader>
        {!Array.isArray(cart) || cart.length === 0 ? (
          <EmptyCartText>The Cart Is Empty</EmptyCartText>
        ) : (
          <>
            <CartList>
              {cart.map((item) => (
                <CartItem key={item.id}>
                  <ItemName>{item.name}</ItemName>
                  <ItemAmount>{item.amount}</ItemAmount>
                  <ItemPrice>
                    ${(item.price * item.amount).toFixed(2)}
                  </ItemPrice>
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
          </>
        )}
      </CartContainer>
    </>
  );
}

export default Cart;
