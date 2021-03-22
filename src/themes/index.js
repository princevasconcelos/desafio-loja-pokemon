const types = {
    normal: {
      colors: {
        primary: "white",
      },
    },
    fire: {
      colors: {
        primary: "#de5239",
      },
    },
    water: {
      colors: {
        primary: "#8bc5cd",
      },
    },
    grass: {
      colors: {
        primary: "#62d5b4",
      },
    },
    electric: {
      colors: {
        primary: "#f6bd20",
      },
    },
    bug: {
      colors: {
        primary: "#A8B820",
      },
    },
    dragon: {
      colors: {
        primary: "#705848",
      },
    },
    ghost: {
      colors: {
        primary: "#705898",
      },
    },
  };

const global = {
  colors: {
    fire: '#de5239',
    water: '#8bc5cd',
    grass: '#62d5b4',
    electric: '#f6bd20',
    bug: '#A8B820',
    dragon: '#705848',
    ghost: '#705898'
  }
}

export default type => ({
  ...global,
  ...types[type]
})