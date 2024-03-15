import React from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const Header = props => {
    return (
        <>
            <Navbar bg='dark' data-bs-theme='dark'>
                <Container>
                    {/* <Navbar.Brand>The Generics</Navbar.Brand> */}
                    <Row>
                        <Col>
                            <Nav>
                                <Nav.Link>Home</Nav.Link>
                                <Nav.Link>Store</Nav.Link>
                                <Nav.Link>About</Nav.Link>
                            </Nav>
                        </Col>
                        <Col>
                            <Button>Cart</Button>
                            <span style={{color:'white'}}>0</span>
                        </Col>
                    </Row>
                </Container>               
            </Navbar>
        </>
    );
}
export default Header;