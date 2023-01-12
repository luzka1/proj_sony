import styles from "./Historia.module.css";

function Historia() {
    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                Part II
            </div>
            <div className={styles.entrada} />

            <div className={styles.historia}>
                <div className={styles.subtitulo}>
                    <p>A Vingança</p>
                    <p>e a Consequência</p>
                </div>
            </div>
            <div className={styles.personagens}>
                <div className={styles.vinganca}>
                    <div className={styles.vigConteudo}>
                        <div className={styles.vigTitulo}>
                            Ellie
                        </div>
                        <div className={styles.vigSubtexto}>
                           A protagonista jogável do jogo. Ellie era anteriormente uma habitante da Zona de Quarentena de Boston e é imune a Cordyceps. Ela volta do jogo original e agora tem dezenove anos e ostenta uma tatuagem na cicatriz da mordida no braço direito. Alimentada pelo ódio, entra em uma busca pessoal de vingança contra pessoas desconhecidas.
                        </div>
                    </div>
                    <div className={styles.pic}>
                        <div className={styles.fotoellie}> </div>
                    </div>
                </div>
                <div className={styles.consequencia}>
                    <div className={styles.conConteudo}>
                        <div className={styles.conTitulo}>
                            Abby
                        </div>
                        <div className={styles.conSubtexto}>
                        A falsa protagonista do jogo. Ex-membro dos Vagalumes, Abby é agora membro da Frente de Libertação de Washington (WLF) e começa o jogo tentando localizar um residente da comunidade em Jackson. Abby é forçada a lidar com as consequências de sua própria busca por vingança.
                        </div>
                    </div>
                    <div className={styles.pic}>
                        <div className={styles.fotoabby}> </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Historia;
