import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import DataContext from 'contexts/data'
import { menus } from 'utils/constraints'

import * as S from './styles'

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
