import styles from '../styles/components/Header.module.css';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <span>
                <img src="img/calculator.svg" alt="calculator" />
                <strong>Calculator</strong>
            </span>
        </header>
    );
}