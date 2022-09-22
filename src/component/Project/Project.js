import { useState, useEffect } from "react";

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
    ]);

    return(
        <div style={{paddingTop:'20px'}}>
            <div className="mainPjCard">
                <div className="cardBox">
                <div className="cardImg">
                    <img src={process.env.PUBLIC_URL + pjList[0].imgPath} width='100%'/>
                </div>
                <h3 className="cardName">{pjList[0].name}</h3>
                <div className="cardContent">{pjList[0].content}</div>
                </div>
                <div className="cardBox">
                <div className="cardImg">
                    <img src={process.env.PUBLIC_URL + pjList[1].imgPath} width='100%'/>
                </div>
                <h3 className="cardName">{pjList[1].name}</h3>
                <div className="cardContent">{pjList[1].content}</div>
                </div>
            </div>
        </div>
    )
}

export default Project;