import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styles
const NavbarContainer = styled.div`
  background-color: #101840;
  height: 60px;
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
    font-size: 18px;
    color: #ffb020;
    margin-right: 20px;
    text-decoration: none;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <LogoText>Music Emporium</LogoText>
      <LinkContainer>
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </LinkContainer>
    </NavbarContainer>
  );
}

export default Navbar;
