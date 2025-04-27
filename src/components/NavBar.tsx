import { Nav, Navbar, Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import './NavBar.css';

const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar bg="light" expand="lg" className="mb-4"> {/* Adds light background and margin */}
      <Container>
        
        
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {isAuthenticated && (
              <>
                <Nav.Link href="/tasks">Tasks</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
              </>
            )}
          </Nav>
       
      </Container>
    </Navbar>
  );
};

export default NavBar;