import styles from '../styles/components/ButtonsPanelCalculator.module.css';
import { Button } from './Button';

export function ButtonsPanelCalculator() {
    return (
        <div className={styles.buttonsPanelContainer}>
            <div>
                <Button value={'AC'} />
                <Button value={'+/-'}/>
                <Button value={'%'}/>
                <Button value={'/'}/>
            </div>
            <div>
                <Button value={'7'}/>
                <Button value={'8'}/>
                <Button value={'9'}/>
                <Button value={'*'}/>
            </div>
            <div>
                <Button value={'4'}/>
                <Button value={'5'}/>
                <Button value={'6'}/>
                <Button value={'-'}/>
            </div>
            <div>
                <Button value={'1'}/>
                <Button value={'2'}/>
                <Button value={'3'}/>
                <Button value={'+'}/>
            </div>
            <div>
                <Button value={'0'}/>
                <Button value={'.'}/>
                <Button value={'='}/>

            </div>
        </div>
    );
}