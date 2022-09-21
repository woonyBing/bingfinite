import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
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


      <div className="mainBody">
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
              <div><MainAboutMe/></div>
              <div><MainProject/></div>
              <div><Skill/></div>
              <div className="Footer">
              </div>
            </div>
          }></Route>
          <Route path="/aboutme" element={<AboutMe/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
          <Route path="/skill" element={<Skill/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </div>  
    </div>
  );
}

function MainAboutMe() {
  return (
    <div className="AboutMe">
      <h2 className="AboutMeTitle">About Me</h2>
      <div className="abline"></div>
      <ul>
        <li><b>이름</b> 빙예은</li>
        <li><b>생년월일</b> 1995.01.05</li>
        <li><b>이메일</b> honeybye@naver.com</li>
        <li><b>연락처</b> 010-2024-8903</li>
      </ul>
    </div>
  )
}

function MainProject() {
  return(
    <div className="Project">
      <h2 className="ProjectTitle">Project</h2>
      <div className="morePj">more >></div>
      <div className="mainPjCard">
        <Card className="bg-dark text-white">
          <Card.Img src="holder.js/100px270" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  )
}

export default App;
