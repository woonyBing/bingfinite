import { ProgressBar } from "react-bootstrap";

function Skill() {
    return(
        <div>
            <div className='skillType'>
                <div className="skillIcon">
                    <img src="https://cdn-icons-png.flaticon.com/512/919/919854.png" width='50px'/>
                </div>
                <div style={{width: '80%', margin:'auto'}}>
                    <div>JAVA</div>
                    <ProgressBar variant="info" now={50} />
                </div>
            </div>
            <div className='skillType'>
                <div className="skillIcon">
                    <img src="https://cdn-icons-png.flaticon.com/512/919/919828.png" width='50px'/>
                </div>
                <div style={{width: '80%', margin:'auto'}}>
                    <div>JAVA SCRIPT</div>
                    <ProgressBar variant="info" now={80} />
                </div>
            </div>
            <div className='skillType'>
                <div className="skillIcon">
                    <img src="https://cdn-icons-png.flaticon.com/512/919/919852.png" width='50px'/>
                </div>
                <div style={{width: '80%', margin:'auto'}}>
                    <div>Python</div>
                    <ProgressBar variant="info" now={50} />
                </div>
            </div>
            <div className='skillType'>
                <div className="skillIcon">
                    <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" width='50px'/>
                </div>
                <div style={{width: '80%', margin:'auto'}}>
                    <div>REACT</div>
                    <ProgressBar variant="info" now={90} />
                </div>
            </div>
            <div className='skillType'>
                <div className="skillIcon">
                    <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" width='50px'/>
                </div>
                <div style={{width: '80%', margin:'auto'}}>
                    <div>CSS</div>
                    <ProgressBar variant="info" now={70} />
                </div>
            </div>
            <div className='skillType'>
                <div className="skillIcon">
                    <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" width='50px'/>
                </div>
                <div style={{width: '80%', margin:'auto'}}>
                    <div>HTML</div>
                    <ProgressBar variant="info" now={80} />
                </div>
            </div>
            <div className='skillType'>
                <div className="skillIcon">
                    <img src="https://cdn-icons-png.flaticon.com/512/552/552220.png" width='50px'/>
                </div>
                <div style={{width: '80%', margin:'auto'}}>
                    <div>Photoshop</div>
                    <ProgressBar variant="info" now={100} />
                </div>
            </div>
        </div>
    )
}

export default Skill;