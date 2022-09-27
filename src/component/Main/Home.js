import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'


function Home() {

//내비게이트
let navigate = useNavigate();

// 로고 타이핑 효과
let title = ' Bingfinite : ';
let [titleText, setTitleText] = useState('');
let [cnt, setCnt] = useState(0);
let [showExplan, setShowExplan] = useState(false);

useEffect(()=>{
    const titleTimeout = setTimeout(()=>{
    setTitleText(titleText + title[cnt]);
    setCnt(cnt + 1);
    }, 50)

    if(cnt === title.length) {
    clearTimeout(titleTimeout);

    setTimeout(()=>{
        setShowExplan(true); 
    }, 100)
    }
    return ()=>{
        clearTimeout(titleTimeout);
    }
})

//로고 설명 타이핑 효과
let intro = ' 성장 가능성이 무한한 신입 개발자,'
let [introText, setIntroText] = useState('');
let [introCnt, setIntroCnt] = useState(0);
let [showIntro, setShowIntro] = useState(false);

useEffect(()=>{
    const introTimeout = setTimeout(()=>{
        if(showExplan == true){
            setTimeout(()=>{
            setShowIntro(true);
        }, 100)

        setIntroText(introText + intro[introCnt]);
        setIntroCnt(introCnt+1);
        }
    }, 50)

    if(introCnt === intro.length) {
        clearTimeout(introTimeout);
    }
    return ()=>{clearTimeout(introTimeout);}
})

//이름 타이핑 효과 + 스타일 적용
let intName = ' 빙예은'
let [introName, setIntroName] = useState('');
let [nameCnt, setNameCnt] = useState(0);
let [showName, setShowName] = useState(false);
useEffect(()=>{
    const introNameTimeout = setTimeout(()=>{
        if(introCnt === intro.length){
            setTimeout(()=>{
            setShowName(true);
        }, 50)

        setIntroName(introName + intName[nameCnt]);
        setNameCnt(nameCnt + 1);
        }
    }, 50)

    if(nameCnt === intName.length) {
        clearTimeout(introNameTimeout);
    }
    return ()=>{clearTimeout(introNameTimeout);}
})

//로고 설명 타이핑 효과 2
let intro2 = '입니다.'
let [introText2, setIntroText2] = useState('');
let [introCnt2, setIntroCnt2] = useState(0);
let [showIntro2, setShowIntro2] = useState(false);
useEffect(()=>{
    const introTimeout2 = setTimeout(()=>{
        if(nameCnt === intName.length){
            setTimeout(()=>{
            setShowIntro2(true);
        }, 100)

        setIntroText2(introText2 + intro2[introCnt2]);
        setIntroCnt2(introCnt2 + 1);
        }
    }, 50)

    if(introCnt2 === intro2.length) {
        clearTimeout(introTimeout2);
    }
    return ()=>{clearTimeout(introTimeout2);}
})


//버튼 보여지는 효과
let [showButtons, setShowButtons] = useState(false);
let [mainButtonTo, setMainButtonTo] = useState('');
useEffect(()=>{
    const buttonInterval = setTimeout(()=>{
    if (introCnt2 === intro2.length) {
        setTimeout(()=>{
        setShowButtons(true);
        }, 400)
    }
    if (showButtons === true) {
        clearTimeout(buttonInterval);
    }
    return ()=>{
        clearTimeout(buttonInterval);
    }
    })
})

useEffect(()=>{
    const timer = setTimeout( ()=> {
        if(showButtons == true){
            setMainButtonTo('mainButtonTo');
        }
    }, 300);
    
    return () => {
        clearTimeout(timer);
    }
}, [showButtons]);


// 버튼 눌렀을 때 효과 주기
let [buttonBorderFrom, setButtonBorderFrom] = useState('');
let [buttonBorderTo, setButtonBorderTo] = useState('');
let [buttonBorderFrom2, setButtonBorderFrom2] = useState('');
let [buttonBorderTo2, setButtonBorderTo2] = useState('');

// console.log(buttonBorderFrom.length)
useEffect(()=>{
    const timer = setTimeout(()=>{
        if(buttonBorderFrom != 0) {
            setButtonBorderTo(' buttonBorderTo');
        }
    }, 150);
    return () => {
        clearTimeout(timer);
    }
}, [buttonBorderFrom]);

useEffect(()=>{
    const timer = setTimeout(()=>{
        if(buttonBorderFrom2 != 0) {
            setButtonBorderTo2(' buttonBorderTo2');
        }
    }, 150);
    return () => {
        clearTimeout(timer);
    }
}, [buttonBorderFrom2]);



return(
    <div className="Home">
        <div className="title">{titleText}</div>
        {
            showExplan == true ? 
            <div style={{color:'gray', marginBottom:'20px'}}>
                Bing Ye Eun + Infinite
            </div> : null
        }
        {
            showIntro == true ?
            <div className="intro">{introText}</div>
            : null
        }
        {
            showName == true ?
            <div style={{color:'rgb(73, 132, 232)', fontWeight: 'bold'}}>{introName}
            {
            showIntro2 == true ?
            <span style={{fontWeight: 'normal'}}>{introText2}</span>
            : null
            }
            </div>
            : null
        }
        {
            showButtons == true ?
            <div>
                <div className={"mainButtonFrom " + mainButtonTo + buttonBorderFrom + buttonBorderTo} onClick={()=>{
                    setButtonBorderFrom(' buttonBorderFrom');
                    setTimeout(()=>{
                        navigate('/aboutme');}, 500);
                }}>About Me</div>
                <div className={"mainButtonFrom " + mainButtonTo + buttonBorderFrom2 + buttonBorderTo2} onClick={()=>{
                    setButtonBorderFrom2(' buttonBorderFrom2');
                    setTimeout(()=>{
                    navigate('/project');}, 500);
                }}>Project</div>
            </div>
            : null
        }
    </div>
)
}

export default Home;