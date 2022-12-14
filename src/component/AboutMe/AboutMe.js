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
    
    // // 탭 선택 후 버튼 컬러 변경
    // console.log(window.location.pathname == '/aboutme/' + id);
    // console.log(window.location.pathname == process.env.PUBLIC_URL + '/aboutme/' + id)
    useEffect(()=>{
        if(window.location.pathname == process.env.PUBLIC_URL + '/aboutme/' + id){
            tabList.find((list, i)=>{
                // console.log(i)
                if(list.id == id) {
                    setAbTabActiveIndex(i);
                    console.log(i);
                    console.log(isAbTabInfoTo(i));
                }
            })
        }
    }, [window.location.pathname])
    
    
    // 도메인이 /abouteme일 때 버튼 스타일 빼기
    useEffect(()=>{
        if(window.location.pathname == process.env.PUBLIC_URL + '/aboutme/'){
            setAbTabActiveIndex(-1);
        }
    }, [window.location.pathname])


    
    return(
        <div>

            <div className="AboutHeader">
                <div className="AboutTop">
                    <h3>About Me</h3>
                    <div style={{color:'gray'}}>안녕하세요 신입 개발자 홍길동입니다</div>
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