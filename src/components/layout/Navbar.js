import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavbarApp = () => {
    return (
        <Navbar expand="lg" className="shadow-sm p-3 mb-3 rounded text-center">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="display-4 is-brand">CatMash</Link>                    
                </Navbar.Brand>
                
                <Nav className="justify-content-end">
                    <Nav.Item>Bonjour Marcel</Nav.Item>
                    &nbsp;
                    <Nav.Item>
                        <FontAwesomeIcon className="text-danger is-logout" icon={faPowerOff} size="lg"/>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavbarApp;