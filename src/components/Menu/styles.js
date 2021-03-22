import styled from "styled-components";

export const NavContainer = styled.nav`
    background: #333;

    ul {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        a {
            min-width 90px;
            flex: 1;
        }
    }

    
`

export const MenuItem = styled.li`
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    position: relative;

    
    background: ${props => props.selected === props.itemColor
        ? props.theme.colors[props.itemColor]
        : '#eee'};

    &:hover {
        background: ${props => props.theme.colors[props.itemColor]};
    }

    button {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        font-weight: 700;
        text-transform: uppercase;

        > span {
            display: none;

            @media (min-width: 600px) {
                display: inline;
            }
        }

        

        svg {
            margin-bottom: 8px;
        }
    }
`