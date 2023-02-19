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

function StringedShop(): JSX.Element {
  return (
    <>
      <Navbar />
      <InstrumentCardContainer>
        <ShopCard
          image="https://images.unsplash.com/photo-1550985616-10810253b84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80"
          name="Electric Guitar"
          price={450}
        />
        <ShopCard
          image="https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          name="Violin"
          price = {1500}
        />
        <ShopCard
          image="https://images.unsplash.com/photo-1601902186937-b6c743ae2cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          name="Harp"
          price={890}
        />
      </InstrumentCardContainer>
    </>
  );
}

export default StringedShop;
