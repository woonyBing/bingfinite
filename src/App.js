import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav, ProgressBar } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import AboutMe from "./component/AboutMe/AboutMe.js";
import Project from "./component/Project/Project.js";
import { useState, useEffect } from "react";
import ProjecDetail from './component/Project/ProjectDetail.js';
import Home from './component/Main/Home.js';
// import Information from "./component/AboutMe/Information.js";
// import Skill from "./component/AboutMe/Skill.js";
// import Career from "./component/AboutMe/Career.js";
// import Contact from "./component/AboutMe/Contact.js";

function App() {
  
  let [pjList, setpjList] = useState([
    {
        id : 'pj001',
        name : 'Gilfinite',
        content : '포트폴리오를 한눈에 볼 수 있도록 제작한 개인 사이트입니다',
        mainImgPath : '/images/project_thumb_gil.jpg',
        detailThumb : ['/images/pj_gil_intro.png', '/images/bingfinite_m.jpg'],
        detailComment : 'HTML, CSS, JAVASCRIPT, REACT를 활용한 개인 프로젝트입니다. \n 진행했던 프로젝트와 자기소개를 한 눈에 확인할 수 있는 사이트입니다.',
        detailImgPath : ['/images/pj_gil_intro.png', '/images/pj_gil-1.png', '/images/pj_gil-2.png', '/images/pj_gil-3.png']
    },
    {
        id : 'pj002',
        name : 'Sample',
        content : 'Sample(프로젝트에 대한 간단한 설명 들어갈 자리입니다)',
        mainImgPath : '/images/project_thumb_sample.jpg',
        detailThumb : ['/images/pj_gil_sample.jpg', '/images/pj_gil_m.jpg'],
        detailComment : '이 프로젝트에 대한 설명',
        detailImgPath : ['/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg']
    },
    {
        id : 'pj003',
        name : 'Sample2',
        content : 'Sample(프로젝트에 대한 간단한 설명 들어갈 자리입니다)',
        mainImgPath : '/images/project_thumb_sample.jpg',
        detailThumb : ['/images/pj_gil_sample.jpg', '/images/pj_gil_m.jpg'],
        detailComment : '이 프로젝트에 대한 설명',
        detailImgPath : ['/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg']
    },
    {
        id : 'pj004',
        name : 'Sample4',
        content : 'Sample(프로젝트에 대한 간단한 설명 들어갈 자리입니다)',
        mainImgPath : '/images/project_thumb_sample.jpg',
        detailThumb : ['/images/pj_gil_sample.jpg', '/images/pj_gil_m.jpg'],
        detailComment : '이 프로젝트에 대한 설명',
        detailImgPath : ['/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg']
    },
    {
        id : 'pj005',
        name : 'Sample5',
        content : 'Sample(프로젝트에 대한 간단한 설명 들어갈 자리입니다)',
        mainImgPath : '/images/project_thumb_sample.jpg',
        detailThumb : ['/images/pj_gil_sample.jpg', '/images/pj_gil_m.jpg'],
        detailComment : '이 프로젝트에 대한 설명',
        detailImgPath : ['/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg']
    },
    {
        id : 'pj006',
        name : 'Sample6',
        content : 'Sample(프로젝트에 대한 간단한 설명 들어갈 자리입니다)',
        mainImgPath : '/images/project_thumb_sample.jpg',
        detailThumb : ['/images/pj_gil_sample.jpg', '/images/pj_gil_m.jpg'],
        detailComment : '이 프로젝트에 대한 설명',
        detailImgPath : ['/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg']
    },
    {
        id : 'pj007',
        name : 'Sample7',
        content : 'Sample(프로젝트에 대한 간단한 설명 들어갈 자리입니다)',
        mainImgPath : '/images/project_thumb_sample.jpg',
        detailThumb : ['/images/pj_gil_sample.jpg', '/images/pj_gil_m.jpg'],
        detailComment : '이 프로젝트에 대한 설명',
        detailImgPath : ['/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg']
    },
    {
        id : 'pj008',
        name : 'Sample8',
        content : 'Sample(프로젝트에 대한 간단한 설명 들어갈 자리입니다)',
        mainImgPath : '/images/project_thumb_sample.jpg',
        detailThumb : ['/images/pj_gil_sample.jpg', '/images/pj_gil_m.jpg'],
        detailComment : '이 프로젝트에 대한 설명',
        detailImgPath : ['/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg']
    },
    {
        id : 'pj009',
        name : 'Sample9',
        content : 'Sample(프로젝트에 대한 간단한 설명 들어갈 자리입니다)',
        mainImgPath : '/images/project_thumb_sample.jpg',
        detailThumb : ['/images/pj_gil_sample.jpg', '/images/pj_gil_m.jpg'],
        detailComment : '이 프로젝트에 대한 설명',
        detailImgPath : ['/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg','/images/pj_gil_sample.jpg']
    },
  ]);

  
  let [showTopButton, setShowTopButton] = useState(false);

  window.addEventListener('scroll', function(){
    if(window.scrollY > 200 || window.pageYOffset > 200){
      setShowTopButton(true);
    }
    else {
      setShowTopButton(false);
    }
  })

  
  return (
    <div>
      <div className="mainBody">
        <Routes>
          <Route path="/" element={
            <div>
              <Home/>
            </div>
          }></Route>
          <Route path="/aboutme" element={
            <div>
              <MenuBar/>
              <AboutMe/>
              <Footer/>
              {
                showTopButton == true ?
                
                <div id="btnTop" className="btnGoTop" onClick={()=>{
                  // console.log('상단으로 가는 기능 넣기')
                  document.body.scrollIntoView({behavior:'smooth'});
                }}>
                    <img src={process.env.PUBLIC_URL + '/images/goTop.png'} />
                </div>
                :null
              }
            
            </div>
          }></Route>
          <Route path="/aboutme/:id" element={
            <div>
              <MenuBar/>
              <AboutMe/>
              <Footer/>
              {
                showTopButton == true ?
                
                <div id="btnTop" className="btnGoTop" onClick={()=>{
                  // console.log('상단으로 가는 기능 넣기')
                  document.body.scrollIntoView({behavior:'smooth'});
                }}>
                    <img src={process.env.PUBLIC_URL + '/images/goTop.png'} />
                </div>
                :null
              }
            </div>
          } />
          <Route path="/project" element={
            <div>
              <MenuBar/>
              <div>
                <h3 style={{textAlign:'center', marginTop:'80px'}}>Project</h3>
                  <div className="CardWrap">
                    <div className="CardContainer">
                      {
                        pjList.map((projectList, i)=>{
                          // console.log(i)
                          return(
                                <Project key={projectList.id} projectList={projectList} i={i}/>
                          )
                        })
                      }
                      
                    </div>
                  </div>
              </div>
              {
                showTopButton == true ?
                
                <div id="btnTop" className="btnGoTop" onClick={()=>{
                  // console.log('상단으로 가는 기능 넣기')
                  document.body.scrollIntoView({behavior:'smooth'});
                }}>
                    <img src={process.env.PUBLIC_URL + '/images/goTop.png'} />
                </div>
                :null
              }
              <Footer/>
            </div>
            
          }>
          </Route>
        <Route path="/project/:id" element={
          <div>
            <MenuBar/>
            <ProjecDetail pjList={pjList}/>
            <Footer/>
            {
                showTopButton == true ?
                
                <div id="btnTop" className="btnGoTop" onClick={()=>{
                  // console.log('상단으로 가는 기능 넣기')
                  document.body.scrollIntoView({behavior:'smooth'});
                }}>
                    <img src={process.env.PUBLIC_URL + '/images/goTop.png'} />
                </div>
                :null
              }
          </div>
        } />
        <Route path="*" element={<div>404 not found</div>}></Route>
      </Routes>
      </div>
    </div>
  );
}


function MenuBar() {
  let navigate = useNavigate();
  return(
    <div className="Header">
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand id="navbarLogo" href={process.env.PUBLIC_URL + "/"}>Gilfinite</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="navbarCategory" onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link className="navbarCategory" onClick={()=>{
              navigate('/aboutme')
              }}>About Me</Nav.Link>
            <Nav.Link className="navbarCategory" onClick={()=>{navigate('/project')}}>Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}


function Footer(){
  return(
    <div className="Footer">
      <div className="ftLogo">
        <h3>Gilfinite :</h3>
        <div style={{color:'white'}}>Hong Gil Dong + Infinite</div>
      </div>
      <div className="ftSns">
        <div className="ftSnsInsta" onClick={()=>{
          window.open('https://www.instagram.com/')
        }}>
        <img src={process.env.PUBLIC_URL + "/images/icon_insta.png"} width="25px"/>
        </div>
        <div className="ftSnsTalk" onClick={()=>{
          window.open('https://open.kakao.com/o/sqpvBcEe')
        }}>
        <img src={process.env.PUBLIC_URL + "/images/icon_kakao.png"} width="25px"/>
        </div>
      </div>
      <div className="ftCopyright">
      Copyright 2022. Hong Gil Dong. All rights reserved.
      </div>
    </div>
  )
}

export default App;
