import { Navbar, Container, Nav } from "react-bootstrap";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import spotify from "../assets/spotify.png";

const Footer = () => {
  return (
    <Navbar expand="lg" className="bg-info">
      <Container className="d-flex flex-row px-5 justify-content-between ">
        <h1 className="text-white">The Store</h1>
        <Nav className="fs-3">
          <Nav.Link className="text-white " href="#home">
            <img src={youtube} />
          </Nav.Link>
          <Nav.Link className="text-white" href="#link">
            <img src={facebook} />
          </Nav.Link>
          <Nav.Link className="text-white" href="#link">
            <img src={spotify} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
