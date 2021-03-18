import styles from '../styles/components/Calculator.module.css';
import { ButtonsPanelCalculator } from './ButtonsPanelCalculator';
import { ScreenCalculator } from './ScreenCalculator';

export function Calculator() {
    return (
        <div className={styles.calculatorContainer}>
            <>
                <ScreenCalculator/>
                <ButtonsPanelCalculator/>
            </>
        </div>
    );
}