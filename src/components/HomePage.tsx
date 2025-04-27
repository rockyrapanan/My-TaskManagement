// src/components/HomePage.tsx
import { Col, Container } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Col className="text-center" style={{ marginTop: "50px" }}>
        <h1>My Task Management App</h1>
        
        <LoginButton />
        <LogoutButton />
      </Col>
    </Container>
  );
};

export default HomePage;