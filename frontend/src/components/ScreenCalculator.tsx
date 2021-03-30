import { useContext, useEffect } from 'react';
import { CalculatorContext } from '../contexts/CalculatorContext';
import { Div } from '../styles/components/ScreenCalculator';

export function ScreenCalculator() {
    const { displayValue } = useContext(CalculatorContext);
    

    useEffect(()=>{
        
    },[displayValue]);

    return (
        <Div>
            <input type="text" value={displayValue} disabled />
        </Div>
    )
}