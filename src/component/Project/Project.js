import { useState, useEffect } from "react";
import { Routes, Router } from "react-router-dom";

function Project() {
    let [pjList, setpjList] = useState([
        {
            id : 'pj001',
            name : 'Bingfinite',
            content : '포트폴리오를 한눈에 볼 수 있도록 제작한 개인 사이트입니다',
            imgPath : 'images/pj_bingfinite.png'
        },
        {
            id : 'pj002',
            name : 'Bear Run',
            content : 'HTML, CSS, JAVA SCRIPT 연습을 위해 만든 미니게임 입니다',
            imgPath : 'images/pj_bearrun.png'
        },
        {
            id : 'pj003',
            name : 'Todo List',
            content : '강의 중 진행한 TodoList를 클론코딩 했습니다',
            imgPath : ''
        },
        {
            id : 'pj004',
            name : 'Market',
            content : '강의 중 진행한 Market 클론코딩 했습니다',
            imgPath : ''
        },

        
        {
            id : 'pj003',
            name : 'Todo List',
            content : '강의 중 진행한 TodoList를 클론코딩 했습니다',
            imgPath : ''
        },
        {
            id : 'pj004',
            name : 'Market',
            content : '강의 중 진행한 Market 클론코딩 했습니다',
            imgPath : ''
        },
        {
            id : 'pj003',
            name : 'Todo List',
            content : '강의 중 진행한 TodoList를 클론코딩 했습니다',
            imgPath : ''
        },
        {
            id : 'pj004',
            name : 'Market',
            content : '강의 중 진행한 Market 클론코딩 했습니다',
            imgPath : ''
        },
        {
            id : 'pj003',
            name : 'Todo List',
            content : '강의 중 진행한 TodoList를 클론코딩 했습니다',
            imgPath : ''
        },
        {
            id : 'pj004',
            name : 'Market',
            content : '강의 중 진행한 Market 클론코딩 했습니다',
            imgPath : ''
        },
        {
            id : 'pj003',
            name : 'Todo List',
            content : '강의 중 진행한 TodoList를 클론코딩 했습니다',
            imgPath : ''
        },
        {
            id : 'pj004',
            name : 'Market',
            content : '강의 중 진행한 Market 클론코딩 했습니다',
            imgPath : ''
        },
    ]);

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