import { useContext } from 'react';
import { CalculatorContext } from '../contexts/CalculatorContext';
import styles from '../styles/components/ButtonsPanelCalculator.module.css';
import { Button } from './Button';

export function ButtonsPanelCalculator() {
    const {setOperator} = useContext(CalculatorContext);

    return (
        <div className={styles.buttonsPanelContainer}>
            <div>
                <Button value={'AC'}  clickHandler={()=>setOperator('%')}/>
                <Button value={'+/-'} clickHandler={()=>setOperator('%')}/>
                <Button value={'%'} clickHandler={()=>setOperator('%')}/>
                <Button value={'÷'} clickHandler={()=>setOperator('/')}/>
            </div>
            <div>
                <Button value={'7'} clickHandler={()=>setOperator('%')}/>
                <Button value={'8'} clickHandler={()=>setOperator('%')}/>
                <Button value={'9'} clickHandler={()=>setOperator('%')}/>
                <Button value={'x'} clickHandler={()=>setOperator('*')}/>
            </div>
            <div>
                <Button value={'4'} clickHandler={()=>setOperator('%')}/>
                <Button value={'5'} clickHandler={()=>setOperator('%')}/>
                <Button value={'6'} clickHandler={()=>setOperator('%')}/>
                <Button value={'-'} clickHandler={()=>setOperator('-')}/>
            </div>
            <div>
                <Button value={'1'} clickHandler={()=>setOperator('%')}/>
                <Button value={'2'} clickHandler={()=>setOperator('%')}/>
                <Button value={'3'} clickHandler={()=>setOperator('%')}/>
                <Button value={'+'} clickHandler={()=>setOperator('+')}/>
            </div>
            <div>
                <Button value={'0'} clickHandler={()=>setOperator('%')}/>
                <Button value={'.'} clickHandler={()=>setOperator('%')}/>
                <Button value={'='} clickHandler={()=>setOperator('=')}/>
            </div>
        </div>
    );
}