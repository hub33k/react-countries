import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const HomePage: FC = () => {
  return (
    <>
      <Link to="/continents">Continents list</Link>
    </>
  );
};

export default HomePage;
