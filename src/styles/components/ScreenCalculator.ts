import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    height: 12vh;
    margin: 0;

    background: ${props => props.theme.colors.calculator};

    display:flex;

    border-radius: 10px 10px 0 0;

    input {
        width: 100%;
        margin: 7px;
        border: none;
        border-radius: 3px;

        display: flex;
        text-align: end;

        background: ${props => props.theme.colors.screenCalculator};
        color: ${props => props.theme.colors.text};
        font-size: 5rem;
        font-weight: 600;
    }


    @media screen and (max-width: 768px){
        input{
            font-size: 3rem;
        }
    }

    @media screen and (max-width:1400px){
        input {
            font-size: 3rem;
        }
    }
`;