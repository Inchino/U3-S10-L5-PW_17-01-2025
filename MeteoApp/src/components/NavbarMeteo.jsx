import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link, useLocation } from 'react-router-dom';

function NavabarMeteo() {
  const location = useLocation()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className="navbar-brand">
            <Image src='public/logoMeteoApp.png' style={{ width: "81px", height: "90px" }} thumbnail/>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className={
            location.pathname === '/home' ? 'nav-link active fw-bold' : 'nav-link fw-bold'
            }>
              Home
            </Link>
            <Link to="/preferiti" className={
            location.pathname === '/preferiti' ? 'nav-link active fw-bold' : 'nav-link fw-bold'
            }>
              Preferiti
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavabarMeteo;