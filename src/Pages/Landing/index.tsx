import styled from 'styled-components';
import { Link } from 'react-router-dom';

// styles
const BackgroundContainer = styled.div`
  background-image: url(https://images.unsplash.com/photo-1519508234439-4f23643125c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80);
  height: 100vh;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  font-size: 36px;
  color: white;
  text-align: center;
  color: #daa520;

  h1 {
    color: #800000;
  }
`;

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  margin: 40px;
  font-size: 18px;
  background-color: #7d2828;
  transform: scale(1);
  transition: transform 0.2s;

  :hover {
    transform: scale(1.1);
  }
`;

function LandingPage() {
  return (
    <BackgroundContainer>
      <TextContainer>
        <h1>Welcome To Music Emporium</h1> <br />
        The Instruments Business, where latest instruments are available to any
        parts of the world.
        <br />
      </TextContainer>
      <Link to="/home">
        <StyledButton>Check Now!</StyledButton>
      </Link>
    </BackgroundContainer>
  );
}

export default LandingPage;
