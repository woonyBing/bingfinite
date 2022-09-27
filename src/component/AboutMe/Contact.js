function Contact() {
    return(
        <div>
            <h5 className="contact">Contact</h5>
            <div  className="contactContainer">
                {/* 누르면 메일, 전화번호, 카카오톡 복사되는 거 넣기 */}
            <div className="contactButton">
                <img src={process.env.PUBLIC_URL + '/images/email.png'}/>E-mail</div>
            <div className="contactButton">
                <img src={process.env.PUBLIC_URL + '/images/call.png'}/>Call</div>
            <div className="contactButton">
                <img src={process.env.PUBLIC_URL + '/images/kakao.png'}/>KaKao Talk</div>
            </div>
        </div>
    )
}

export default Contact;