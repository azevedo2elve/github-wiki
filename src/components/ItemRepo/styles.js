import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3{
        font-size: 32px;
        color: #FAFAFA;
    }

    p{
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        background-color: #FAFAFA;
        border-radius: 5px;
        padding: 5px;
        color: black;
        width: 30%;
        text-align: center;
        transition: 0.2s;
        font-size: 14px;

        &:hover {
            background-color: #C0C0C0;
        }
    }

    a.remover {
        color: #FFFF;
        background-color: #FF0000;

        &:hover {
            background-color: #900000;
        }
    }

    hr {
        color #fafafa;
        margin: 20px 0;
    }

    .links {
        display: flex;
        flex-direction: column;
    }
`