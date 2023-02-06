import React from 'react';
import styled from 'styled-components';

import Navbar from '../../components/Navigation';
import ShopCard from '../../components/ShopCards';

const InstrumentCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  height: 100vh;
`;

function StringedShop() {
  return (
    <>
      <Navbar />
      <InstrumentCardContainer>
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </InstrumentCardContainer>
    </>
  );
}

export default StringedShop;
