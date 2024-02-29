import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useState } from "react";

const productsArr = [
  {
    id: 1,

    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,

    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 3,

    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 4,

    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductDetails = () => {
  const [quantity, setQuantity] = useState("1");
  const { id } = useParams();

  const currentProductIndex = productsArr.findIndex((item) => +item.id === +id);
  const currentProduct = { ...productsArr[currentProductIndex] };
  console.log(currentProduct);
  const filterProduct = productsArr.filter((item) => +item.id !== +id);

  const handleQuantity = (des) => {
    if (des === "add") setQuantity((prev) => +prev + 1);
    else
      setQuantity((prev) => {
        if (+prev <= 1) return prev;
        return +prev - 1;
      });
  };

  return (
    <Container className="p-3">
      <Row className="my-5">
        <Col className="mb-3 d-flex align-items-center col-md-5 col-12 justify-content-center">
          <img
            className="p-0 m-0 w-md-100 w-100 object-fit-cover"
            src={currentProduct.imageUrl}
            alt="content"
          />
        </Col>
        <Col className=" mx-md-5">
          <h3 className="text-uppercase mb-3 ">{currentProduct.title}</h3>
          <div className=" d-flex flex-column mb-3 ">
            <span className="mb-1">
              <BsStarFill style={{ color: "#ff9f1a", marginRight: "5px" }} />
              <BsStarFill style={{ color: "#ff9f1a", marginRight: "5px" }} />
              <BsStarFill style={{ color: "#ff9f1a", marginRight: "5px" }} />
              <BsStar style={{ marginRight: "5px" }} />
              <BsStar style={{ marginRight: "5px" }} />
            </span>
            <span>41 reviews</span>
          </div>
          <p className="mb-3 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit id
            alias dolorum magni reiciendis placeat, maxime repudiandae,
            consequatur non quas consectetur quam exercitationem molestiae quis.
            Minima nisi odio nesciunt nemo?Lorem ipsum dolor sit amet.
          </p>
          <div className="mb-3 align-items-center d-flex gap-1">
            <h4>Current Price:</h4>
            <h4 className=" fst-italic text-warning">
              ₹{currentProduct.price}
            </h4>
          </div>
          <p className="mb-3">
            <strong>91%</strong> of buyers enjoyed this product!{" "}
            <strong> (87 votes)</strong>
          </p>
          <div className="align-items-center d-flex mb-3">
            <h3 style={{ marginRight: "20px" }}>Quantity-</h3>
            <div className="d-flex align-items-center border border-dark">
              <button
                className="px-2 border-0"
                onClick={() => handleQuantity("subtract")}
              >
                -
              </button>
              <span
                className="h-100 px-2"
                style={{ borderRight: "1px solid", borderLeft: "1px solid" }}
              >
                {quantity}
              </span>
              <button
                onClick={() => handleQuantity("add")}
                className="px-2  border-0"
              >
                +
              </button>
            </div>
          </div>

          <Button>Add to cart</Button>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h3>Related Products</h3>
        </Col>
      </Row>
      <Row>
        {filterProduct.map((item) => (
          <Col
            key={item.id}
            className="col-md-2 col-3 col-4 d-flex m-3 flex-column bg-dark-subtle p-3"
            style={{ cursor: "pointer" }}
          >
            <Link
              className=" text-black text-decoration-none"
              to={`/products/${item.id}`}
            >
              <img className="w-100 mb-3" src={item.imageUrl} alt="product" />
              <h5>{item.title}</h5>
              <span>${item.price}</span>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductDetails;
