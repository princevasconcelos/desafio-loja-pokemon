import React, { useState, useEffect, useContext } from "react";

import Gallery from "components/Gallery";

import DataContext from 'contexts/data'

import API from "service";

import * as S from './styles'

export default () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { endpoints, savePokemonData, saveEndpointResult } = useContext(DataContext)
  const offset = 0
  const limit = 50
  const pokemonEndpoint = 'https://pokeapi.co/api/v2/pokemon?limit='+limit+'&offset='+offset

  useEffect(() => {
    const cacheData = endpoints[pokemonEndpoint]

    if (cacheData) return setData(cacheData);

    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    setLoading(true)

    try {
      const { count, results, next, previous } = await API.get(pokemonEndpoint);
      setData(results);
      getPokemonDetail(results);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const getPokemonDetail = async (pokemons) => {
    const pokeData = await Promise.all(pokemons
      .map(({ url }) => API.get(url.slice(0, -1))))
      .then(res => res.filter(Boolean));

    saveEndpointResult({
      url: pokemonEndpoint,
      result: pokeData,
    })
    savePokemonData(pokeData.reduce((acc, cur) => ({ ...acc, [cur.name]: cur }), {}))
    setData(pokeData);
  };

  return (
    <S.HomeContainer>
      <h1>Todos os Pokemons</h1>
      <p>Compre todos os pokemons que gostar ;)~</p>
      <Gallery data={data} loading={loading} />
    </S.HomeContainer>
  );
};
