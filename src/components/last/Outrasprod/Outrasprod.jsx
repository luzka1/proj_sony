import styles from "./Outrasprod.module.css";

function Outrasprod() {
    return (
        <div>

        <div className={styles.container}>
            
            <div className={styles.titulo}> Se aventure em outras histórias</div>

            <div className={styles.conteudo}>

                <div className={styles.box}>
                    <div className={styles.foto1} />
                    <div className={styles.titulo2}>GOD OF WAR</div>
                    <div className={styles.subtit}>O jogo começa após a morte da segunda esposa de Kratos e mãe de Atreus, Faye. Seu último desejo era que suas cinzas fossem espalhadas no pico mais alto dos nove reinos nórdicos. Antes de iniciar sua jornada, Kratos é confrontado por um homem misterioso com poderes divinos.</div>
                </div>

                <div className={styles.box}>
                <div className={styles.foto2} />
                    <div className={styles.titulo2}>Horizon Zero Dawn</div>
                    <div className={styles.subtit}>Antes de desbravar o Oeste Proibido, reveja a história épica de Aloy, a caçadora de máquinas, em Horizon Zero Dawn. Ela se passa em um mundo pós-apocalíptico onde a natureza retomou as ruínas do Velho Mundo e máquinas colossais dominam os ermos verdejantes.</div>
                </div>
                
            </div>

        </div>
        </div>

    );
}

export default Outrasprod;
