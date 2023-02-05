import React from 'react';
import styled from 'styled-components';

import Navbar from '../../components/Navigation';
import Card from '../../components/HomeCards';

// styles
const HomePageContainer = styled.div`
  background-image: url(https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 50%;
`;

const MiddleImage = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 10px;
`;

const MiddleText = styled.p`
  font-size: 20px;
  color: white;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  font-size: 28px;
  width: 90%;

  :first-line {
    font-weight: bold;
    color: #ffb020;
  }
`;

const ScrollButton = styled.button`
  background-color: white;
  font-size: 20px;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.2s;
  background-color: #101840;
  color: #ffb020;

  :hover {
    transform: scale(1.1);
  }
`;

const BottomContainer = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  background-color: whitesmoke;
`;

function HomePage() {
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <>
      <Navbar />
      <HomePageContainer>
        <MiddleContainer>
          <MiddleImage
            src="https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="guitar"
          />
          <MiddleText>
            Instruments with brand-new quality! <br /> Get your instrument now,
            with limited discount offer and fast shipping to your home.
            <ScrollButton onClick={scrollToBottom}>Check Out</ScrollButton>
          </MiddleText>
        </MiddleContainer>
      </HomePageContainer>
      <BottomContainer>
        <Card
          image="https://images.unsplash.com/photo-1460036521480-ff49c08c2781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
          text="Stringed instruments"
          link="/stringed"
        />
        <Card
          image="https://images.unsplash.com/photo-1520614233149-f698fd8379e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80"
          text="Wind instruments"
          link="/wind"
        />
        <Card
          image="https://images.unsplash.com/photo-1571327073757-71d13c24de30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          text="Percussion instruments"
          link="/percussion"
        />
      </BottomContainer>
    </>
  );
}

export default HomePage;
