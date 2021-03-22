import { useContext } from 'react';
import { CalculatorContext } from '../contexts/CalculatorContext';
import styles from '../styles/components/Button.module.css';

interface ButtonProps{
    value: string;
    clickHandler: () => void;
}

export function Button(props: ButtonProps) {
    
    return (
        <button className={styles.buttonCalculator} onClick={()=>props.clickHandler()}>
            {props.value}
        </button>
            
    );
}