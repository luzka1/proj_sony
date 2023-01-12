import styles from "./Header.module.css";

function Header() {
    return (

        <nav className={styles.header}>
            <ul>
                <div className={styles.esquerda}>
                    <li>
                        <div className={styles.item}>home</div>
                    </li>
                </div>
                <li>
                    <div className={styles.logo}>the last of us <p>part ii</p></div>
                </li>
                <div className={styles.direita}>
                    <li>
                        <div className={styles.button}><text>order</text></div>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Header;
