import React, {useContext} from 'react'

import DataContext from 'contexts/data'
import Loading from 'components/Loading'

import * as H from 'utils/helpers'
import * as S from './styles'

export default ({ data, loading }) => {
    if (loading) return <Loading />
    
    if (data.length === 0) return <div>Nenhum resultado encontrado</div>

    const { buyPokemon } = useContext(DataContext)

    const handleBuyButton = name => buyPokemon(name)

    return (
        <S.List>
            {data.map(({ name, weight, sprites}) => (
                <S.Item key={name}>
                    <S.ItemLink to={`/pokemon/${name}`}>
                        <S.ImageContainer>
                            {sprites
                                ? <img src={sprites.front_default} alt={`A front image of ${name}`} />
                                : <Loading size="2px" />}
                        </S.ImageContainer>
                        {/* {sprites && sprites.length > 0
                            ? <ImageContainer>
                                {sprites.map(({ front_default, alt}) => <img src={url} alt={alt} />)}
                            </ImageContainer>
                            : <Loading size="2px" />} */}
                        <h3>{name}</h3>
                        {weight ? <span>R$ {H.priceFormat(weight)}</span> : null}
                    </S.ItemLink>
                    <button onClick={() => handleBuyButton(name)}>COMPRAR</button>
                </S.Item>
            ))}
        </S.List>
    )
}