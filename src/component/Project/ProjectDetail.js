import {useParams} from 'react-router-dom';

function ProjecDetail({pjList}) {
    let {id} = useParams();
    
    let cardInfo = pjList.find((pj) => {
        return (pj.id === id)
    });

    return(
            <div className="detailContainer">
                <div className="detailExamWrap">
                    <div className='detailExample'>
                        <div className="detailExamImgMoniter">
                            <img src = {process.env.PUBLIC_URL + cardInfo.detailThumb[0]} />
                        </div>
                        <div className="detailExamImgPhone">
                            <img src = {process.env.PUBLIC_URL + cardInfo.detailThumb[1]} />
                        </div>
                    </div>
                </div>
                <div className="detailComment">
                    <h4>Comment</h4>
                    <div className='enter'>
                        {cardInfo.detailComment}
                    </div>
                </div>
                <div className="detailImg">
                    <div className="detailImgs">
                        <img src = {process.env.PUBLIC_URL + cardInfo.detailImgPath[0]} />
                        <img src = {process.env.PUBLIC_URL + cardInfo.detailImgPath[1]} />
                        <img src = {process.env.PUBLIC_URL + cardInfo.detailImgPath[2]} />
                        <img src = {process.env.PUBLIC_URL + cardInfo.detailImgPath[3]} />
                    </div>
                </div>
            </div>
    )
}

export default ProjecDetail;