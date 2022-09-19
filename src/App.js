import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";


function App() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="Header">
          <Navbar className="navbar">
            <Container>
              <Navbar.Brand id="navbarLogo" href="/">Navbar</Navbar.Brand>
              <Nav>
                <Nav.Link className="navbarCategory" onClick={()=>{navigate('/aboutme')}}>About Me</Nav.Link>
                <Nav.Link className="navbarCategory" onClick={()=>{navigate('/project')}}>Project</Nav.Link>
                <Nav.Link className="navbarCategory" onClick={()=>{navigate('/skill')}}>Skill</Nav.Link>
                <Nav.Link className="navbarCategory" onClick={()=>{navigate('/contact')}}>Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <div className="mainBanner">
            
          </div>
      </div>

      <Routes>
        <Route path="/" element={
          <div>
            <div className="AboutMe">
              <h1 className="AboutMeTitle">AboutMe</h1>
            </div>
            <div className="Project">
              <h1 className="ProjectTitle">Project</h1>
            </div>
            <div className="Contact">
              <h1 className="ContactTitle">Contact</h1>
            </div>
            <div className="Footer"></div>
          </div>
        }></Route>
        <Route path="/aboutme" element={<div>About Me</div>}></Route>
        <Route path="/project" element={<div>Project</div>}></Route>
        <Route path="/skill" element={<div>Skill</div>}></Route>
        <Route path="/contact" element={<div>Contact</div>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
