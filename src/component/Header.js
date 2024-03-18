import React from 'react';
// import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './Header.css';

const Header = props => {
    return (
        <>
            {/* <Navbar bg='dark' data-bs-theme='dark'>
                <Container>
                    <Row>
                        <Col id='home'>
                            <Nav>
                                <Nav.Link>Home</Nav.Link>
                                <Nav.Link>Store</Nav.Link>
                                <Nav.Link>About</Nav.Link>
                                <Button>Cart</Button>
                            </Nav>
                        </Col>
                    </Row>
                </Container>               
            </Navbar> */}
            <div className='navbar'>
                <div id='home'>Home</div>
                <div id='store'>Store</div>
                <div id='about'>About</div>
            </div>
        </>
    );
}
export default Header;