import Skill from "./Skill.js";
import Information from "./Information.js";
import Career from "./Career.js";
import {useNavigate} from "react-router-dom"
import {useState} from 'react';

function AboutMe() {
    let navigate = useNavigate();

    let [abTabInfoTo, setAbTabInfoTo] = useState('');
    let [abTabInfoTo2, setAbTabInfoTo2] = useState('');
    let [abTabInfoTo3, setAbTabInfoTo3] = useState('');
    let [abTabInfoTo4, setAbTabInfoTo4] = useState('');

    return(
        <div className="AboutHeader">
            <div className="AboutTop">
                <h3>About Me</h3>
                <div style={{color:'gray'}}>안녕하세요 신입 개발자 빙예은입니다</div>
                {/* 누르면 각 분류별로 스크롤 내려가는 기능 넣기 */}
                <div className={"abTabInfoFrom " + abTabInfoTo} id="Information" onClick={()=>{
                    navigate('/aboutme');
                    setAbTabInfoTo('abTabInfoTo');
                    setAbTabInfoTo2('');
                    setAbTabInfoTo3('');
                    setAbTabInfoTo4('');
                }}>Information</div>
                <div className={"abTabInfoFrom2 " + abTabInfoTo2} id="WorkCareer" onClick={()=>{
                    navigate('/aboutme');
                    setAbTabInfoTo2('abTabInfoTo2');
                    setAbTabInfoTo('');
                    setAbTabInfoTo3('');
                    setAbTabInfoTo4('');
                }}>Work Career</div>
                <div className={"abTabInfoFrom3 " + abTabInfoTo3} id="Skill" onClick={()=>{
                    navigate('/aboutme')
                    setAbTabInfoTo3('abTabInfoTo3');
                    setAbTabInfoTo('');
                    setAbTabInfoTo2('');
                    setAbTabInfoTo4('');
                }}>Skill</div>
                <div className={"abTabInfoFrom4 " + abTabInfoTo4} id="Contact" onClick={()=>{
                    navigate('/aboutme')
                    setAbTabInfoTo4('abTabInfoTo4');
                    setAbTabInfoTo('');
                    setAbTabInfoTo2('');
                    setAbTabInfoTo3('');
                }}>Contact</div>
            </div>
            <div className="AboutBody">
                <Information id="Information"/>
                <Career/>
                <div className="Skill" style={{backgroundColor:'rgb(248, 248, 248)', paddingTop:'80px', paddingBottom:'80px'}}>
                    <h5 style={{color:'rgb(73, 132, 232)'}}>Skill</h5>
                    <Skill/>
                </div>
                <div>
                    <h5 className="contact">Contact</h5>
                    <div  className="contactContainer">
                        {/* 누르면 메일, 전화번호, 카카오톡 복사되는 거 넣기 */}
                    <div className="contactButton">
                        <img src={process.env.PUBLIC_URL + 'images/email.png'}/>E-mail</div>
                    <div className="contactButton">
                        <img src={process.env.PUBLIC_URL + 'images/call.png'}/>Call</div>
                    <div className="contactButton">
                        <img src={process.env.PUBLIC_URL + 'images/kakao.png'}/>KaKao Talk</div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AboutMe;