import { ProgressBar } from "react-bootstrap";

function Skill() {
    return(
        <div>
            <div className='skillType'>
                <div className="skillIcon"></div>
                <div style={{width: '80%', margin:'auto'}}>
                    <div>JAVA</div>
                    <ProgressBar variant="info" now={50} />
                </div>
            </div>
            <div className='skillType'>
                <div className="skillIcon"></div>
                <div style={{width: '80%', margin:'auto'}}>
                    <div>JAVA SCRIPT</div>
                    <ProgressBar variant="info" now={80} />
                </div>
            </div>
            <div className='skillType'>
                <div className="skillIcon"></div>
                <div style={{width: '80%', margin:'auto'}}>
                    <div>REACT</div>
                    <ProgressBar variant="info" now={90} />
                </div>
            </div>
            <div className='skillType'>
                <div className="skillIcon"></div>
                <div style={{width: '80%', margin:'auto'}}>
                    <div>Photoshop</div>
                    <ProgressBar variant="info" now={100} />
                </div>
            </div>
        </div>
    )
}

export default Skill;