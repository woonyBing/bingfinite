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
        const cardUpTimer = setTimeout(()=>{
            setCardBoxTo('cardBoxTo');
        }, 200)

        return ()=>{
            clearTimeout(cardUpTimer);
        }
    }, [window.location.pathname])

    // useEffect(()=>{
    //     if(window.location.pathname == '/project'){
    //         setAbTabActiveIndex(-1);
    //     }
    // }, [window.location.pathname])

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