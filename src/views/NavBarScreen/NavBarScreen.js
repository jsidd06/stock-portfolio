import React from 'react'
import { Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem,NavLink, UncontrolledDropdown } from 'reactstrap';

function NavBarScreen() {
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
          <NavLink href="/login">Login</NavLink>
        </Collapse>
      </Navbar>
    </Container>
  );
}

export default NavBarScreen