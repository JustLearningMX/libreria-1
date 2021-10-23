// COMPONENTE QUE DIBUJA UNA GRID DE TARJETAS DE LIBROS

import libros from "./libros.json";//Array temporal de libros. Se cambiará por llamada a la API

import styles from "../../css/LibrosGrid.module.css"; //Modulo de estilos para este componente
import { LibroCard } from "./LibroCard"; //Componente que dibuja una tarjeta por cada libro
import { useState } from "react"; //Para los estados 
import { reqApi } from "../../utils/httpClient"; //Peticiones a la API

export function LibrosGrid() {
  // const [libros, setLibros] = useState([]); //Para modificar el estado (listado de libros)

  //#### PRUEBA ###
const path = "/libros/"; //path para traer todos los libros de la API
const getData = reqApi(path, "GET").then((data) => { //Se recibe el JSON con los datos de la petición
  console.log(data); //Se imprime el array en consola para verificar
});
//#### FIN DE PRUEBA ###

  return (
    <ul className={styles.librosGrid}>
      {libros.map((libro) => ( //Mapeamos el array de libros
        <LibroCard key={libro._id} libro={libro} /> //Mandamos un libro al Componente LibroCard
      ))}
    </ul>
  );
}
