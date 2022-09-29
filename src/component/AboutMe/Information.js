import {Container, Card, ListGroup} from 'react-bootstrap';

function Information() {
    return(
        <div className="info">
            <h5 style={{color:'rgb(73, 132, 232)'}}>Information</h5>
            <div style={{fontSize:'25px'}}>저를 소개합니다</div>
            <div style={{marginTop:'20px', fontSize:'14px'}}>
                노력은 배신하지 않는다는 말을 믿습니다.<br/>
                꾸준한 노력으로 멈춰 있지 않고<br/>
                성장하는 모습을 보여드리겠습니다.
            </div>
            <div style={{marginTop:'20px'}}>
                <Container>
                    <Card className='card'>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" />
                        <Card.Body>
                            <Card.Title>홍 길 동</Card.Title>
                            <ListGroup.Item>Hong Gil Dong</ListGroup.Item>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>1983.04.05</ListGroup.Item>
                            <ListGroup.Item>010-1234-5678</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0" target='_blank'>Blog</Card.Link>
                            <Card.Link href="https://www.instagram.com/" target='_blank'>Instagram</Card.Link>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </div>
    )
}

export default Information;