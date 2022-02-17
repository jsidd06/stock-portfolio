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
              <NavLink href="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Stock">Stock View</NavLink>
            </NavItem>
          </Nav>
          {token ? (
            <NavLink onClick={logoutHandler}>Logout</NavLink>
          ) : (
            <NavLink href="/login">Login</NavLink>
          )}
        </Collapse>
      </Navbar>
    </Container>
  );
}

export default NavBarScreen;
