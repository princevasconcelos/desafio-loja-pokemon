import styled from 'styled-components'

export const Cart = styled.aside`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 100vh;
    padding: 16px;
    background: #f8f8f8;
    background: indigo;
    top: 0;
    right: 0;

    > span {
        font-size: 20px;
    }

    > ul {
        // 
    }
`

export const Amount = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
    font-weight: bold;
`

export const CartItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    border-bottom: 1px solid lightgray;
    

    > div {
        display: flex;
    }

    > span {
        margin-top: 8px;
        white-space: nowrap;
    }
`

export const CounterContainer = styled.div`
    > span {
        text-transform: capitalize;
        margin-top: 8px;
        margin-left: 8px;
    }
`