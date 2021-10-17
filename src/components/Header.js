//import img from "../imgs/library.png";
import styles from "../css/Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <figure className={styles.logoHeader}>
          <img
            className={styles.logo}
            src="https://i.pinimg.com/originals/b9/12/80/b91280364e12594bea63ae99ccc2767e.png"
            alt="Logo-LibreríaBedu"
          />
        </figure>
        <p className={styles.titulo}>Librería Bedu</p>
        <ul className={styles.menu}>
          <li className={styles.menuItems}>Libros</li>
          <li className={styles.menuItems}>Comentarios</li>
          <li className={styles.menuItems}>Autores</li>
          <li className={styles.menuItems}>Usuarios</li>
          <li className={styles.menuItems}>Acerca de</li>
        </ul>
      </nav>
    </header>
  );
}
