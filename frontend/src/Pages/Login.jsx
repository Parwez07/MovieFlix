import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/action/action";
import { useEffect } from "react";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message, loading, error } = useSelector((state) => state.user);

  const [user, setUser] = useState({ email: "", password: "" });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(user.email, user.password));
  };

  useEffect(() => {
    if (message) navigate("/");
    if (error) alert(error);
  }, [message, error]);

  return (
    <Card style={{ height: "84vh" }} className="text-center">
      <Card.Header className="text-muted">Sign In</Card.Header>
      <Card.Body>
        <img
          style={{ height: "30vh", borderRadius: "20px" }}
          src="https://d1ymz67w5raq8g.cloudfront.net/Pictures/480xany/5/3/3/523533_shutterstock_110256848001_865334.jpg"
          alt="sample_image"
        />
        <br />
        <br />
        <Form onSubmit={handleLogin} className="form m-auto">
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
                  Signing in...
                </Button>
              ) : (
                <Button variant="outline-success" type="submit">
                  Sign in
                </Button>
              )}
            </Col>
          </Form.Group>
        </Form>
        <br />
        <NavLink to="/register">Don't have a account ? Register Now</NavLink>
      </Card.Body>
    </Card>
  );
}

export default Login;
