import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  GiSmallFire,
  GiWaterDrop,
  GiHighGrass,
  GiPowerLightning,
  GiLongAntennaeBug,
  GiDragonHead,
  GiGhost,
} from 'react-icons/gi'

import DataContext from 'contexts/data'

import * as S from './styles'

const menus = [
  {
    displayName: 'Fogo',
    url: 'fogo',
    urlEn: 'fire',
    icon: () => <GiSmallFire size="32px" />,
  },
  {
    displayName: 'Água',
    url: 'agua',
    urlEn: 'water',
    icon: () => <GiWaterDrop size="32px" />,
  },
  {
    displayName: 'Grama',
    url: 'grama',
    urlEn: 'grass',
    icon: () => <GiHighGrass size="32px" />,
  },
  {
    displayName: 'Elétrico',
    url: 'eletrico',
    urlEn: 'electric',
    icon: () => <GiPowerLightning size="32px" />,
  },
  {
    displayName: 'Inseto',
    url: 'inseto',
    urlEn: 'bug',
    icon: () => <GiLongAntennaeBug size="32px" />,
  },
  {
    displayName: 'Dragão',
    url: 'dragao',
    urlEn: 'dragon',
    icon: () => <GiDragonHead size="32px" />,
  },
  {
    displayName: 'Fantasma',
    url: 'fantasma',
    urlEn: 'ghost',
    icon: () => <GiGhost size="32px" />,
  },
]

export default () => {
  const { theme, changeTheme } = useContext(DataContext)
  const [selected, setSelected] = useState(theme)

  useEffect(() => {
    setSelected(theme)
  }, [theme])

  const handleClick = selectedType => changeTheme(selectedType)

  return (
    <S.NavContainer>
      <ul>
        {menus.map(({ displayName, icon, url, urlEn }) => (
          <Link key={displayName} to={`/tipo/${url}`}>
            <S.MenuItem key={url} selected={selected} itemColor={urlEn}>
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
