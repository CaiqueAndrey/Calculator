import { useContext } from 'react';
import { Div } from '../styles/components/Header';
import Switch from 'react-switch';
import {shade} from 'polished';
import { ThemeContext } from 'styled-components';

interface HeaderProps {
    toggleTheme(): void;
}

export function Header({toggleTheme}: HeaderProps) {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Div>
            <span>
                <img src="img/calculator.svg" alt="calculator" />
                <strong>Calculator</strong>
            </span>

            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={50}
                handleDiameter={30}
                offColor={shade(0.20, colors.header)}
                onColor={colors.background}
            
            />
            
        </Div>
    );
}