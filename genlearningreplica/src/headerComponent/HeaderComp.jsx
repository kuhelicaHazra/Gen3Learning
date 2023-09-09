import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './header.css';
import Button from 'react-bootstrap/Button';


export default function HeaderComp() {

    return (
        <>
            <Container className='backgroundimg'>
                <Row>
                    <Col>
                        <img className='learn' src="https://test.gen3learning.com/static/media/bannertext1.026d70650921b4de88e451182eb836df.svg"></img>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="outline-warning" className='register button1' onClick={(e)=>alert('clicked')}>Register Now</Button>{' '}
                        <img className='learn' alt="learn and explore and apply" src="https://test.gen3learning.com/static/media/bannertext2.8fa3ee04615fc6c88ea188f0448165ba.svg"></img>
                    </Col>
                </Row>
            </Container>
        </>
    )
}