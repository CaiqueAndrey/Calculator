import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    border: 4px solid var(--screenCalculator);
    border-radius: 10px;
    margin: 1rem;
    background: var(--backgroundCalculator);

    @media screen and (max-width: 1400px){
        margin: 0.5rem;
    }
`;