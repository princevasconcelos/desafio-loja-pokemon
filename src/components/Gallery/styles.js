import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    gap: 32px 64px;
    justify-content: center;
    margin-top: 24px;
`

export  const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
    padding: 16px 16px 32px;

    &:hover {
        background: #f8f9fa;

        button {
            bottom: 0;
        }
    }

    > button {
        position: absolute;
        font-weight: 700;
        height: 24px;
        width: 100%;
        color: white;
        background: ${props => props.theme.colors.primary};
        bottom: -24px;
        transition: all .1s;
        outline: none;
    }
` 

export const ItemLink = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 98px;
    text-align: center;

    > h3 {
        font-weight: 700;
        text-transform: capitalize;
    }

    > span {
        font-weight: 700;
        opacity: 0.7;
        font-size: 14px;
        margin-top: 4px;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    min-height: 98px;

    > img {
        position: absolute;
        width: 98px;
        top: 0;
        left: 0;
    }
`