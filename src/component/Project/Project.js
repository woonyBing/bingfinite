import { useNavigate } from "react-router-dom"

function Project({projectList, i}) {

    return(
        <div>
            <CardCollection projectList={projectList}/>
        </div>
    )
}

function CardCollection({projectList}) {
    let navigate = useNavigate();

    return(
        <div className="cardBox" onClick={()=>{
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