import { Container, Row, Col, Button } from "react-bootstrap";

const ProductList = (props) => {
  return (
    <>
      <Container className="my-5">
        <h3 className="text-center">Music</h3>
        <Row>
          {props.products.map((product) => {
            return (
              <Col
                className="justify-content-center"
                xs={6}
                key={product.price}
              >
                <div className=" d-flex flex-column justify-content-evenly align-items-center p-5">
                  <h4>{product.title}</h4>
                  <img className="p-4" src={product.imageUrl}></img>
                </div>

                <div className=" d-flex flex-row justify-content-evenly">
                  <p>₹{product.price}</p>
                  <Button variant="info" className=" text-white fw-bold">
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
