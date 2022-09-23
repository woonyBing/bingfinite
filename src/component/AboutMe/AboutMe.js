import Skill from "./Skill.js";
import Information from "./Information.js";
import Career from "./Career.js";
import {useNavigate} from "react-router-dom"

function AboutMe() {
    let navigate = useNavigate();

    return(
        <div className="AboutHeader">
            <div className="AboutTop">
                <h3>About Me</h3>
                <div style={{color:'gray'}}>안녕하세요 신입 개발자 빙예은입니다</div>
                {/* 누르면 각 분류별로 스크롤 내려가는 기능 넣기 */}
                <div className="abTab" id="Information">Information</div>
                <div className="abTab" id="WorkCareer">Work Career</div>
                <div className="abTab" id="Skill">Skill</div>
                <div className="abTab" id="Contact">Contact</div>
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