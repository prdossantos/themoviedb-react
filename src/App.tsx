import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';

const Home = React.lazy(() => import('./pages/Home'));
const MovieDetails = React.lazy(() => import('./pages/MovieDetails'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
