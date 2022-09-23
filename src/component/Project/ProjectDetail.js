import {useParams} from 'react-router-dom';

function ProjecDetail({pjList}) {
    let {id} = useParams();
    let cardInfo = pjList.find((pj) => {
        return pj.id === id;
    });

    return(
        <div>
            {cardInfo.id}
            프로젝트 디테일 영역
        </div>
    )
}

export default ProjecDetail;