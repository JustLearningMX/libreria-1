// COMPONENTE QUE DIBUJA UNA GRID DE TARJETAS DE LIBROS

import { LibroCard } from "./LibroCard"; //Componente que dibuja una tarjeta por cada libro
import { useEffect, useState } from "react"; //Para los estados
import { requestApi } from "../../utils/httpClient"; //Peticiones a la API
import { Pagination } from "../Pagination"; //Paginación
import { Spinner } from "../Spinner"; //Muestra un spinner
import { useQuery } from "../../utils/useQuery";
import styles from "../../css/LibrosGrid.module.css"; //Modulo de estilos para este componente
import { Search } from "../Search";

export function LibrosGrid() {
  const [libros, setLibros] = useState([]); //Array de todos los libros de la API
  const [isLoading, setIsLoading] = useState(true); //Para mostrar un spinner mientras carga de la API

  //####Estados para controlar el paginado del resultado JSON###
  const [currentPage, setCurrentPage] = useState(0); //Página actual
  const [booksPerPage] = useState(10); //Mostrar 10 libros por página

  //Obtendremos la búsqueda desde el QueryParams
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setCurrentPage(0);
    console.log("useEffect");
    window.scrollTo(0, 0);
    setIsLoading(true);
    const path = search ? "/libros/titulo/" + search : "/libros/"; //Si hay búsqueda específica o todos los libros de la API
    requestApi(path, "GET").then((data) => {
      //Se recibe el JSON con los datos de la petición
      setLibros(data); //Se modifica el estado de "libros" con los datos del JSON
      setIsLoading(false);
    });
  }, [search]);

  //Se obtienen libros actuales
  const indexOfLastBook = currentPage * booksPerPage; //indice del último libro
  const indexOfFirstBook = indexOfLastBook - booksPerPage; //indice del primer libro
  const currentBooks = libros.slice(indexOfFirstBook, indexOfLastBook); //Se obtiene un array nuevo de libros

  //Función que cambia la página
  const paginated = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  //Si la página actual es 0 muestra info de la pag. 1
  if (currentPage === 0) paginated(1);

  //Si está cargando datos de la API muestra el spinner
  if (isLoading) {
    return <Spinner mensaje="Cargando libros..." />;
  }

  //Componente que muestra tarjeta con libro
  const libroCard = (
    <div>
      <Search />
      <ul className={styles.librosGrid}>
        {currentBooks.map(
          //Mapeamos el array de libros obtenido del Slice
          (currentLibro) => (
            /*Mandamos un libro al Componente LibroCard          */
            <LibroCard key={currentLibro._id} libro={currentLibro} />
          )
        )}
      </ul>
    </div>
  );

  //Componente del paginado
  const pagination = (
    <div>
      <Pagination
        itemsPerPage={booksPerPage}
        totalItems={libros.length}
        paginated={paginated}
      />
    </div>
  );

  if (search) {//Si existe una búsqueda muestra sólo las tarjetas de libros
    return (
      <section className={styles.librosGridContainer}>
        {libroCard}
      </section>
    );
  } else {//Si no existe una búsqueda muestra también el paginado
    return (
      <section className={styles.librosGridContainer}>
        {libroCard}
        {pagination}
      </section>
    );
  }
}
