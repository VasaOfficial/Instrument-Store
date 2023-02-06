/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.52),
      rgba(45, 45, 45, 0.73)
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
  border: 1px solid black;
`;

const CardInfoText = styled.p`
  color: black;
`;

const CardInfoPriceAdd = styled.button`
  color: white;
`;

function ShopCard({ image, name, description, price }) {
  return (
    <ArticleContainer>
      <CardContainer image={image} />
      <CardInfoContainer>
        <CardInfoText>
          {name} <br />
          {description} <br />
          {price} <br />
          <input type="range" min="0" max="10" value="0" />
          <CardInfoPriceAdd>Add to Cart</CardInfoPriceAdd>
        </CardInfoText>
      </CardInfoContainer>
    </ArticleContainer>
  );
}

export default ShopCard;
