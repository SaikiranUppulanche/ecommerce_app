import { useContext } from "react";
import { Button, Card, CloseButton, Image, Modal } from "react-bootstrap";
import { CartContext } from "./context/CartContext";

const Cart = ({ show, onHandleClose }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.cartItem.reduce((acc, cur) => {
    return cur.price * cur.quantity + acc;
  }, 0);

  return (
    <Card className="border border-danger">
      <Modal show={show}>
        <Card.Header className="d-flex flex-row pt-2 justify-content-between">
          <span>
            <h4 className="px-5 fs-3 fw-bold">Your Cart</h4>
          </span>
          <span>
            <CloseButton
              className="border border-black me-3"
              onClick={onHandleClose}
            />
          </span>
        </Card.Header>
        <Card.Body>
          <div className=" container px-5 fs-4 fw-medium mb-3 d-flex flex-row justify-content-between">
            <span>Item</span>
            <span className="ms-4">Price</span>
            <span>Quantity</span>
          </div>
          {cartCtx.cartItem.map((item) => {
            return (
              <li
                className=" container px-5 fw-medium d-flex flex-row justify-content-between"
                key={Math.random()}
              >
                <div
                  className="flex flex-row text-wrap"
                  style={{ width: "100px" }}
                >
                  <Image
                    style={{ width: "75px" }}
                    src={item.imageUrl}
                    rounded
                  />
                  <p>{item.title}</p>
                </div>
                <div className="pt-3">{item.price}</div>
                <div className="pt-3">
                  <input
                    className="text-center me-3"
                    style={{ width: "30px", height: "30px" }}
                    value={item.quantity}
                    readOnly
                  />
                  <Button variant="danger">Remove</Button>
                </div>
              </li>
            );
          })}
        </Card.Body>
        <div className="d-flex flex-row justify-content-between p-5">
          <h3>Total Amount</h3>
          <h3>{totalAmount}</h3>
        </div>
        <Button className="mx-5 mb-5 " variant="primary" size="lg">
          Purchase
        </Button>
      </Modal>
    </Card>
  );
};

export default Cart;
