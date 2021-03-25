import { useContext, useEffect } from 'react';
import { CalculatorContext } from '../contexts/CalculatorContext';
import styles from '../styles/components/ScreenCalculator.module.css';

export function ScreenCalculator() {
    const { displayValue } = useContext(CalculatorContext);
    

    useEffect(()=>{
        
    },[displayValue]);

    return (
        <div className={styles.screenContainer}>
            <input type="text" className={styles.screenInput} value={displayValue} disabled />
        </div>
    )
}