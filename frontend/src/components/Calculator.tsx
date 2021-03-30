import { Div } from '../styles/components/Calculator';
import { ButtonsPanelCalculator } from './ButtonsPanelCalculator';
import { ScreenCalculator } from './ScreenCalculator';

export function Calculator() {
    return (
        <Div>
            <>
                <ScreenCalculator/>
                <ButtonsPanelCalculator/>
            </>
        </Div>
    );
}