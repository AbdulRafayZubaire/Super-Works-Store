import React, {useState} from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useLocation, Link } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const submitHandler = (e) =>{

    e.preventDefault();

    //Dispatach


  }

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Enter email here"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password" className="my-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="string"
            value={password}
            placeholder="Your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Rregister
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
