import styles from '../css/Main.module.css';
import { useState } from "react";
import Autores from './Autores';


export function Main() {
  const [isAdd, setIsAdd] = useState(false);
  const [textAddUpdate, setTextAddUpdate] = useState("Agregar autores");

  const handleAddAutor = (event) => {
    setIsAdd(!isAdd);
    if (isAdd) {
      setTextAddUpdate("Agregar autores");
    } else {
      setTextAddUpdate("Ocultar agregar autores");
    }
  };

  return (
    <main className={styles.main}>
      <h1>Sección Principal</h1>
      <button className={styles.button_} style={{marginTop: "100px"}} onClick={handleAddAutor}>{textAddUpdate}</button>
      {isAdd && <Autores />}

    </main>
  );
}
