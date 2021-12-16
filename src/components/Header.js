//ENCABEZADO DEL SITIO: LOGO, NOMBRE DE LA EMPRESA Y MENÚ PRINCIPAL
import styles from "../css/Header.module.css"; //Estilos para el header
import { Link } from "react-router-dom"; //Para enlazar el menú con sus respectivas páginas
import { Avatar } from '@mui/material';
import { MenuBookTwoTone } from '@mui/icons-material';

/** Link to:
 * "/" --> Página principal
 * "/libros" --> Página de libros
 * "/comentarios" --> Página de comentarios
 * "/autores" --> Página de autores
 * "/usuarios" --> Página de usuarios */

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/">
          <div className={styles.empresaContainer}>
            <figure className={styles.logoHeader}>
              {/* <img
                className={styles.logo}
                src="https://i.pinimg.com/originals/b9/12/80/b91280364e12594bea63ae99ccc2767e.png"
                alt="Logo-LibreríaBedu"
              /> ****/}
              <Avatar 
                // sx={{ backgroundColor: stringToColor(nombre) }}
                alt="Logo-flipbook"
                src={<MenuBookTwoTone />}
              />
            </figure>
            <p className={styles.titulo}>Librería Bedu</p>
          </div>
        </Link>
        <ul className={styles.menu}>
          <Link to="/libros">
            <li className={styles.menuItems}>Libros</li>
          </Link>
          <Link to="/comentarios">
            <li className={styles.menuItems}>Comentarios</li>
          </Link>
          <Link to="/autores">
            <li className={styles.menuItems}>Autores</li>
          </Link>
          <Link to="/usuarios">
            <li className={styles.menuItems}>Usuarios</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}