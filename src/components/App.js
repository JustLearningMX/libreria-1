import { Footer } from "./Footer"; //Encabezado con logo, nombre y menú
import { Header } from "./Header"; //Pie de página
import { Main } from "./Main"; //El landing page de la aplicación
import { LibrosGrid } from "./Libros/LibrosGrid"; //Todos los libros de la API
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //Para las rutas de las páginas
import { LibroDetails } from "./Libros/LibroDetails";

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
      <div className="App">
        <Header /> {/**Pinta el encabezado */}
        
        <Switch>
          <Route exact path="/libros/:libroId"> {/**Ruta que muestra un libro en específico y sus datos */}
            <LibroDetails />
          </Route>
          <Route exact path="/libros"> {/**Ruta que muestra todos los libros */}
            <LibrosGrid />
          </Route>
          <Route exact path="/comentarios"> {/**Ruta que muestra los comentarios */}
            <h1 style={temporalStyle}> Aquí va a ir el componente de los Comentarios </h1>
          </Route>
          <Route exact path="/autores"> {/**Ruta que muestra los autores */}
          <h1 style={temporalStyle}>Aquí va a ir el componente de los Autores</h1>
          </Route>
          <Route exact path="/usuarios"> {/**Ruta que muestra los usuarios */}
          <h1 style={temporalStyle}>Aquí va a ir el componente de los Usuarios</h1>
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        
        <Footer /> {/**Pinta el pie de página */}
      </div>
    </Router>
  );
}
export default App;
