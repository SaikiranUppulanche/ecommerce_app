import { Button, Card, CloseButton, Image, Modal } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = ({ show, onHandleClose }) => {
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
          {cartElements.map((item) => {
            return (
              <div
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
                  />
                  <Button variant="danger">Remove</Button>
                </div>
              </div>
            );
          })}
        </Card.Body>
      </Modal>
    </Card>
  );
};

export default Cart;
