import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function Project({projectList, i}) {

    return(
        <div>
            <CardCollection projectList={projectList}/>
        </div>
    )
}




function CardCollection({projectList}) {
    let navigate = useNavigate();
    let [cardBoxTo, setCardBoxTo] = useState('');
    
    useEffect(()=>{
        if(window.location.pathname == process.env.PUBLIC_URL + '/project'){
            const cardUpTimer = setTimeout(()=>{
                setCardBoxTo('cardBoxTo');
            }, 150)
    
            return ()=>{
                clearTimeout(cardUpTimer);
            }
        }
    })


    return(
        <div className={"cardBox "  +cardBoxTo} onClick={()=>{
            // console.log('/' + projectList.id)
            navigate('/project/' + projectList.id)}}>
            <div className="cardImg">
                <img src={process.env.PUBLIC_URL + projectList.mainImgPath}/>
            </div>
            <h3 className="cardName">{projectList.name}</h3>
            <div className="cardContent">{projectList.content}</div>
        </div>
    )
}

export default Project;