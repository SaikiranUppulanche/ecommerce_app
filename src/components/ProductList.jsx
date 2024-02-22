import { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCart = (item) => {
    cartCtx.onAddToCart(item);
  };

  return (
    <>
      <Container className="my-5">
        <h3 className="text-center">Music</h3>
        <Row>
          {props.products.map((product) => {
            return (
              <Col className="justify-content-center" key={product.title}>
                <div className=" d-flex flex-column justify-content-evenly align-items-center p-5">
                  <h4>{product.title}</h4>
                  <Link to={"/store/" + product.id}>
                    <img className="p-4" src={product.imageUrl}></img>
                  </Link>
                </div>

                <div className=" d-flex flex-row justify-content-evenly">
                  <p>₹{product.price}</p>
                  <Button
                    variant="info"
                    className=" text-white fw-bold"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
