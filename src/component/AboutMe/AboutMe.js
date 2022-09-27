import Information from "./Information.js";
import Skill from "./Skill.js";
import Career from "./Career.js";
import Contact from "./Contact.js";
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
                <div className={"abTabInfoFrom " + abTabInfoTo} onClick={()=>{
                    navigate('/aboutme/#Information');
                    setAbTabInfoTo('abTabInfoTo');
                    setAbTabInfoTo2('');
                    setAbTabInfoTo3('');
                    setAbTabInfoTo4('');
                }}>Information</div>
                <div className={"abTabInfoFrom2 " + abTabInfoTo2} onClick={()=>{
                    navigate('/aboutme/#WorkCareer');
                    setAbTabInfoTo2('abTabInfoTo2');
                    setAbTabInfoTo('');
                    setAbTabInfoTo3('');
                    setAbTabInfoTo4('');
                }}>Work Career</div>
                <div className={"abTabInfoFrom3 " + abTabInfoTo3} onClick={()=>{
                    navigate('/aboutme/#Skill')
                    setAbTabInfoTo3('abTabInfoTo3');
                    setAbTabInfoTo('');
                    setAbTabInfoTo2('');
                    setAbTabInfoTo4('');
                }}>Skill</div>
                <div className={"abTabInfoFrom4 " + abTabInfoTo4} onClick={()=>{
                    navigate('/aboutme/#Contact')
                    setAbTabInfoTo4('abTabInfoTo4');
                    setAbTabInfoTo('');
                    setAbTabInfoTo2('');
                    setAbTabInfoTo3('');
                }}>Contact</div>
            </div>
            <div className="AboutBody">
                <Information id="Information"/>
                <Career id="WorkCareer"/>
                <Skill id="Skill"/>
                <Contact id="Contact" />
            </div>
        </div>
    )
}


export default AboutMe;