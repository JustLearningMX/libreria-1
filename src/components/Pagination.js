//Componente que dibuja el total de páginas debajo de otro componente
//items pueden ser libros, autores, etc.
import { useEffect } from "react";
import { useHistory } from "react-router";
import styles from "../css/LibrosGrid.module.css"; //Modulo de estilos para este componente
import { useQuery } from "../utils/useQuery"

export function Pagination({ itemsPerPage, totalItems, paginated }) {
  const pageNumbers = []; //Arreglo para el número de páginas del JSON según datosrecibidos

  //Total de páginas: totalLibros / librosPorPagina, se redondea hacia arriba
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i); //Vamos agregando número de página obtenida al arreglo
  }

  //Se obtiene página actual
  const query = useQuery();
  const page = query.get("page");

  //Cambio de ruta con el hook useHistory
  const history = useHistory();

  //Efectos en el cambio del paginado
  useEffect(()=>{
    paginated(page ? page : 1);
}, [page,paginated]);

  return (
    <section className={styles.paginationContainer}>
      {pageNumbers.map((pageNumber) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            history.push("/libros/?page="+pageNumber);
          }}
        >
          <li key={pageNumber.toString()} className={styles.paginationItems}>
            <button
              className={styles.paginationButton}
              type="submit"
            >
              {pageNumber}
            </button>
          </li>
        </form>
      ))}
    </section>
  );
}
