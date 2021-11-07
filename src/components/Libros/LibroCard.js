// COMPONENTE QUE DIBUJA UNA TARJETA QUE MUESTRA UNA IMAGEN DE UN LIBRO Y SU TÍTULO

import { Link } from "react-router-dom";
import styles from "../../css/LibroCard.module.css"; //Estilos para este componente
import { coverBookIntoLarge } from "../../utils/coverBookIntoLarge";
import PropTypes from 'prop-types'; //Validación de propiedades

export function LibroCard({ libro }) {
  //Obtenemos un link nuevo con una imagen de mejor calidad
  const linkCoverBookLarge = coverBookIntoLarge(libro.image_url,"/");

  //El Link lleva a una página que muestra a detalle un libro
  //El elemento "li" dibuja una tarjeta por cada libro que recibe
  return (
    <Link className={styles.linkCard} to={"/libros/id/" + libro._id}>
      <li className={styles.libroCard}>
        <img
          // width={200}
          // height={435}
          className={styles.imgGrid}
          src={linkCoverBookLarge}
          alt={libro.title}
        />
        <div className={styles.titleContainer}>
          <p className={styles.title}> {libro.title}</p>
        </div>
      </li>
  </Link>
  );
}

LibroCard.propTypes = {
  libro: PropTypes.object.isRequired
}