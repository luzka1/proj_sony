import styles from "./Footer.module.css";

function Footer() {
    return (

        <footer className={styles.container}>
            <div className={styles.footer}>
                <nav>
                    <div className={styles.item}>HOME</div>
                    <div className={styles.logo}>the last of us <p>part ii</p></div>
                    <div className={styles.item}>ORDER</div>
                </nav>
            <div className={styles.coded}>
                <text>coded by: lucasgsantos1727@gmail.com</text>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
