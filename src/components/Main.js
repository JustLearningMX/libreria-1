import styles from '../css/Main.module.css';
import { useState } from "react";
import Autores from './Autores';
import Comentarios from './Comentarios';

export function Main() {
  const [isAdd, setIsAdd] = useState(false);
  const [isAddC, setIsAddC] = useState(false);
  const [textAddUpdate, setTextAddUpdate] = useState("Agregar autores");
  const [textAddUpdateC, setTextAddUpdateC] = useState("Agregar comentarios");

  const handleAddAutor = (event) => {
    setIsAdd(!isAdd);
    if (isAdd) {
      setTextAddUpdate("Agregar autores");
    } else {
      setTextAddUpdate("Ocultar agregar autores");
    }
  };

  const handleAddComentarios = (event) => {
    setIsAddC(!isAddC);
    if (isAddC) {
      setTextAddUpdateC("Agregar comentarios");
    } else {
      setTextAddUpdateC("Ocultar agregar comentarios");
    }
  };

  return (
    <main className={styles.main}>
      <h1>Sección Principal</h1>
      <button className={styles.button_} style={{marginTop: "100px"}} onClick={handleAddAutor}>{textAddUpdate}</button>
      {isAdd && <Autores />}

      <button className={styles.button_} style={{marginTop: "100px"}} onClick={handleAddComentarios}>{textAddUpdateC}</button>
      {isAddC && <Comentarios />}
    </main>
  );
}
