//PageLayout.tsx
import { Col, Container } from "react-bootstrap";
import NavBar from "./NavBar";
import NavBarButtons from "./NavBarButtons";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Col>
      <NavBar />
      </Col>
      <Col className="text-center" style={{ marginTop: "50px" }}>
        <h1>My Task Management App</h1>
        {children}
        <footer>
          <NavBarButtons />
        </footer>
      </Col>
    </Container>
  );
};

export default PageLayout;