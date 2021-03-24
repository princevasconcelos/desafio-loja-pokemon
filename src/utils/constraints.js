import React from 'react'
import {
  GiSmallFire,
  GiWaterDrop,
  GiHighGrass,
  GiPowerLightning,
  GiLongAntennaeBug,
  GiDragonHead,
  GiGhost,
} from 'react-icons/gi'

export const typeMapPT_EN = type =>
  ({
    fogo: 'fire',
    agua: 'water',
    grama: 'grass',
    eletrico: 'electric',
    inseto: 'bug',
    dragao: 'dragon',
    fantasma: 'ghost',
  }[type])

export const menus = [
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