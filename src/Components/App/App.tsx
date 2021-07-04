import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import HomePage from '../../Routes/HomePage';
import ContinentsPage from '../../Routes/ContinentsPage';
import CountriesPage from '../../Routes/CountriesPage';
import NotFoundPage from '../../Routes/NotFoundPage';

const App: FC = () => {
  return (
    <Routes>
      <Layout>
        <Route path="/" element={<HomePage />} />
        <Route path="/continents" element={<ContinentsPage />} />
        <Route path="/continents/:code" element={<CountriesPage />} />

        <Route path="404" element={<NotFoundPage />} />
        <Route path="react-countries" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Layout>
    </Routes>
  );
};

export default App;
