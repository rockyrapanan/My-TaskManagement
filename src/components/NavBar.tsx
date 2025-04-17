import { Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import './NavBar.css'


const NavBar: React.FC = () => {
    const { isAuthenticated } = useAuth0();

  return (
    <Navbar>
      <Nav>
        <Nav.Link href="/">Home |</Nav.Link>
        {isAuthenticated &&
            <>
              <Nav.Link href="/tasks"> Tasks |</Nav.Link>
               <Nav.Link href="/profile"> Profile |</Nav.Link>

                
            </>
        }
      </Nav>
    </Navbar>
  );
};

export default NavBar;