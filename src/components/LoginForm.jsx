import { useState, useRef, useContext } from "react";

import { Button, Card, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { userAuthContext } from "../context/userAuthContext";

const LoginForm = () => {
  const userAuthCtx = useContext(userAuthContext);
  const history = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [loader, setLoader] = useState(false);

  const submitUserCredentials = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setLoader(true);
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA0K8p5KNVmMPUTOloxQXJ7omcZKn36EvI";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setLoader(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMsg = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMsg = data.error.message;
            }
            throw new Error(errorMsg);
          });
        }
      })
      .then((data) => {
        userAuthCtx.login(data.idToken);
        console.log(data.idToken);
        history("/store");
      })
      .catch((err) => {
        alert(err.message);
      });

    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: enteredEmail,
    //     password: enteredPassword,
    //     returnSecureToken: true,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     setLoader(false);
    //     if (res.ok) {
    //       return res.json();
    //     } else {
    //       return res.json().then((data) => {
    //         let errorMsg = "Authentication Failed";
    //         if (data && data.error && data.error.message) {
    //           errorMsg = data.error.message;
    //         }
    //         throw new Error(errorMsg);
    //       });
    //     }
    //   })
    //   .then((data) => {
    //     userAuthCtx.login(data.idToken);
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
  };

  return (
    <section className="d-flex justify-content-center align-items-center my-5 py-5">
      <Card
        style={{ width: "40rem" }}
        bg="light"
        text="dark"
        className="m-5 py-1"
      >
        <h1 className="text-center">Login</h1>
        <Card.Body>
          <Form onSubmit={submitUserCredentials}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="fw-medium">Your Email</Form.Label>
              <Form.Control
                required
                ref={emailInputRef}
                type="text"
                placeholder="Enter Email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="fw-medium">Password</Form.Label>
              <Form.Control
                required
                ref={passwordInputRef}
                type="tel"
                maxLength={10}
                placeholder="Enter Password"
              />
            </Form.Group>
            <Row className="d-flex justify-content-center mt-5">
              {!loader && (
                <Button className="w-25 " variant="success" type="submit">
                  Login
                </Button>
              )}
              {loader && <p>Sending request...</p>}
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
};

export default LoginForm;
