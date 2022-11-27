import React from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">App Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/page-1"><i className='fas fa-shopping-cart'></i>Page 1</Nav.Link>
              <Nav.Link href="/page-2"><i className='fas fa-user'></i>Page 2</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;