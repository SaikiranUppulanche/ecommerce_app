import { useRef } from "react";
import { Form, Card, Button } from "react-bootstrap";

const ContactForm = () => {
  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputPhoneRef = useRef();

  const handleSubmitData = async (e) => {
    e.preventDefault();
    const user = {
      name: inputNameRef.current.value,
      email: inputEmailRef.current.value,
      phone: inputPhoneRef.current.value,
    };
    const res = await fetch(
      "https://react-https-6eaa1-default-rtdb.firebaseio.com/userData.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) return;

    inputNameRef.current.value = "";
    inputEmailRef.current.value = "";
    inputPhoneRef.current.value = "";
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-5 py-5">
      <Card
        style={{ width: "40rem" }}
        bg="light"
        text="dark"
        className="m-5 py-1"
      >
        <Card.Body>
          <Form onSubmit={handleSubmitData}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="fw-medium">Name</Form.Label>
              <Form.Control
                required
                ref={inputNameRef}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="fw-medium">Email address</Form.Label>

              <Form.Control
                required
                ref={inputEmailRef}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="fw-medium">Phone Number</Form.Label>
              <Form.Control
                required
                ref={inputPhoneRef}
                type="tel"
                maxLength={10}
                placeholder="Enter Phone Number"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactForm;
