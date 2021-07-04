import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gql } from '@apollo/client';
import client from '../../Config/graphqlClient';
import Continent from '../../Models/Continent.model';

const ContinentsPage: FC = () => {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    client
      .query({
        query: gql`
          query GetContinents {
            continents {
              code
              name
            }
          }
        `,
      })
      .then((result) => {
        setContinents(result.data.continents);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [continents]);

  return (
    <>
      {continents.length ? (
        <>
          <ul>
            {continents.map((continent: Continent) => {
              return (
                <li key={continent.code}>
                  <Link to={`/continents/${continent.code}`}>
                    <span>{continent.name}</span> (<span>{continent.code}</span>)
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default ContinentsPage;
