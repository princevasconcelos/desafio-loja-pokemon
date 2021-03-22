import styled from 'styled-components'

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 0;

    h1 {
        font-size: 64px;
    }

    > a {
        font-weight: 700;

        @media (min-width: 600px) {
            margin-left: 24px;
        }

        &:hover {
            text-decoration: underline;
        }
    }
`

export const Message = styled.span`
    font-size: 20px;
`

export const Heading = styled.h1`
    text-transform: capitalize;
    width: 100%;
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0;

    > img {
        max-width: 200px;
    }

    > h1 {
        font-size: 16px;
    }

    button {
        margin: 24px 0 0;
    }

    span {
        font-size: 22px;
        margin-top: 8px;
        white-space: nowrap;
    }

    @media (min-width: 600px) {
        margin: 0;

        > img {
            max-width: 1200px;
        }

        > h1 {
            font-size: 64px;
        }
    }

    
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 500px;

    ul {
        border: 2px solid black;
        padding: 8px;
        overflow: auto;
    }


    li {
        min-width: 200px;
        display: flex;
        justify-content: space-between;
        margin-top: 16px;

        span {
            text-transform: capitalize;
        }
    }
`

export const TextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 32px;

    @media (min-width: 600px) {
        flex-direction: row;
    }

    > div {
        margin: 16px 0;
    }
`