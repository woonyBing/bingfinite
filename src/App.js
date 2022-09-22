import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav, ProgressBar } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import AboutMe from "./component/AboutMe/AboutMe.js";
import Contact from "./component/Contact/Contact.js";
import Project from "./component/Project/Project.js";
import Skill from "./component/Skill/Skill.js";
import { useState, useEffect } from "react";

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
              <div><MainBanner/></div>
              <div><MainAboutMe/></div>
              <div><MainProject/></div>
              <div><MainSkill/></div>
              <div><Footer/></div>
            </div>
          }></Route>
          <Route path="/aboutme" element={<AboutMe/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
          <Route path="/skill" element={<Skill/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="*" element={<div>404 not found</div>}></Route>
        </Routes>
      </div>
    </div>
  );
}

function Footer(){
  return(
    <div className="Footer">
      <div className="ftLogo">
        <h3>Bingfinite :</h3>
        <div style={{color:'white'}}>Bing Ye Eun + Infinite</div>
      </div>
      <div className="ftSns">
        <div className="ftSnsInsta">
        <img src={process.env.PUBLIC_URL + "images/icon_insta.png"} width="30px"/>
        </div>
        <div className="ftSnsTalk">
        <img src={process.env.PUBLIC_URL + "images/icon_kakao.png"} width="30px"/>
        </div>
      </div>
      <div className="ftCopyright">
      Copyright 2022. Bing Ye Eun. All rights reserved.
      </div>
    </div>
  )
}

function MainBanner() {
  let navigate = useNavigate();
  return(
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
  )
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
  let [pjList, setpjList] = useState([
    {
      id : 'pj001',
      name : 'Bingfinite',
      content : '포트폴리오를 한눈에 볼 수 있도록 제작한 개인 사이트입니다',
      imgPath : 'images/pj_bingfinite.png'
    },
    {
      id : 'pj002',
      name : 'Bear Run',
      content : 'HTML, CSS, JAVA SCRIPT 연습을 위해 만든 미니게임 입니다',
      imgPath : ''
    },
  ]);

  return(
    <div className="Project">
      <h2 className="ProjectTitle">Project</h2>
      <div className="morePj">more</div>
      <div className="mainPjCard">
        <div className="cardBox">
          <div className="cardImg" src={process.env.PUBLIC_URL + pjList[0].imgPath}></div>
          <h3 className="cardName">{pjList[0].name}</h3>
          <div className="cardContent">{pjList[0].content}</div>
        </div>
        <div className="cardBox">
          <div className="cardImg"></div>
          <h3 className="cardName">{pjList[1].name}</h3>
          <div className="cardContent">{pjList[1].content}</div>
        </div>
      </div>
    </div>
  )
}

function MainSkill() {
  return(
    <div className="Skill">
        <h1 className="SkillTitle">Skill</h1>
        <div className='skillType'>
            <div className="skillIcon"></div>
            <div style={{width: '80%', margin:'auto'}}>
                <div>JAVA</div>
                <ProgressBar variant="info" now={50} />
            </div>
        </div>
        <div className='skillType'>
            <div className="skillIcon"></div>
            <div style={{width: '80%', margin:'auto'}}>
                <div>JAVA SCRIPT</div>
                <ProgressBar variant="info" now={80} />
            </div>
        </div>
        <div className='skillType'>
            <div className="skillIcon"></div>
            <div style={{width: '80%', margin:'auto'}}>
                <div>REACT</div>
                <ProgressBar variant="info" now={90} />
            </div>
        </div>
    </div>
  )
}

export default App;
