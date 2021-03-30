import styled from 'styled-components';

export const ButtonsPanel = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    padding: 5px;

    button:hover{
        filter: brightness(0.9);
    }

    @media screen and (max-width: 1400px){
        grid-gap: 0;
        padding: 0;
    }
`;

export const ButtonStandard = styled.button`
    width: 200px;
    height: 10vh;
    margin: 0.5rem;
    border: none;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme.colors.btStandardCalculator};
    color: ${props => props.theme.colors.text};
    font-size: 3rem; 

    @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2) {
        width: 4rem;
    }

    @media screen and (max-width: 720px){
        width: 5rem;
        font-size: 2rem;
    }
`;

export const ButtonOperator = styled.button`
    width: 200px;
    height: 10vh;
    margin: 0.5rem;
    border: none;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme.colors.btOperatorCalculator};
    color: ${props => props.theme.colors.text};
    font-size: 3rem;

    @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2) {
        width: 4rem;
    }

    @media screen and (max-width: 720px){
        width: 5rem;
        font-size: 2rem;
    }
`;

export const ButtonEqual = styled.button`
    width: 200px;
    height: 52vh;
    margin: 0.5rem;
    border: none;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme.colors.btEqualCalculator};
    color: ${props => props.theme.colors.text};
    font-size: 3rem; 
    grid-area: 2 / 4 / 6 / 5;

    @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2) {
        width: 4rem;
    }

    @media screen and (max-width: 720px){
        width: 5rem;
        font-size: 2rem;
    }
`;

export const ButtonAllClear = styled.button`
    width: 200px;
    height: 10vh;
    margin: 0.5rem;
    border: none;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme.colors.btACCalculator};
    color: ${props => props.theme.colors.text};
    font-size: 3rem;

    @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2) {
        width: 4rem;
    }

    @media screen and (max-width: 720px){
        width: 5rem;
        font-size: 2rem;
    }

`;