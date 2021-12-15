/**COMPONENTE PARA REALIZAR BÚSQUEDAS */

import styles from "../css/Search.module.css";
// import {FaSearch} from 'react-icons/fa'; //íCONOS
import { useQuery } from "../utils/UseQuery";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export function Search( { libros }) {

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
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // history.push("/libros?search=" + searchText);
    //     searchText === "" ? history.push("/libros") : history.push("/libros?search=" + searchText);//Se agrega la búsqueda al path 
    // };

    const handleClose = (e) => {
        console.log("e.target.content", e.target.textContent);
        console.log("e.target.value", e.target.value);
        e.target.textContent ? history.push("/libros?search=" + e.target.textContent) :
        e.target.value ? history.push("/libros?search=" + e.target.value) : history.push("/libros");//Se agrega la búsqueda al path
    };

    // const searchBar =        
    //     <form className={styles.searchContainer} onSubmit={handleSubmit}>
    //         <div className={styles.searchBox}>
    //             <input
    //                 className={styles.searchInput}
    //                 type="text"
    //                 value={searchText}
    //                 onChange={(e) => setSearchText(e.target.value)}//Al ingresar algo se actualiza el input
    //             />
    //             <button className={styles.searchButton} type="submit">
    //                 <FaSearch size={20} />
    //             </button>
    //         </div>
    //     </form>
    // ;

    const searchBarMUI = 
        <section className={styles.searchContainer}>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    sx={{ width: 350, backgroundColor: "white" }}
                    options={libros}
                    getOptionLabel={(libro) => libro.title}
                    renderInput={(params) => (
                        <TextField 
                            {...params}
                            name="txtSearch"
                            label="Buscar" 
                        />
                        )}
                    onClose={handleClose}                    
                />
        </section>
    ;

    return (
        <>
            {searchBarMUI}
        </>
    );
}
