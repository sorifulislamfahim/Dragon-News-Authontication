import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUser } from "react-icons/fa";
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
      logOut()
      .then()
      .catch(error => console.error(error))
    }
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">News Portal Dragon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav href="#deets">
              {
                user?.uid? 
                <>
                <span>{user?.displayName}</span> 
                <Button className='mx-2' onClick={handleLogOut} variant="light">LogOut</Button>
                </>
                : 
                <>
                  <Link to='/login'>LogIn</Link>
                  <Link to='/register'>Register</Link>
                </>
              }
              
            </Nav>
            <Link to="/profile">
              { user?.photoURL? 
              <Image
                src={user?.photoURL}
                roundedCircle
                style={{height: '40px'}}
              ></Image>
              :
                <FaUser></FaUser>
               }
            </Link>
          </Nav>
            <div className='d-lg-none'>
                <LeftSideNav></LeftSideNav>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;