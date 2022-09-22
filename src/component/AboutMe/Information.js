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
                    <Card style={{ width: '70%', margin: "0 auto" }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>빙예은(氷藝殷)</Card.Title>
                            <ListGroup.Item>Bing Ye Eun</ListGroup.Item>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>1995.01.05</ListGroup.Item>
                            <ListGroup.Item>010-2024-8903</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://blog.naver.com/honeybye" target='_blank'>Blog</Card.Link>
                            <Card.Link href="#" target='_blank'>Instagram</Card.Link>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </div>
    )
}

export default Information;