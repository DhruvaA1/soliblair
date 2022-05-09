import { Navbar, Container, Nav } from 'react-bootstrap';
import '../styles/navbar.scss';

const NavFull = () => {
  return (
    <Navbar variant="dark" className="navbar">
      <Container>
        <Navbar.Brand href="/soliblair">Soli-Blair</Navbar.Brand>
        <Nav>
          <Nav.Link href="/soliblair">Play</Nav.Link>
          <Nav.Link href="/soliblair/leaderboard">Leaderboard</Nav.Link>
          <Nav.Link href="/soliblair/info">Info</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavFull
