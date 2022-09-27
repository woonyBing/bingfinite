import { ProgressBar } from "react-bootstrap"
import { useState, useEffect } from "react";

function Skill() {
    let [skList, setSkList] = useState([
    {
        id:'sk001',
        name:'JAVA',
        ability : 80,
        imgPath : "https://cdn-icons-png.flaticon.com/512/919/919854.png"
    },
    {
        id:'sk002',
        name:'JAVA SCRIPT',
        ability : 90,
        imgPath : "https://cdn-icons-png.flaticon.com/512/919/919828.png"
    },
    {
        id:'sk003',
        name:'PYTHON',
        ability : 70,
        imgPath : "https://cdn-icons-png.flaticon.com/512/919/919852.png"
    },
    {
        id:'sk004',
        name:'REACT',
        ability : 80,
        imgPath : "https://cdn-icons-png.flaticon.com/512/919/919851.png"
    },
    {
        id:'sk005',
        name:'CSS',
        ability : 80,
        imgPath : "https://cdn-icons-png.flaticon.com/512/919/919826.png"
    },
    {
        id:'sk006',
        name:'HTML',
        ability : 90,
        imgPath : "https://cdn-icons-png.flaticon.com/512/919/919827.png"
    },
    {
        id:'sk007',
        name:'PHTHOSHOP',
        ability : 100,
        imgPath : "https://cdn-icons-png.flaticon.com/512/552/552220.png"
    }
])
    return(
        <div>
            <div className="Skill" style={{backgroundColor:'rgb(248, 248, 248)', paddingTop:'80px', paddingBottom:'80px'}}>
                <h5 style={{color:'rgb(73, 132, 232)'}}>Skill</h5>
            {
                skList.map((skillList, i)=>{
                    return(
                        <SkillCollection key={skillList.id} skillList={skillList} i={i}/>
                    )
                })
            }
            
            </div>
        </div>
    )
}

function SkillCollection({skillList, i}) {
    return(
        <div className='skillType'>
            <div className="skillIcon">
                <img src={skillList.imgPath} width='50px'/>
            </div>
            <div style={{width: '80%', margin:'auto'}}>
                <div>{skillList.name}</div>
                <ProgressBar variant="info" now={skillList.ability} />
            </div>
        </div>
    )
}
export default Skill;