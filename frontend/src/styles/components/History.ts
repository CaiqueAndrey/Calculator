import styled from 'styled-components';

export const DivHistory = styled.div`
    height: 750px;

    display: flex;
    align-items: center;
    flex-direction: column;

    border: 4px solid ${props => props.theme.colors.screenCalculator};
    border-radius: 10px;
    margin: 1rem;
    background: ${props => props.theme.colors.calculator};

    @media screen and (max-width: 1400px){
        height: 510px;
        margin: 0.5rem;
    }
`;

export const HeaderHistory = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
        

    width: 100%;
    height: 3rem;
    padding: 0.5rem;

    background: ${props => props.theme.colors.screenCalculator};
    color: ${props => props.theme.colors.text};

    span {
        display: flex;
        align-items: center;
        
        .bi-clock-history {
            width: 1.5rem;
            height: 1.5rem;
            margin-left: 0.5rem;
            fill: ${props => props.theme.colors.text};
        }

        strong {
            font-weight: 600;
            font-size: 1.5rem;
            color: ${props => props.theme.colors.text};
            margin-left: 0.5rem;
        }
    }

    

    .bi-trash{
        width: 1.5rem;
        height: 1.5rem;
        fill: ${props=> props.theme.colors.btACCalculator};
        cursor: pointer;
    }
    
`;

export const ListHistory = styled.div`
    width: 100%;
    height: 97%;
    padding: 0.5rem;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }

    border-radius: 5px;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};

    ul{
        list-style-type: none;
        
        display: flex;
        flex-direction:column-reverse;

        p {
            font-size: 1.5rem;
        }
    }

    li {
        padding: 0.5rem 0;
        border-bottom: dashed 1px ${props => props.theme.colors.btOperatorCalculator};

        font-size: 1.5rem;
    }

`;