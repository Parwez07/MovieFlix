import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { registerUser } from "../redux/action/action";
import { useEffect } from "react";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, message, error } = useSelector((state) => state.user);

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(registerUser(user.name, user.email, user.password));
  };

  useEffect(() => {
    if (message) navigate("/");
    if (error) alert(error);
  }, [message, error]);

  return (
    <Card style={{ minHeight: "84vh" }} className="text-center">
      <Card.Header className="text-muted">Sign Up</Card.Header>
      <Card.Body>
        <img
          style={{ height: "30vh", borderRadius: "20px" }}
          src="https://d1ymz67w5raq8g.cloudfront.net/Pictures/480xany/5/3/3/523533_shutterstock_110256848001_865334.jpg"
          alt="sample_image"
        />
        <br />
        <br />
        <Form onSubmit={handleRegister} className="form m-auto">
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="name"
                value={user.name}
                onChange={handleInputs}
                type="text"
                placeholder="Name"
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="email"
                value={user.email}
                onChange={handleInputs}
                type="email"
                placeholder="Email"
                required
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="password"
                value={user.password}
                onChange={handleInputs}
                type="password"
                placeholder="Password"
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              {loading ? (
                <Button variant="success" disabled>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Registering...
                </Button>
              ) : (
                <Button variant="outline-success" type="submit">
                  Sign in
                </Button>
              )}
            </Col>
          </Form.Group>
          <br />
          <NavLink to="/login">Already have an account ? Login</NavLink>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Register;
