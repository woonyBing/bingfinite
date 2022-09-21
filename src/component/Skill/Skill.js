import {ProgressBar} from 'react-bootstrap';

function Skill() {
    return(
        <div>
            <div className="Skill">
                <h1 className="SkillTitle">Skill</h1>
                <ProgressBar variant="info" now={20} />
            </div>
        </div>
    )
}

export default Skill;