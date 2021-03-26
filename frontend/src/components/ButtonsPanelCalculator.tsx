import { useContext } from 'react';
import { CalculatorContext } from '../contexts/CalculatorContext';
import { ButtonAllClear, 
        ButtonEqual, 
        ButtonOperator, 
        ButtonStandard, 
        ButtonsPanel
}  from '../styles/components/ButtonsPanelCalculator';

export function ButtonsPanelCalculator() {

    const { actions } = useContext(CalculatorContext);

    return (
        <ButtonsPanel>
            <ButtonOperator onClick={()=>actions("+")}>+</ButtonOperator>
            <ButtonOperator onClick={()=>actions("-")}>-</ButtonOperator>
            <ButtonOperator onClick={()=>actions("*")}>&times;</ButtonOperator>
            <ButtonOperator onClick={()=>actions("/")}>&divide;</ButtonOperator>
    
            <ButtonStandard onClick={()=>actions("7")}>7</ButtonStandard>
            <ButtonStandard onClick={()=>actions("8")}>8</ButtonStandard>
            <ButtonStandard onClick={()=>actions("9")}>9</ButtonStandard>

            <ButtonStandard onClick={()=>actions("4")}>4</ButtonStandard>
            <ButtonStandard onClick={()=>actions("5")}>5</ButtonStandard>
            <ButtonStandard onClick={()=>actions("6")}>6</ButtonStandard>
        
            <ButtonStandard onClick={()=>actions("1")}>1</ButtonStandard>
            <ButtonStandard onClick={()=>actions("2")}>2</ButtonStandard>
            <ButtonStandard onClick={()=>actions("3")}>3</ButtonStandard>
        
            <ButtonStandard onClick={()=>actions("0")}>0</ButtonStandard>
            <ButtonStandard onClick={()=>actions(".")}>.</ButtonStandard>
            <ButtonAllClear onClick={()=>actions("all-clear")}>AC</ButtonAllClear>
            <ButtonEqual onClick={()=>actions("=")}>=</ButtonEqual>
        </ButtonsPanel>
    );
}