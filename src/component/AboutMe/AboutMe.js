import Information from "./Information.js";
import Skill from "./Skill.js";
import Career from "./Career.js";
import Contact from "./Contact.js";
import {useNavigate, useParams} from "react-router-dom"
import {useEffect, useState} from 'react';

function AboutMe() {
    let navigate = useNavigate();
    let {id} = useParams();

    
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

    //버튼 효과 추가
    function isAbTabInfoTo(index){
        if(index == abTabActiveIndex) {
            return 'abTabInfoTo';
        } else {
            return '';
        }
    }
    
    // let [abTabInfoTo, setAbTabInfoTo] = useState('')
    // url 경로 id 동일한 애 찾아서 
    // console.log(window.location.pathname == '/aboutme/' + id);
    useEffect(()=>{
        if(window.location.pathname == '/aboutme/' + id){
            tabList.find((list, i)=>{
                // console.log(i)
                if(list.id == id) {
                    setAbTabActiveIndex(i);
                }
            })
        }
    }, [window.location.pathname])
    
    
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