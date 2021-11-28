// COMPONENTE QUE DIBUJA UNA GRID DE TARJETAS DE LIBROS

import styles from "../../css/LibrosGrid.module.css"; //Modulo de estilos para este componente
import { useEffect, useState } from "react"; //Para los estados
import { requestApi } from "../../utils/httpClient"; //Peticiones a la API
import { useQuery } from "../../utils/UseQuery"; //Hook personalizada para recuperar parámetros de la URL

//Componentes
import { LibroCard } from "./LibroCard"; //Dibuja una tarjeta por cada libro recuperado de la API
import { Pagination } from "../Pagination"; //Paginación de todos los libros 10 en 10
import { Spinner } from "../Spinner"; //Muestra un spinner mientras cargan los datos
import { Search } from "../Search"; //Barra de búsqueda para los libros
import { BookNotfound } from "./BookNotFound"; //Muestra mensaje de libros no encontrados

export function LibrosGrid() {
  const [libros, setLibros] = useState([]); //Array de todos los libros de la API
  const [notFound, setNotFound] = useState([false,[]]); //Estado para libros no encontrados
  const [isLoading, setIsLoading] = useState(true); //Para mostrar un spinner mientras carga de la API

  //####Estados para controlar el paginado del resultado JSON###
  const [currentPage, setCurrentPage] = useState(0); //Página actual
  const [booksPerPage] = useState(10); //Mostrar 10 libros por página

  //Obtendremos la búsqueda desde el QueryParams
  const query = useQuery();
  const search = query.get("search");

  //######Efecto secundario######
  useEffect(() => {
    
    setCurrentPage(0); //Página inicial en 0
    window.scrollTo(0, 0); //Parte superior de la página
    setIsLoading(true); //Está cargando datos
    setNotFound(false); //Libros no encontrados en falso
    const path = search ? "/libros/titulo/" + search : "/libros/"; //Si hay búsqueda específica o todos los libros de la API

    //Se hace la petición a la API
    requestApi(path, "GET").then((data) => {
      //Se recibe el JSON con los datos de la petición, si no hubo error, 
      //se modifica el estado de "libros" con los datos del JSON
      !data.error ? setLibros(data) : setNotFound([true, [data]]);
      setIsLoading(false);
    });

  }, [search]);//Efecto se ejecutará al inicio (cargando todos los libros) y cuando se haga una búsqueda.
  //##############################

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

  //RETORNO DE COMPONENTES SEGÚN SEA EL CASO

  if (notFound[0])//Si hubo una búsqueda pero sin resultados
    return (
      <section className={styles.librosGridContainer}>
        <Search />
        <BookNotfound error={notFound[1]} />
      </section>
    );

  if (search) {//Si hubo una búsqueda, y fue exitosa, muestra las tarjetas de libros encontrados (sin paginado)
    return (
      <section className={styles.librosGridContainer}>
        {libroCard}
      </section>
    );
  } else {//Si no se solicitó una búsqueda entonces muestra el paginado (todos los libros)
    return (
      <section className={styles.librosGridContainer}>
        {libroCard}
        {pagination}
      </section>
    );
  }
}