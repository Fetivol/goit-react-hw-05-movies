// import { useState } from 'react';

import Home from 'pages/Home';
import MoviePage from 'pages/MoviePage';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import { Layout } from './Layout';

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
      </Route>
    </Routes>
  );
};
