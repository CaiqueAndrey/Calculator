import { useContext } from 'react';
import { CalculatorContext } from '../contexts/CalculatorContext';
import styles from '../styles/components/ButtonsPanelCalculator.module.css';

export function ButtonsPanelCalculator() {
//  https://jsfiddle.net/ayoisaiah/v7usehxw/27/
    const { actions } = useContext(CalculatorContext);

    return (
        <div className={styles.buttonsPanelContainer}>
            <button className={styles.btOperator} onClick={()=>actions("+")}>+</button>
            <button className={styles.btOperator} onClick={()=>actions("-")}>-</button>
            <button className={styles.btOperator} onClick={()=>actions("*")}>&times;</button>
            <button className={styles.btOperator} onClick={()=>actions("/")}>&divide;</button>
    
            <button className={styles.btStandard} onClick={()=>actions("7")}>7</button>
            <button className={styles.btStandard} onClick={()=>actions("8")}>8</button>
            <button className={styles.btStandard} onClick={()=>actions("9")}>9</button>

            <button className={styles.btStandard} onClick={()=>actions("4")}>4</button>
            <button className={styles.btStandard} onClick={()=>actions("5")}>5</button>
            <button className={styles.btStandard} onClick={()=>actions("6")}>6</button>
        
            <button className={styles.btStandard} onClick={()=>actions("1")}>1</button>
            <button className={styles.btStandard} onClick={()=>actions("2")}>2</button>
            <button className={styles.btStandard} onClick={()=>actions("3")}>3</button>
        
            <button className={styles.btStandard} onClick={()=>actions("0")}>0</button>
            <button className={styles.btStandard} onClick={()=>actions(".")}>.</button>
            <button className={styles.btAllClear} onClick={()=>actions("all-clear")}>AC</button>
            <button className={styles.btEqual} onClick={()=>actions("=")}>=</button>
        </div>
    );
}