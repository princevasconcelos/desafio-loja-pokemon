import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import Gallery from 'components/Gallery'
import DataContext from 'contexts/data'

import API from 'service'

import * as C from 'utils/constraints'

const TypeContainer = styled.div`
  > h1 span {
    text-transform: capitalize;
  }
`

export default () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const { type } = useParams()
  const typeEN = C.typeMapPT_EN(type)
  const { endpoints, savePokemonData, saveEndpointResult } = useContext(
    DataContext
  )

  const offset = 0
  const limit = 50
  const typeEndpoint = `https://pokeapi.co/api/v2/type/${typeEN}?limit=${limit}&offset=${offset}`

  const getPokemonDetail = async pokemonList => {
    const pokeData = await Promise.all(
      pokemonList.map(({ url }) => API.get(url.slice(0, -1)))
    ).then(res => res.filter(Boolean))

    saveEndpointResult({
      url: typeEndpoint,
      result: pokeData,
    })
    savePokemonData(
      pokeData.reduce((acc, cur) => ({ ...acc, [cur.name]: cur }), {})
    )
    setData(pokeData)
  }

  const getPokemonByType = async () => {
    setLoading(true)

    try {
      const { pokemon } = await API.get(typeEndpoint)
      const pokemonMap = pokemon.map(p => p.pokemon)

      setData(pokemonMap)
      getPokemonDetail(pokemonMap.slice(0, limit))
    } catch (err) {
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!type) return

    const cacheData = endpoints[typeEndpoint]
    if (cacheData) return setData(cacheData)

    return getPokemonByType(type)
  }, [type])

  return (
    <TypeContainer>
      {type ? (
        <h1>
          Todos os Pokemons do tipo <span>{type}</span>
        </h1>
      ) : null}
      <Gallery data={data} loading={loading} />
    </TypeContainer>
  )
}
