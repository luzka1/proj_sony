import styles from "./Entry.module.css";

function Entry() {
    return (
        <div>

        <div className={styles.container}>
            <div className={styles.tit}>
                <div className={styles.titulo}>
                    <div className={styles.esquerda}>
                    <p>a</p>
                    <p>simple</p>
                    <p>revenge</p>
                    <p>story</p>
                    </div>
                    <div className={styles.direita}>Conheça mais sobre essa história fantástica de uma maneira simples.</div>
                </div>
                
            </div>
            <div className={styles.particulas} />
        </div>
        
        </div>
        
        

    );
}

export default Entry;
