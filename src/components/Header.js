import React from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
            <LinkContainer to={'/'}>
                <Navbar.Brand href="#home">App Name</Navbar.Brand>
            </LinkContainer>
          
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to={'/'}>
                        <Nav.Link><i className='fas fa-home'></i> Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={'/about'}>
                        <Nav.Link><i className='fas fa-user'></i> About</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;