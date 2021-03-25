const types = {
  normal: {
    colors: {
      primary: '#333',
      secondary: 'red',
      tertiary: 'white',
    },
  },
  fire: {
    colors: {
      primary: '#de5239',
      secondary: 'orange',
      tertiary: 'white',
    },
  },
  water: {
    colors: {
      primary: '#8bc5cd',
      secondary: 'purple',
      tertiary: 'white',
    },
  },
  grass: {
    colors: {
      primary: '#62d5b4',
      secondary: 'blue',
      tertiary: 'white',
    },
  },
  electric: {
    colors: {
      primary: '#f6bd20',
      secondary: 'black',
      tertiary: 'white',
    },
  },
  bug: {
    colors: {
      primary: '#A8B820',
      secondary: 'gray',
      tertiary: 'white',
    },
  },
  dragon: {
    colors: {
      primary: '#7038F8',
      secondary: 'crimson',
      tertiary: 'white',
    },
  },
  ghost: {
    colors: {
      primary: '#705898',
      secondary: 'lightcoral',
      tertiary: 'white',
    },
  },
}

const defaultTheme = {
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
    ...defaultTheme,
    ...(theme && { ...types[theme].colors }),
  },
})
