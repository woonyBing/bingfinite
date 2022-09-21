import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import AboutMe from "./component/AboutMe/AboutMe.js";
import Contact from "./component/Contact/Contact.js";
import Project from "./component/Project/Project.js";
import Skill from "./component/Skill/Skill.js";

function App() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="Header">
          <Navbar className="navbar">
            <Container>
              <Navbar.Brand id="navbarLogo" href="/">Bingfinite</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link className="navbarCategory" onClick={()=>{navigate('/aboutme')}}>About Me</Nav.Link>
                <Nav.Link className="navbarCategory" onClick={()=>{navigate('/project')}}>Project</Nav.Link>
                <Nav.Link className="navbarCategory" onClick={()=>{navigate('/skill')}}>Skill</Nav.Link>
                <Nav.Link className="navbarCategory" onClick={()=>{navigate('/contact')}}>Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      </div>

      <Routes>
        <Route path="/" element={
          <div>
            <div className="mainBanner">
              <div className="mainText">
                <h1 style={{color:'rgb(73, 132, 232)'}}>Bingfinite :</h1>
                <p style={{color:'gray'}}>Bing Ye Eun + Infinite</p>
                <br/>
                <h4>성장 가능성이 무한한 신입 개발자,</h4>
                <h4>안녕하세요 <b>빙예은</b>입니다.</h4>
              </div>
              <button className="mainButton" onClick={()=>{navigate('/project')}}>프로젝트 바로가기</button>
            </div>

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
        <Route path="/aboutme" element={<AboutMe/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/skill" element={<Skill/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
