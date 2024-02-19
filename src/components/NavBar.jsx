import { useContext } from "react";
import { Nav, Container, Button } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "./context/CartContext";
import { NavLink } from "react-router-dom";

const NavBar = ({ onHandleClick }) => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.cartItem.length;

  return (
    <Navbar expand="lg" className="bg-black">
      <Container className="d-flex flex-row justify-content-evenly ">
        <Nav className="fs-3">
          <NavLink to="/" className="text-white px-5">
            Home
          </NavLink>
          <NavLink to="/" className="text-white px-5">
            Store
          </NavLink>
          <NavLink to="/about" className="text-white px-5">
            About
          </NavLink>
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
