import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { gql } from '@apollo/client';
import client from '../../Config/graphqlClient';
import Country from '../../Models/Country.model';

const CountriesPage: FC = () => {
  const { code } = useParams();

  const [continentName, setContinentName] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    client
      .query({
        query: gql`
          query GetCountries {
            continent(code: "${code}") {
              name
              countries {
                code
                name
                emoji
                languages {
                  name
                }
              }
            }
          }
        `,
      })
      .then((result) => {
        setContinentName(result.data.continent.name);
        setCountries(result.data.continent.countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [code, continentName, countries]);

  return (
    <>
      {countries.length ? (
        <>
          <h2 className="page-title">
            Listing countries from {continentName} ({code})
          </h2>

          <ul className="countries-list">
            {countries.map((country: Country) => {
              return (
                <li key={country.emoji}>
                  <span>Name: {country.name}</span>
                  <span>Emoji: {country.emoji}</span>
                  {country.languages.length ? (
                    <span>Language: {country.languages[0].name}</span>
                  ) : (
                    <span style={{ color: '#ff5722' }}>Language: No data</span>
                  )}
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

export default CountriesPage;
