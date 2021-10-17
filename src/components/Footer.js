import styles from "../css/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h1 className={styles.h1_}>Equipo conformado por:</h1>
        <p className={styles.p_}>Justine Delgado</p>
        <p className={styles.p_}>Hiram Chávez López</p>
        <p className={styles.p_}>David Rivera Orozco</p>
        <p className={styles.p_}>Erick Carranza Meza</p>
        <p className={styles.p_}>Jesús Salvador Uribe</p>
      </div>
    </footer>
  );
}
