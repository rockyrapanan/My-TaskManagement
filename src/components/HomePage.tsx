//Home-page.tsx
import { Col, Container } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import NavBar from "./NavBar";


const HomePage: React.FC = () => {
  return (
    <>
      <NavBar/>
      <Container>
        <Col>
          <h1>My Task Managment App</h1>
          
          <LoginButton />
          <LogoutButton />
        </Col>
      </Container>
    </>
  );
};

export default HomePage;