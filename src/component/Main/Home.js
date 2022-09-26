import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'


function Home() {
let navigate = useNavigate();

let title = ' Bingfinite : ';
let [titleText, setTitleText] = useState('');
let [cnt, setCnt] = useState(0);
let [showExplan, setShowExplan] = useState(false);

useEffect(()=>{
    const titleInterval = setInterval(()=>{
    setTitleText(titleText + title[cnt]);
    setCnt(cnt + 1);
    }, 50)

    if(cnt === title.length) {
    clearInterval(titleInterval);

    setInterval(()=>{
        setShowExplan(true); 
    }, 100)
    }
    return ()=>{
    clearInterval(titleInterval);
    }
})

let intro = ' 성장 가능성이 무한한 신입 개발자,'
let [introText, setIntroText] = useState('');
let [introCnt, setIntroCnt] = useState(0);
let [showIntro, setShowIntro] = useState(false);

useEffect(()=>{
    const introInterval = setInterval(()=>{
        if(showExplan == true){
        setInterval(()=>{
            setShowIntro(true);
        }, 100)

        setIntroText(introText + intro[introCnt]);
        setIntroCnt(introCnt+1);
        }
    }, 50)

    if(introCnt === intro.length) {
        clearInterval(introInterval);
    }
    return ()=>{clearInterval(introInterval);}
})


let intName = ' 빙예은'
let [introName, setIntroName] = useState('');
let [nameCnt, setNameCnt] = useState(0);
let [showName, setShowName] = useState(false);
useEffect(()=>{
    const introNameInterval = setInterval(()=>{
        if(introCnt === intro.length){
        
        setInterval(()=>{
            setShowName(true);
        }, 50)

        setIntroName(introName + intName[nameCnt]);
        setNameCnt(nameCnt + 1);
        }
    }, 50)

    if(nameCnt === intName.length) {
        clearInterval(introNameInterval);
    }
    return ()=>{clearInterval(introNameInterval);}
})

let intro2 = '입니다.'
let [introText2, setIntroText2] = useState('');
let [introCnt2, setIntroCnt2] = useState(0);
let [showIntro2, setShowIntro2] = useState(false);
useEffect(()=>{
    const introInterval2 = setInterval(()=>{
        if(nameCnt === intName.length){
        setInterval(()=>{
            setShowIntro2(true);
        }, 100)

        setIntroText2(introText2 + intro2[introCnt2]);
        setIntroCnt2(introCnt2 + 1);
        }
    }, 50)

    if(introCnt2 === intro2.length) {
        clearInterval(introInterval2);
    }
    return ()=>{clearInterval(introInterval2);}
})



let [showButtons, setShowButtons] = useState(false);
let [mainButtonTo, setMainButtonTo] = useState('');
let [mainBgColor, setMainBgColor] = useState('');
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

// useEffect(()=>{
//     const timer = setTimeout( ()=> {
//         if(mainButtonTo != 0 ){
//             setMainBgColor('mainBgColor');
//         }
//     }, 300);
    
//     return () => {
//         clearTimeout(timer);
//     }
// });


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
                <div className={"mainButtonFrom " + mainButtonTo} onClick={()=>{
                    navigate('/aboutme')
                }}>About Me</div>
                <div className={"mainButtonFrom " + mainButtonTo} onClick={()=>{navigate('/project')}}>Project</div>
            </div>
            : null
        }
        
    </div>
)
}

export default Home;