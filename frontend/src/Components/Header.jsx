import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <Navbar
      style={{ background: "black" }}
      sticky="top"
      className="px-3 border-bottom border-dark"
      variant="dark"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdACwx2Hc6_x4wd7g9bBv0iHvPltitw1Y2Q&usqp=CAU"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/tv">
              T V Shows
            </Nav.Link>
            <Nav.Link as={NavLink} to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link as={NavLink} to="/liked">
              Liked
            </Nav.Link>
            <Nav.Link as={NavLink} to="/account">
              Account
            </Nav.Link>
          </Nav>
          <Form className="d-flex gcse-search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <BsSearch size={26} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
