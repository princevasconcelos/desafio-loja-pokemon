import React, {useContext, useState} from 'react'
import * as S from './styles'
import { ThemeContext } from 'styled-components';
import {Link} from 'react-router-dom'

import DataContext from 'contexts/data'

import {
    GiSmallFire,
    GiWaterDrop,
    GiHighGrass,
    GiPowerLightning,
    GiLongAntennaeBug,
    GiDragonHead,
    GiGhost,
    GiConsoleController
} from "react-icons/gi";

const menus = [
    {
        displayName: 'Fogo',
        url: 'fogo',
        urlEn: 'fire',
        icon: () => <GiSmallFire size="32px" />
    },
    {
        displayName: 'Água',
        url: 'agua',
        urlEn: 'water',
        icon: () => <GiWaterDrop size="32px" />
    },
    {
        displayName: 'Grama',
        url: 'grama',
        urlEn: 'grass',
        icon: () => <GiHighGrass size="32px" />
    },
    {
        displayName: 'Elétrico',
        url: 'eletrico',
        urlEn: 'electric',
        icon: () => <GiPowerLightning size="32px" />
    },
    {
        displayName: 'Inseto',
        url: 'inseto',
        urlEn: 'bug',
        icon: () => <GiLongAntennaeBug size="32px" />
    },
    {
        displayName: 'Dragão',
        url: 'dragao',
        urlEn: 'dragon',
        icon: () => <GiDragonHead size="32px" />
    },
    {
        displayName: 'Fantasma',
        url: 'fantasma',
        urlEn: 'ghost',
        icon: () => <GiGhost size="32px" />
    }
]

// const removeAccents = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

export default () => {
    const [selected, setSelected] = useState('')
    const themeContext = useContext(ThemeContext)
    const {theme, changeTheme} = useContext(DataContext)
    // console.log('prince', themeContext)
    const handleClick = selectedType => {
        localStorage.setItem('theme', selectedType)
        setSelected(selectedType)
        // changeTheme(selectedType)
    }

    return (
        <S.NavContainer>
            <ul>
                {menus.map(({ displayName, icon, url, urlEn }) => (
                    <Link key={displayName} to={`/tipo/${url}`}>
                        <S.MenuItem key={url} selected={selected}  itemColor={urlEn}>
                            <button onClick={() => handleClick(urlEn)}>
                                {icon()}
                                <span>{displayName}</span>
                            </button>
                        </S.MenuItem>
                    </Link>
                ))}
            </ul>
        </S.NavContainer>
    )
}
