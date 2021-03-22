import { createContext, ReactNode, useState } from "react";

interface CalculatorContextData {
    sum: () => void;
    subtract: () => void;
    multiply: () => void;
    divide: () => void;
    result: number;
    reset: () => void;
    valuesDisplay: number;
    setOperator: (operator:string)=> void;
}

interface CalculatorProviderProps {
    children: ReactNode;
}

export const CalculatorContext = createContext({} as CalculatorContextData)

export function CalculatorProvider({children}: CalculatorProviderProps) {
    
    const [operatingOne, setOperatingOne] = useState(0);
    const [operatingTwo, setOperatingTwo] = useState(0);
    const [isOperator, setIsOperator] = useState(null);
    const [result, setResult ] = useState(0);
    const [valuesDisplay, setValuesDisplay] = useState(0);

    function reset() {
        setValuesDisplay(0);
        setOperatingOne(0);
        setOperatingTwo(0);
        setOperator(null);
        setResult(null);
    }

    function sum(){
        setResult(operatingOne + operatingTwo);
    }

    function subtract() {
        setResult(operatingOne - operatingTwo);
    }

    function multiply() {
        setResult(operatingOne * operatingTwo);
    }

    function divide() {
        setResult(operatingOne / operatingTwo);
    }

    function setOperator(operator: string) {
        setIsOperator(operator);
        console.log(isOperator);
    }

    return (
        <CalculatorContext.Provider value={{
            sum,
            subtract,
            multiply,
            divide, 
            result,
            reset,
            valuesDisplay, 
            setOperator
        }}>
            {children}
        </CalculatorContext.Provider>
    )
}