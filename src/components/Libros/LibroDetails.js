// COMPONENTE QUE DIBUJA LOS DETALLES DE UN LIBRO
import styles from "../../css/LibroDetails.module.css"; //Modulo de estilos para este componente
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //Para capturar parámetros
import { requestApi } from "../../utils/httpClient"; //Peticiones a la API
import { coverBookIntoLarge } from "../../utils/coverBookIntoLarge";
import { Spinner } from "../Spinner";

export function LibroDetails() {
  let { libroId } = useParams(); //Obtenemos el parámetro enviado en el Link (Ide del libro)
  const [libro, setLibro] = useState([]); //Datos de un libro específico
  const [isLoading, setIsLoading] = useState(true);//Para mostrar un spinner mientras carga de la API

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const path = `/libros/${libroId}`; //path para traer un libro específico de la API
    requestApi(path, "GET").then((data) => {
      //Se recibe el JSON con los datos de la petición
      setLibro(data[0]); //Se modifica el estado de "libro" con los datos del JSON
      setIsLoading(false);
    });
  }, [libroId]);
  
  //Al venir vacías no se pueden mapear o trabajar en una función, marca error
  const linkCoverBookLarge = libro._id ? coverBookIntoLarge(libro.image_url,"/") : "";
  const authorsOfBook = libro.Autores ? libro.Autores.map((autor) => autor.nombre_completo).join(", ") : "";

  //Si está cargando datos de la API muestra el spinner
  if (isLoading) {
    return <Spinner mensaje={`Cargando datos del libro...`}/>
  }
  
  return (
    <section className={styles.libroDetailsSection}>
      <div className={styles.libroDetailsContainer}>
        <img
          className={styles.libroImagen}
          src={linkCoverBookLarge}
          alt={libro.title}
        />
        <div className={styles.libroInformacion}>
          <h1>{libro.title}</h1>
          <div>
            <p>ISBN: <span>{libro.isbn}</span></p>
            <p>ISBN13: <span>{libro.isbn13}</span></p>
            <p>Año de publicación: <span>{libro.publication_year}</span></p>
            <p>Idioma: <span>{libro.language}</span></p>
            <p>Editor: <span>{libro.publisher}</span></p>
            <p>Páginas: <span>{libro.pages}</span></p>
            <p>Autores:  <span>{authorsOfBook}</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
