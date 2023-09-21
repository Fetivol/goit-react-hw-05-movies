import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviePage = lazy(() => import('../pages/MoviePage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* не могу вложение маршрут сделать в индексированом */}
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movie_id" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
