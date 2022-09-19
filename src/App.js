import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="mainBanner">
        <div className="Header">
          <Navbar className="navbar">
            <Container>
              <Navbar.Brand id="navbarLogo" href="/">Navbar</Navbar.Brand>
              <Nav>
                <Nav.Link className="navbarCategory" href="#home">About Me</Nav.Link>
                <Nav.Link className="navbarCategory" href="#pricing">Project</Nav.Link>
                <Nav.Link className="navbarCategory" href="#features">Skill</Nav.Link>
                <Nav.Link className="navbarCategory" href="#pricing">Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<div>메인</div>}></Route>
            <Route path="/aboutme" element={<div>About Me</div>}></Route>
            <Route path="/Project" element={<div>Project</div>}></Route>
            <Route path="/skill" element={<div>Skill</div>}></Route>
            <Route path="/contact" element={<div>Contact</div>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
