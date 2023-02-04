import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/index';
import NotFound from './Pages/NotFount';
import LandingPage from './Pages/Landing/index';

export function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
