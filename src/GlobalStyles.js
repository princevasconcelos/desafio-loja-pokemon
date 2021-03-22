import { createGlobalStyle } from "styled-components";
import "@fontsource/montserrat";

export default createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

    body {
        font-family: 'Montserrat';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
		position: relative;
	}

	a {
		text-decoration: none;
		color: #333;
	}

	button {
		cursor: pointer;
        border: none;
		outline: none;
		background: transparent;
		font-size: 16px;
	}

	h1,h2,h3 {
		text-align: center;
	}

    ul {
        list-style: none;
    }
`;
