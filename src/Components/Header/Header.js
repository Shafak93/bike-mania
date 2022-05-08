import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = ()=>{
        signOut(auth);
        
      }
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to='/' className='heder-title'>Bike Mania</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/banner" href="#banner">Brand</Nav.Link>
                        <Nav.Link as={Link} to="/products" href="#products">Products</Nav.Link>
                    </Nav>
                    
                    <Nav>
                        {
                            user 
                            ? <Nav.Link as={Link} to='login' onClick={handleSignOut}>Sign out</Nav.Link>
                            :
                            <div className='me-5 d-flex justify-content-between'>
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="signup">
                                    Signup
                                </Nav.Link>
                            </div>
                        }
                 </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;