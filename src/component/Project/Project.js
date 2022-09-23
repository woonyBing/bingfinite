function Project({pjList}) {

    return(
        <div>
            <h3 style={{textAlign:'center', marginTop:'80px'}}>Project</h3>
            <div className="CardWrap">
                <div className="CardContainer">
                    {
                        pjList.map((projectList, i)=>{
                            return(
                                <CardCollection key={projectList.id} projectList={projectList} i={i}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function CardCollection({projectList, i}) {
    return(
        <div className="cardBox">
            <div className="cardImg">
                <img src={process.env.PUBLIC_URL + projectList.imgPath} width='100%'/>
            </div>
            <h3 className="cardName">{projectList.name}</h3>
            <div className="cardContent">{projectList.content}</div>
        </div>
    )
}

export default Project;