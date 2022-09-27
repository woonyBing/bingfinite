import { useState, useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Contact() {
    // alert('E-mail이 복사되었습니다');

    let email = 'abc12@naver.com';
    let phoneNumber = '010-1234-5678';

    return(
        <div className="contactContainer">
            <h5 className="contact">Contact</h5>
            <div className="contactBox">
                <CopyToClipboard text={email} onCopy={()=>alert('주소가 복사되었습니다. ( ' + email + ' )' )}>
                    <div className="contactButton">
                        <img src={process.env.PUBLIC_URL + '/images/email.png'}/>E-mail
                    </div>
                </CopyToClipboard>
                
                <CopyToClipboard text={email} onCopy={()=>alert('번호가 복사되었습니다. ( ' + phoneNumber + ' )' )}>
                    <div className="contactButton">
                        <img src={process.env.PUBLIC_URL + '/images/call.png'}/>Call
                    </div>
                </CopyToClipboard>
                <div className="contactButton" onClick={()=>{
                    window.open('https://open.kakao.com/o/sqpvBcEe')
                }}>
                    <img src={process.env.PUBLIC_URL + '/images/kakao.png'}/>KaKao Talk</div>
            </div>
        </div>
    )
}

export default Contact;