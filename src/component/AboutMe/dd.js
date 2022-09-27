import {useNavigate, browserHistory} from "react-router-dom"
import {useEffect, useState, useRef} from 'react'

function AboutMe() {
    let navigate = useNavigate();

    let [abTabActiveIndex, setAbTabActiveIndex] = useState(-1);
    let {abInfo} = useRef();

    function isAbTabInfoTo(index){
        if(index == abTabActiveIndex) {
            return 'abTabInfoTo';
        } else {
            return '';
        }
    }

    useEffect(()=>{
        if(window.location.pathname == '/aboutme'){
            setAbTabActiveIndex(-1);
        }        
    }, [window.location.pathname])
    
    return(
        <div>

            <div className="AboutHeader">
                <div className="AboutTop">
                    <h3>About Me</h3>
                    <div style={{color:'gray'}}>안녕하세요 신입 개발자 빙예은입니다</div>
                    {/* 누르면 각 분류별로 스크롤 내려가는 기능 넣기 */}
                    <div className={"abTabInfoFrom " + isAbTabInfoTo(0)} onClick={()=>{
                        setAbTabActiveIndex(0);
                        navigate('/aboutme/#Information');
                        document.getElementById('Information').scrollIntoView({behavior:'smooth'});
                    }}>Information</div>
                    <div className={"abTabInfoFrom " + isAbTabInfoTo(1)} onClick={()=>{
                        setAbTabActiveIndex(1);
                        navigate('/aboutme/#WorkCareer');
                        document.getElementById('WorkCareer').scrollIntoView({behavior:'smooth'});
                    }}>Work Career</div>
                    <div className={"abTabInfoFrom " + isAbTabInfoTo(2)} onClick={()=>{
                        setAbTabActiveIndex(2);
                        navigate('/aboutme/#Skill')
                        document.getElementById('Skill').scrollIntoView({behavior:'smooth'});
                    }}>Skill</div>
                    <div className={"abTabInfoFrom " + isAbTabInfoTo(3)} onClick={()=>{
                        setAbTabActiveIndex(3);
                        navigate('/aboutme/#Contact')
                        document.getElementById('Contact').scrollIntoView({behavior:'smooth'});
                    }}>Contact</div>
                </div>
            </div>