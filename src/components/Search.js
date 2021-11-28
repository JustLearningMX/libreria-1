/**COMPONENTE PARA REALIZAR BÚSQUEDAS */

import styles from "../css/Search.module.css";
import {FaSearch} from 'react-icons/fa'; //íCONOS
import { useQuery } from "../utils/UseQuery";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export function Search() {

    //Obtendremos la búsqueda desde el QueryParams
    const query = useQuery();
    const search = query.get("search");

    //Añadimos un estado para controlar el input
    const [searchText, setSearchText] = useState("");

    //Cambio de ruta con el hook UseHistory
    const history = useHistory();

    useEffect(()=>{
        setSearchText(search || "");//Por si viene null
    }, [search]);//Efecto se ejecutará cada que haya una búsqueda

    //Función para manejar el evento de búsqueda
    const handleSubmit = (e) => {
        e.preventDefault();
        // history.push("/libros?search=" + searchText);
        searchText === "" ? history.push("/libros") : history.push("/libros?search=" + searchText);//Se agrega la búsqueda al path 
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}//Al ingresar algo se actualiza el input
                />
                <button className={styles.searchButton} type="submit">
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    );
}
