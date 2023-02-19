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

function WindShop() {
  return (
    <>
      <Navbar />
      <InstrumentCardContainer>
        <ShopCard
          image="https://images.unsplash.com/photo-1671029353153-273d535b0208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          name="Saxophone"
          price={240}
        />
        <ShopCard
          image="https://images.unsplash.com/photo-1590054387835-ab72678fef01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          name="Horn"
          price={135}
        />
        <ShopCard
          image="https://images.unsplash.com/photo-1573871669414-010dbf73ca84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          name="Trumpet"
          price={199}
        />
      </InstrumentCardContainer>
    </>
  );
}

export default WindShop;
