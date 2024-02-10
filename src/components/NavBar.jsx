import { Nav, Container, Button } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ onHandleClick }) => {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container className="d-flex flex-row justify-content-evenly ">
        <Nav className="fs-3">
          <Nav.Link className="text-white " href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="text-white" href="#link">
            Store
          </Nav.Link>
          <Nav.Link className="text-white" href="#link">
            About
          </Nav.Link>
        </Nav>
        <Button variant="light" onClick={onHandleClick}>
          Cart 0
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
