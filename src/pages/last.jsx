import Header from "../components/last/Header/Header";
import Entry from "../components/last/Entry/Entry";
import Parteum from "../components/last/Parteum/Parteum";
import Outrasprod from "../components/last/Outrasprod/Outrasprod";
import styles from "../css/last.module.css";
import Historia from "../components/last/Historia/Historia";
import Footer from "../components/last/Footer/Footer";


function Last() {
  return (

    <div className={styles.fundo}>
      <Header />
      <Entry />
      <Outrasprod />
      <Parteum />
      <Historia />
      <Footer />
    </div>
  );
}

export default Last;
