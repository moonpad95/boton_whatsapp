import "./App.css";
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import image from "./utd12.png";
import image2 from "./2.jpeg";
import Maps from "./components/mapa";
import Example from "./components/carrusel";
import App1 from "./components/App1";
import Home from "./components/home";
import Mock from "./components/mock";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { Button } from "reactstrap";



function App() {
  return (
    <>
      <center>
        
        <Router>
        <div className="container mt-5">    
        <div className="btn-group">
         <Link to="./" className="btn btn-dark">
          INICIO
          </Link>
          <Link to="/luna/alumno" className="btn btn-light">
          ALUMNO
         </Link>
         <Link to="/luna/mapa" className="btn btn-dark">
          MAPA
         </Link>  
         <Link to="/luna/galeria" className="btn btn-light">
          GALERIA
         </Link>
                <Link to="/luna/bosquejo" className="btn btn-dark">
          MOCKUP
         </Link>  
         <Link to="/luna/login" className="btn btn-light">
          LOGIN 
         </Link> 
         <Link to="/luna/logout" className="btn btn-dark">
          CERRAR SESION 
         </Link>  
         <Link to="/luna/git" className="btn btn-dark">
          Ir a MI GIT
         </Link>         
        </div>
        </div>
         <hr/>
          <Switch>
            <Route path="/luna/nombre">
              <div className="nombre">
              <center>
                <h1>
                  Luis Luna Hernandez
                </h1>
              </center>
              </div>
            
              </Route>
              <Route path="/luna/utd">
              <center className="ruta1">
                <h1>
                  Universidad Tecnologica de Durango
                </h1>
              </center>
            </Route>
            <Route path="/luna/carrera">
            <div className="ruta2">

              <center>
                <h1>
                  Desarrollo de software multiplataforma
                </h1>
              </center>
              </div>
            </Route>
      
            <Route path="/luna/logo">
              <center>
                <h1>Utd LOGO</h1>
                <img src={image} width='250px'/>
              </center>
            </Route>
            <Route path="/luna/foto">
              <center>
                <h1>Fotografia propia</h1>
                <img src={image2} width='250px'/>
              </center>
            </Route>
            <Route path="/luna/galeria">
              <center>
                <h1>Galeria de imagenes</h1>
                <Example />
              </center>
            </Route>
            <Route path="/luna/mapa">
              <center>
                <Maps />
              </center>
            </Route>
            <Route path="/luna/alumno">
              <center>
                <App1 />
              </center>
            </Route>
             <Route path="/luna/bosquejo">
              <center>
                <h1>MOCKUPs</h1>
                <Mock />
              </center>
            </Route>
            <Route path="/luna/login">
              <center>
                <h1>LOGIN DE ACCESO</h1>
                <Login />
              </center>
            </Route>
            <Route path="/luna/git">
            <a href="https://github.com/moonpad95">
            <Button className="github-button">Ver mi perfil de GitHub</Button>
            </a>
            </Route>
            <Route path="/luna/logout">
              <center>
                <h1> SESION TERMINADA</h1>
                <Logout />
              </center>
            </Route>
            <Route path="/luna">
              <center>
                <h1>HOME</h1>
                <Home />
              </center>
            </Route>
       
          </Switch>
        </Router>

      </center>
    </>
  );
}

export default App;
