import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

interface ShopCardProps {
  image: string;
  name: string;
  price: number;
}

interface CardContainerProps {
  image: string;
}

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 50px;
`;

const CardContainer = styled.div<CardContainerProps>`
  background-color: #fff;
  border-radius: 8px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(45, 45, 45, 0.2)
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 280px;
  height: 300px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  transform: translateZ(0);

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-10px);
  }
`;

const CardInfoContainer = styled.div`
  display: grid;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardInfoText = styled.p`
  color: #101840;
  display: grid;
  justify-content: space-between;
  text-align: center;
  gap: 10px;
  font-size: 1.3rem;

  input {
    width: 100px;
    height: 20px;
  }
`;

const CardInfoPriceAdd = styled.button`
  color: white;
  background-color: #101840;
  cursor: pointer;
  max-width: 108px;
  padding: 8px;
  font-size: 1.1rem;
`;

function ShopCard({ image, name, price }: ShopCardProps) {
  const dispatch = useDispatch();
  const [amount, setAmount] = React.useState<number>(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ name, price, amount }));
  };
  return (
    <ArticleContainer>
      <CardContainer image={image} />
      <CardInfoContainer>
        <CardInfoText>
          {name} <br />
          {price}$ <br />
          <input
            type="number"
            min="1"
            max="10"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <CardInfoPriceAdd onClick={handleAddToCart}>
            Add to Cart
          </CardInfoPriceAdd>
        </CardInfoText>
      </CardInfoContainer>
    </ArticleContainer>
  );
}

export default ShopCard;
