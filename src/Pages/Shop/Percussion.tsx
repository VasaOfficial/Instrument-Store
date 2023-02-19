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

function PercussionShop() {
  return (
    <>
      <Navbar />
      <InstrumentCardContainer>
        <ShopCard
          image="https://images.unsplash.com/photo-1543443374-b6fe10a6ab7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          name="Drum"
          price={450}
        />
        <ShopCard
          image="https://images.unsplash.com/photo-1576487236230-eaa4afe9b453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          name="Piano"
          price={2000}
        />
        <ShopCard
          image="https://images.unsplash.com/photo-1599601483121-e4b18b605839?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          name="Gong"
          price={620}
        />
      </InstrumentCardContainer>
    </>
  );
}

export default PercussionShop;
