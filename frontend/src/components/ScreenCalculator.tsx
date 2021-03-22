import { useContext } from 'react';
import { CalculatorContext } from '../contexts/CalculatorContext';
import styles from '../styles/components/ScreenCalculator.module.css';

export function ScreenCalculator() {
    const { valuesDisplay } = useContext(CalculatorContext);

    return (
        <div className={styles.screenContainer}>
            <div>
                <span>{valuesDisplay}</span>
            </div>
        </div>
    )
}