import { Footer } from "./Footer"; //Encabezado con logo, nombre y menú
//import { Header } from "./Header"; //Pie de página
// import styles from '../css/Main.module.css';
import { Main } from "./Main"; //El landing page de la aplicación
import { LibrosGrid } from "./Libros/LibrosGrid"; //Todos los libros de la API
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"; //Para las rutas de las páginas
import { LibroDetails } from "./Libros/LibroDetails";
import { HeaderUi } from "./HeaderUi";
import { SignIn } from "./Usuarios/SignIn";
import { LogOut } from "./Usuarios/LogOut";
import { SignUp } from "./Usuarios/SignUp";
// Punto de entrada de la aplicación
function App() {

  const temporalStyle = { //Estilo temporal.
    color: "white",
    backgroundColor: "#45567d",
    padding: "120px",
    textAlign: "center",
    height: "100vh",
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
