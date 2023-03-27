import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "reactstrap";

const Home = () => {
  return (
    <Container className="mt-5 p-5">
      <Row>
        <Col>
          <h2 className="text-primary mb-3 p-3 bg-dark ">MÉTODO RENDER</h2>
          <p className="text-justify">
            Todo componente de Real,tiene un método render que es el que se
            encarga de renderizar Html, Correspondiente al componente. Este
            método se llama automáticamente cuando se crea un componente cuando
            el estado del componente se actualiza(Veremos esto más adelante)
          </p>
        </Col>

        <Col>
          <h2 className="text-primary mb-3 p-3 bg-light">MÉTODO STRICT MODE</h2>
          <p className="bg-dark text-light text-justify">
            Strict mode Es una herramienta para destacar problemas potenciales
            en la aplicación.Al igual que Fragment, StrictMode no renderiza nada
            en la interfaz de usuario. Este método también activa advertencias y
            comprobaciones adicionales para sus descendientes.
          </p>
        </Col>
        <Col>
          <h2 className="text-primary mb-3 p-3 bg-dark ">MÉTODO RETURN</h2>
          <p className="text-justify">
            Este método es obligatorio en cualquier componente,pues como su
            nombre lo dice,se utiliza para obtener los elementos finales a
            visualizar o pintar en el navegador. Debe ser una función pura,es
            decir, no debe modificar las props, no debe modificar el state ni
            realizar operaciones del DOM.
          </p>
        </Col>
        <a href="https://github.com/moonpad95/boton_whatsapp">
            <Button className="btn-lg btn-info"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg> <br />Ver repositorio de GitHub</Button>
            </a>
      </Row>

      
    </Container>
  );
};

export default Home;
