import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png';
import "../style/navbar.css";
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Menu from '../pages/menu';
import Service from '../pages/Service';
import Home from '../pages/homes';
import About from '../pages/about';
import Footer from '../component/footer';

function navbar() {
  return (
    <Router>
    <Navbar bg="dark" variant={'dark'} expand="lg p-0">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo}id="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id='button' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/menu'}>Menu</Nav.Link>
            <Nav.Link as={Link} to={'/service'}>Service</Nav.Link>
            <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    <Footer />
    </Router>
  )
}

export default navbar