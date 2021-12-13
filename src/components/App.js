import { Footer } from "./Footer"; //Encabezado con logo, nombre y menú
//import { Header } from "./Header"; //Pie de página
import { Main } from "./Main"; //El landing page de la aplicación
import { LibrosGrid } from "./Libros/LibrosGrid"; //Todos los libros de la API
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"; //Para las rutas de las páginas
import { LibroDetails } from "./Libros/LibroDetails";
import { HeaderUi } from "./HeaderUi";
import styles from '../css/Main.module.css';
import { useState } from "react";
import Comentarios from './Comentarios';
import Autores from './Autores';
import { SignIn } from "./Usuarios/SignIn";
import { LogOut } from "./Usuarios/LogOut";
import { SignUp } from "./Usuarios/SignUp";
// Punto de entrada de la aplicación
function App() {

  //Estados para el botón comentarios
  const [isAddC, setIsAddC] = useState(false);
  const [textAddUpdateC, setTextAddUpdateC] = useState("Agregar comentarios");
  
  //Estados para el botón Autores
  const [isAdd, setIsAdd] = useState(false);
  const [textAddUpdate, setTextAddUpdate] = useState("Agregar autores");

  const temporalStyle = { //Estilo temporal.
    color: "white",
    backgroundColor: "#45567d",
    padding: "120px",
    textAlign: "center",
    height: "100vh",
  };

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
    <Router>
      {/* <div className="App"> */}
        <HeaderUi /> {/**Pinta el encabezado */}
        
        <Switch>
          <Route exact path="/libros/id/:libroId"> {/**Ruta que muestra un libro en específico y sus datos */}
            <LibroDetails />
          </Route>
          <Route exact path="/libros"> {/**Ruta que muestra todos los libros */}
            <LibrosGrid />
          </Route>
          <Route exact path="/comentarios"> {/**Ruta que muestra los comentarios */}
            <h1 style={temporalStyle}> Aquí va a ir el componente de los Comentarios 

              <button className={styles.button_} style={{marginTop: "100px"}} onClick={handleAddComentarios}>{textAddUpdateC}</button>
              {isAddC && <Comentarios />}
            </h1>
          </Route>
          <Route exact path="/autores"> {/**Ruta que muestra los autores */}
          <h1 style={temporalStyle}>Aquí va a ir el componente de los Autores
          
          
            <button className={styles.button_} style={{marginTop: "100px"}} onClick={handleAddAutor}>{textAddUpdate}</button>
            {isAdd && <Autores />}
          </h1>
          </Route>
          
          <Route 
            exact 
            path="/usuarios/signin" 
            render={()=>{
              const loggedUserJson = window.localStorage.getItem('loggedBooksAppUser');
              return loggedUserJson ? <Redirect to="/libros" /> : <SignIn />
            }} /> 

          <Route path="/usuarios/signup" exact component={() => <SignUp />}>
          </Route>
          
          <Route 
            // exact 
            path="/usuarios/logout" 
            render={()=>{
              const loggedUserJson = window.localStorage.getItem('loggedBooksAppUser');              
              return !loggedUserJson ? <Redirect to="/usuarios/signin" /> : <LogOut />;
            }} /> 
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        
        <Footer /> {/**Pinta el pie de página */}
      {/* </div> */}
    </Router>
  );
}
export default App;
