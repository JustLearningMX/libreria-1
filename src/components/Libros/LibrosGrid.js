// COMPONENTE QUE DIBUJA UNA GRID DE TARJETAS DE LIBROS

import { LibroCard } from "./LibroCard"; //Componente que dibuja una tarjeta por cada libro
import { useEffect, useState } from "react"; //Para los estados
import { requestApi } from "../../utils/httpClient"; //Peticiones a la API
import { Pagination } from "../Pagination"; //Paginación
import { Spinner } from "../Spinner";//Muestra un spinner
import styles from "../../css/LibrosGrid.module.css"; //Modulo de estilos para este componente

export function LibrosGrid() {
  const [libros, setLibros] = useState([]); //Array de todos los libros de la API
  const [isLoading, setIsLoading] = useState(true);//Para mostrar un spinner mientras carga de la API

  //####Estados para controlar el paginado del resultado JSON###
  const [currentPage, setCurrentPage] = useState(1); //Página actual
  const [booksPerPage] = useState(10) //Mostrar 10 libros por página
  
  useEffect( ()=>{
    window.scrollTo(0, 0);
    setIsLoading(true);
    const path = "/libros/"; //path para traer todos los libros de la API
    requestApi(path, "GET").then((data) => {//Se recibe el JSON con los datos de la petición      
      setLibros(data);//Se modifica el estado de "libros" con los datos del JSON
      setIsLoading(false);
    })}, []);

  //Se obtienen libros actuales
  const indexOfLastBook = currentPage * booksPerPage; //indice del último libro
  const indexOfFirstBook = indexOfLastBook - booksPerPage; //indice del primer libro
  const currentBooks = libros.slice(indexOfFirstBook, indexOfLastBook);//Se obtiene un array nuevo de libros

  //Función que cambia la página
  const paginated = (pageNumber) => {
    window.scrollTo(0, 0); 
    setCurrentPage(pageNumber)
  };

  //Si está cargando datos de la API muestra el spinner
  if (isLoading) {
    return <Spinner mensaje="Cargando libros..."/>
  }
  
  return (
    <section className={styles.librosGridContainer}>
      <div>
        <ul className={styles.librosGrid}>
          {currentBooks.map(//Mapeamos el array de libros obtenido del Slice
            (currentLibro) => (
              <LibroCard key={currentLibro._id} libro={currentLibro} /> //Mandamos un libro al Componente LibroCard          
            ))}        
        </ul>      
      </div>
      <div>
        <Pagination itemsPerPage={booksPerPage} totalItems={libros.length} paginated={paginated} />
      </div>
    </section>
  );
}
