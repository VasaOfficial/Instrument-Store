import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navigation';

const HomePageContainer = styled.div`
  background-image: url(https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 50%;
`;

const MiddleImage = styled.img`
  width: 100px;
  height: 100px;
`;

const MiddleText = styled.p`
  font-size: 20px;
  color: white;
  margin-left: 20px;
`;

const ScrollButton = styled.button`
  background-color: white;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
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
          <MiddleImage src="../assets/3d-guitar" alt="guitar" />
          <MiddleText>
            <h2>Instruments with brand-new quality</h2> <br />
            Get your car now, with limited discount offer and fast shipping to
            your home.
          </MiddleText>
        </MiddleContainer>
        <ScrollButton onClick={scrollToBottom}>Check Now</ScrollButton>
      </HomePageContainer>
    </>
  );
}

export default HomePage;
