import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styles
const NavbarContainer = styled.div`
  background-color: #101840;
  height: 90px;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

const LogoText = styled.div`
  color: #ffb020;
  font-size: 20px;
`;

const LinkContainer = styled.div`
  a {
    text-decoration: none;
    position: relative;
    font-size: 18px;
    color: #ffb020;
    margin-right: 70px;
    text-decoration: none;
  }

  a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #ffb020;
    position: absolute;
    bottom: -2px;
    left: 0;
    transition: width 0.3s ease-in-out;
  }

  a:hover::after {
    width: 100%;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <LogoText>Music Emporium</LogoText>
      <LinkContainer>
        <Link to="/home">Home</Link>
        <Link to="/shop">Cart</Link>
        <Link to="/about">About</Link>
      </LinkContainer>
    </NavbarContainer>
  );
}

export default Navbar;
