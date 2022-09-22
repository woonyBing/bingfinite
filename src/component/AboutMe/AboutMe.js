import Skill from "./Skill.js";
import Information from "./Information.js";
import Career from "./Career.js";

function AboutMe() {
    return(
        <div className="AboutHeader">
            <div className="AboutTop">
                <h3>About Me</h3>
                <div style={{color:'gray'}}>안녕하세요 신입 개발자 빙예은입니다</div>
                <div className="abTab">Information</div>
                <div className="abTab">Work Career</div>
                <div className="abTab">Skill</div>
                <div className="abTab">Contact</div>
            </div>
            <div className="AboutBody">
                <Information/>
                <Career/>
                <div className="Skill" style={{backgroundColor:'rgb(248, 248, 248)', paddingTop:'80px', paddingBottom:'80px'}}>
                    <h5 style={{color:'rgb(73, 132, 232)'}}>Skill</h5>
                    <Skill/>
                </div>
                <div>
                    <h5 className="contact">Contact</h5>
                    <div  className="contactContainer">
                    <div className="contactButton">
                        <img src={process.env.PUBLIC_URL + 'images/email.png'}/>E-mail</div>
                    <div className="contactButton"><img src={process.env.PUBLIC_URL + 'images/call.png'}/>Call</div>
                    <div className="contactButton"><img src={process.env.PUBLIC_URL + 'images/kakao.png'}/>KaKao Talk</div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AboutMe;