import styles from "./Parteum.module.css";

function Parteum() {
    return (

        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.esquerda}>

                    <div className={styles.titulo}>Part I</div>
                    <div className={styles.subtit}>A história que antecede todos os novos acontecimentos</div>

                    <div className={styles.sinopse}>
                        <div className={styles.foto} />
                        <div className={styles.conteudo}>
                            Uma surtagem de uma mutação do fungo Cordyceps arrasa os Estados Unidos em setembro de 2013, transformando seus hospedeiros humanos em monstros canibalísticos chamados de Infectados. Joel foge do caos dos subúrbios de Austin, Texas, junto com seu irmão Tommy e sua filha Sarah. Esta acaba baleada por um soldado durante a fuga e morre nos braços do pai. A maior parte da civilização humana acaba destruída no decorrer dos vinte anos seguintes. Sobreviventes vivem em zonas de quarentena altamente policiadas, em assentamentos independentes e em grupos nômades.
                        </div>
                    </div>

                </div>
                <div className={styles.imgfundo} />
            </div>


        </div>
    );
}

export default Parteum;
