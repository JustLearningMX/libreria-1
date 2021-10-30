//Componente que dibuja el total de páginas debajo de otro componente
//items pueden ser libros, autores, etc.
// import { useRouteMatch } from "react-router";
// import { Link } from "react-router-dom";
import styles from "../css/LibrosGrid.module.css"; //Modulo de estilos para este componente

export function Pagination({ itemsPerPage, totalItems, paginated }) {
  const pageNumbers = []; //Arreglo para el número de páginas del JSON según datosrecibidos

  /**URL PARAMS CON EL PAGINADO */
  // let { path, url } = useRouteMatch();

  //Total de páginas: totalLibros / librosPorPagina, se redondea hacia arriba
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i); //Vamos agregando número de página obtenida al arreglo
  }

  return (
    <nav className={styles.paginationContainer}>
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber} className={styles.paginationItems}>
          <button
            onClick={() => paginated(pageNumber)}
            className={styles.paginationButton}>
            {pageNumber}
          </button>
        </li>
        // {`${url}` / `${number}`}>        
        // <Link to={`${path}?page=${pageNumber}`}> 
        //   <li
        //     key={pageNumber}
        //     className={`${styles.paginationItems} ${styles.paginationButton}`}
        //     onClick={() => paginated(pageNumber)}
        //   >
        //     {pageNumber}
        //   </li>
        // </Link>
      ))}
    </nav>
  );
}
