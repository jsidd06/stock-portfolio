import React from 'react'
import { Collapse, Nav,NavLink, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem } from 'reactstrap';

function NavBarScreen() {
  return (
    <div>
      <Navbar color="transparent" expand="md" >
        <NavbarBrand href="/">Stock Portfolio</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                About
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText style={{color:"black"}}>Login</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarScreen