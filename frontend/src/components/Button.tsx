import styles from '../styles/components/Button.module.css';

interface ButtonProps{
    value: string;
}

export function Button(props : ButtonProps) {
    return (
        <button className={styles.buttonCalculator}>
            {props.value}
        </button>
            
    );
}