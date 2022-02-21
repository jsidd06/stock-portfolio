import React from "react";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

function NavBarScreen() {
  const token = localStorage.getItem("token");
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location = "/login";
  };
  return (
    <Container className="mt-2">
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/stock-view">
                Stock View
              </Link>
            </NavItem>
          </Nav>
          {token ? (
            <Link to="#" className="nav-link" onClick={logoutHandler}>
              Logout
            </Link>
          ) : (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          )}
        </Collapse>
      </Navbar>
    </Container>
  );
}

export default NavBarScreen;
