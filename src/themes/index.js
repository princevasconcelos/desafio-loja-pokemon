const types = {
  normal: {
    colors: {
      primary: '#333',
      tertiary: 'white',
    },
  },
  fire: {
    colors: {
      primary: '#de5239',
      secondary: '#dea539',
      tertiary: 'white',
    },
  },
  water: {
    colors: {
      primary: '#8bc5cd',
      tertiary: 'white',
    },
  },
  grass: {
    colors: {
      primary: '#62d5b4',
      tertiary: 'white',
    },
  },
  electric: {
    colors: {
      primary: '#f6bd20',
      tertiary: 'white',
    },
  },
  bug: {
    colors: {
      primary: '#A8B820',
      tertiary: 'white',
    },
  },
  dragon: {
    colors: {
      primary: '#7038F8',
      tertiary: 'white',
    },
  },
  ghost: {
    colors: {
      primary: '#705898',
      tertiary: 'white',
    },
  },
}

const global = {
  fire: '#de5239',
  water: '#8bc5cd',
  grass: '#62d5b4',
  electric: '#f6bd20',
  bug: '#A8B820',
  dragon: '#7038F8',
  ghost: '#705898',
}

export default theme => ({
  colors: {
    ...global,
    ...(theme && { ...types[theme].colors }),
  },
})
