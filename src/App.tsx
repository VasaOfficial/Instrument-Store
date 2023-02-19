import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import NotFound from './Pages/NotFount';

const Home = lazy(() => import('./Pages/Home/index'));
const LandingPage = lazy(() => import('./Pages/Landing/index'));
const StringedShop = lazy(() => import('./Pages/Shop/Stringed'));
const WindShop = lazy(() => import('./Pages/Shop/Wind'));
const PercussionShop = lazy(() => import('./Pages/Shop/Percussion'));
const CartPage = lazy(() => import('./Pages/Cart/index'));

export function App() {
  return (
    <Suspense callback={LandingPage}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/stringed" element={<StringedShop />} />
        <Route path="/wind" element={<WindShop />} />
        <Route path="/percussion" element={<PercussionShop />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
