import styles from "../../css/BookNotFound.module.css"; //
import PropTypes from 'prop-types'; //Validación de propiedades

export function BookNotfound({ error }) {
  const mensaje =
    error[0].error === 404
      ? "No existe un libro con ese título"
      : "Error en el servidor o algo peor :(";

  return (
    <div className={styles.notFoundcontainer}>
      <h1>{mensaje}</h1>
    </div>
  );
}

BookNotfound.propTypes = {
  error: PropTypes.array.isRequired
}