import React, {useState, useEffect, useContext} from 'react'
import { useParams, useHistory, Link } from "react-router-dom";

import DataContext from 'contexts/data'
import API from "service";
import Loading from 'components/Loading'
import Button from 'components/Button'

import * as S from './styles'
import * as H from 'utils/helpers'

export default () => {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const { pokemons, saveEndpointResult, savePokemonData, buyPokemon } = useContext(DataContext)
    const { name } = useParams();
    const history = useHistory()
    const pokeDetailEndpoint = 'https://pokeapi.co/api/v2/pokemon/'+name

    const handleBuyButton = () => buyPokemon(name)

    useEffect(() => {
        console.log('prince', name)
        if (!name) return

        const cacheData = pokemons[name]
        console.log('prince', cacheData)
        if (cacheData) return setData(cacheData)

        getPokemonDetails()
    }, [name])

    const handleBack = () => history.goBack()

    const getPokemonDetails = async () => {
        setLoading(true);
    
        try {
            const pokemon = await API.get(pokeDetailEndpoint)
            console.log('prince try pokemon', pokemon)

            
            if (!pokemon) {
                alert(4044)
                return setError(`Nenhum resultado encontrado para "${name}"`)
            }
            alert(200)
            setData(pokemon);
            saveEndpointResult({
                url: pokeDetailEndpoint,
                result: pokemon,
            })
            savePokemonData({
                [name]: pokemon
            })
        } catch (err) {
            if (err.response.status === 404) {
                alert(404)
                setError(`Nenhum resultado encontrado para "${name}"`)
            }
        }
        finally {
            setLoading(false);
        }
    };

    if (loading) return <div><Loading /></div>

    if (!name) return <S.Message>Pesquise o nome do pokemon no pesquisar acima</S.Message>

    if (error) return <S.Message>{error}</S.Message>

    if (Object.keys(data).length === 0) return <S.Message>Não existem informações para esse pokemon</S.Message>

    const { stats, moves, abilities, sprites, weight } = data

    return (
        <S.DetailsContainer>
            <button onClick={handleBack}>Voltar</button>
            <S.ImageContainer>
                <img src={sprites.other.dream_world.front_default} />
                <S.Heading>{name}</S.Heading>
                <span>R$ {H.priceFormat(weight)}</span>
                <Button onClick={handleBuyButton}>Comprar</Button>
            </S.ImageContainer>
            <S.TextsContainer>
                <S.List>
                    <h3>Informações</h3>
                    <ul>
                        {stats.map(({ base_stat, stat}) => (
                            <li key={stat.name}>
                                <span>{stat.name}</span>
                                <span>{base_stat}</span>
                            </li>
                        ))}
                    </ul>
                </S.List>

                <S.List>
                    <h3>Poderes</h3>
                    <ul>
                        {moves.map(({ move, stat}) => (
                            <li key={move.name}>
                                <span>{move.name}</span>
                            </li>
                        ))}
                    </ul>
                </S.List>

                <S.List>
                    <h3>Habilidades</h3>
                    <ul>
                        {abilities.map(({ ability}) => (
                            <li key={ability.name}>
                                <span>{ability.name}</span>
                            </li>
                        ))}
                    </ul>
                </S.List>
            </S.TextsContainer>
        </S.DetailsContainer>
    )

}