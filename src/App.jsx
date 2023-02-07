import { Route, Routes } from 'react-router-dom';

import HomePage from './Pages/Home/index';
import NotFound from './Pages/NotFount';
import LandingPage from './Pages/Landing/index';
import StringedShop from './Pages/Shop/Stringed';
import WindShop from './Pages/Shop/Wind';
import PercussionShop from './Pages/Shop/Percussion';
import CartPage from './Pages/Cart';

export function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/stringed" element={<StringedShop />} />
      <Route path="/wind" element={<WindShop />} />
      <Route path="/percussion" element={<PercussionShop />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
