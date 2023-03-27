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
        <a href="https://github.com/moonpad95">
            <Button className="github-button">Ver repositorio de GitHub</Button>
            </a>
      </Row>

      
    </Container>
  );
};

export default Home;
