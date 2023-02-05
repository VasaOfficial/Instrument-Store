/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

const CardText = styled.p`
  font-size: 18px;
  color: #333;
  margin: 0;
  padding: 0 20px;
  text-align: center;
  color: white;
  font-size: 28px;
  font-weight: 800;
`;

function Card({ text, image, link }) {
  const navigateTo = useNavigate();

  const handleClick = () => {
    navigateTo(link);
  };
  return (
    <CardContainer onClick={handleClick} image={image}>
      <CardText>{text}</CardText>
    </CardContainer>
  );
}

export default Card;
