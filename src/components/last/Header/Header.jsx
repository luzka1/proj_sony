import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <div className={styles.item}>home</div>
        </li>
        <li>
          <div className={styles.logo}>
            the last of us <p>part ii</p>
          </div>
        </li>
        <li>
          <div className={styles.button}>
            <text>order</text>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
