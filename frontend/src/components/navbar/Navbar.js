import logo from "../../pic/logo.png";
import Container from 'react-bootstrap/Container';
import NavbarBootStrap from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

function Navbar() {

    return (
        <NavbarBootStrap bg="white" variant="light" style={{boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)'}}>
        <Container>
          <NavbarBootStrap.Brand href="/">
            <img style={{height: "50px"}} src={logo}/>
          </NavbarBootStrap.Brand>
          <Nav>
            <Nav.Link className="navLink" href="/" >Home
            </Nav.Link>

            <Nav.Link className="navLink" href="/about">About
            </Nav.Link>

            <Nav.Link className="navLink" href="contactus">Contact Us
            </Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link className="navLink" href="/signup">Sign Up</Nav.Link>
            <Nav.Link className="navLink" href="/login">Log In</Nav.Link>
          </Nav>
        </Container>
      </NavbarBootStrap>
    );

    
}

export default Navbar;

