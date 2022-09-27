import Information from "./Information.js";
import Skill from "./Skill.js";
import Career from "./Career.js";
import Contact from "./Contact.js";
import {useNavigate, useParams} from "react-router-dom"
import {useEffect, useState} from 'react';

function AboutMe() {
    let navigate = useNavigate();
    let {id} = useParams();
    
    // let [abTabInfoTo, setAbTabInfoTo] = useState('');
    // let [abTabInfoTo2, setAbTabInfoTo2] = useState('');
    // let [abTabInfoTo3, setAbTabInfoTo3] = useState('');
    // let [abTabInfoTo4, setAbTabInfoTo4] = useState('');
    
    let [tabList, setTabList] = useState([
        {
            id : 'Information',
            name : 'Information'
        },
        {
            id : 'WorkCareer',
            name : 'Work Career'
        },
        {
            id : 'Skill',
            name : 'Skill'
        },
        {
            id : 'Contact',
            name : 'Contact'
        }        
    ]);


    let [abTabActiveIndex, setAbTabActiveIndex] = useState(-1);
    let [abTabKeepIndex, setAbTabKeepIndex] = useState(-1);

    //버튼 효과 추가
    function isAbTabInfoTo(index){
        if(index == abTabActiveIndex) {
            return 'abTabInfoTo';
        } else {
            return '';
        }
    }


    // useEffect(()=>{
    //     console.log(document.getElementsByClassName('abTabInfoFrom'))
    //     if(window.location.pathname == '/aboutme/' + id){
    //         document.getElementsByClassName('abTabInfoFrom').className = 'abTabInfoTo'
    //     }
    // }, [window.location.pathname])

    // console.log(window.location.pathname == '/aboutme/' + id);
    // useEffect(()=>{
    //     if(window.location.pathname == '/aboutme/' + id){

    //     }
    // }, [window.location.pathname])
    
    // 도메인이 /abouteme일 때 버튼 스타일 빼기
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
                    {
                        tabList.map((tab, i)=>{
                            return(
                                <div key={tab.id} className={"abTabInfoFrom " + isAbTabInfoTo(i)} onClick={()=>{
                                    setAbTabActiveIndex(i)
                                    navigate('/aboutme/' + tab.id);
                                    document.getElementById(tab.id).scrollIntoView({behavior:'smooth'});
                                }}>
                                    {tab.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            {/* 
            <div className="AboutHeader">
                <div className="AboutTop">
                    <h3>About Me</h3>
                    <div style={{color:'gray'}}>안녕하세요 신입 개발자 빙예은입니다</div>
                    <div className={"abTabInfoFrom " + abTabInfoTo} onClick={()=>{
                        setAbTabInfoTo('abTabInfoTo');
                        setAbTabInfoTo2('');
                        setAbTabInfoTo3('');
                        setAbTabInfoTo4('');
                        navigate('/aboutme/#Information');
                        document.getElementById('Information').scrollIntoView({behavior:'smooth'});
                    }}>Information</div>
                    <div className={"abTabInfoFrom2 " + abTabInfoTo2} onClick={()=>{
                        setAbTabInfoTo2('abTabInfoTo2');
                        setAbTabInfoTo('');
                        setAbTabInfoTo3('');
                        setAbTabInfoTo4('');
                        navigate('/aboutme/#WorkCareer');
                        document.getElementById('WorkCareer').scrollIntoView({behavior:'smooth'});
                    }}>Work Career</div>
                    <div className={"abTabInfoFrom3 " + abTabInfoTo3} onClick={()=>{
                        setAbTabInfoTo3('abTabInfoTo3');
                        setAbTabInfoTo('');
                        setAbTabInfoTo2('');
                        setAbTabInfoTo4('');
                        navigate('/aboutme/#Skill')
                        document.getElementById('Skill').scrollIntoView({behavior:'smooth'});
                    }}>Skill</div>
                    <div className={"abTabInfoFrom4 " + abTabInfoTo4} onClick={()=>{
                        setAbTabInfoTo4('abTabInfoTo4');
                        setAbTabInfoTo('');
                        setAbTabInfoTo2('');
                        setAbTabInfoTo3('');
                        navigate('/aboutme/#Contact')
                        document.getElementById('Contact').scrollIntoView({behavior:'smooth'});
                    }}>Contact</div>
                </div>
            </div>
             */}


            
            <div className="AboutBody">
                <div>
                    <div id="Information">
                        <Information/>
                    </div>
                    <div id="WorkCareer">
                        <Career />
                    </div>
                    <div id="Skill">
                        <Skill />
                    </div>
                    <div id="Contact">
                        <Contact />
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default AboutMe;