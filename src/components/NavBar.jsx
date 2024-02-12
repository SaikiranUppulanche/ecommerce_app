import { useContext } from "react";
import { Nav, Container, Button } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "./context/CartContext";

const NavBar = ({ onHandleClick }) => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.cartItem.length;

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
        <Button
          className="d-flex flex-row "
          variant="light"
          onClick={onHandleClick}
        >
          <h4 className="pt-1 pe-2">Cart</h4>{" "}
          <Button variant="success">{numberOfItems}</Button>
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
