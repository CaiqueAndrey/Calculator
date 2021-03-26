import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    height: 15vh;
    margin: 0;
    background: var(--blue);

    display: flex;
    justify-content: center;
    align-items: center;

    .strong {
        font-weight: 600;
        font-size: 3rem;
        color: var(--title);
        margin-left: 1rem;
    }

    .img{
        width: 2rem;
        height: 2rem;
    }

    @media screen and (max-width:720px){
        .strong {
            font-size: 2rem;
            margin-left: 0.5rem;
        }

        .img{
            width: 1.8rem;
            height: 1.8rem;
        }
    }

    @media screen and (max-width:1400px){
        .strong {
            font-size: 2.5rem;
            margin-left: 0.5rem;
        }

        .img{
            width: 2rem;
            height: 2rem;
        }
    }
`;