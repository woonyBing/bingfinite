import {useParams} from 'react-router-dom';

function ProjecDetail({pjList}) {
    let {id} = useParams();
    
    let cardInfo = pjList.find((pj, i) => {
        return (pj.id === id)
    });

    // console.log(cardInfo.detailThumb.length)
    
    return(
            <div className="detailContainer">
                <div className="detailThumb">
                    <div className="detailThumbsMN">
                        <img src = {process.env.PUBLIC_URL+cardInfo.detailThumb[0]} />
                    </div>
                    {/* <div className="detailThumbsMN">
                        <img src = {process.env.PUBLIC_URL + cardInfo.detailThumb[0]} />
                    </div>
                    <div className="detailThumbsP">
                        <img src = {process.env.PUBLIC_URL + cardInfo.detailThumb[1]} />
                    </div> */}
                </div>
                <div className="detailComment">
                    <h4>Comment</h4>
                    <div>
                        {cardInfo.detailComment}
                    </div>
                </div>
                <div className="detailImg">
                    <div className="detailImgs">
                        <img src = {process.env.PUBLIC_URL + cardInfo.detailImgPath[0]} />
                        <img src = {process.env.PUBLIC_URL + cardInfo.detailImgPath[1]} />
                        <img src = {process.env.PUBLIC_URL + cardInfo.detailImgPath[2]} />
                    </div>
                </div>
            </div>
    )
}

export default ProjecDetail;