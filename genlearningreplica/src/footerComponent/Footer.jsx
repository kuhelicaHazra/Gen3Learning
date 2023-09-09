import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'

export default function Footer() {

    return (
        <>
            <Container className='backgroundimg'>
                <Row>
                    <Col>
                        <Image className='imagepad' src="https://test.gen3learning.com/static/media/Gen3HomeLogo.ff67efacc32d73958274fd251dbdf8fd.svg" rounded />
                    </Col>
                    <Col>
                        <div class="contact-title">Contact us</div>
                        <div class="contact-details">
                            <div class="location-details">
                                <Image src="https://test.gen3learning.com/static/media/map.b14438c90975bddb6f3ca7854d6e692d.svg" class="footer-icon" alt=""/>
                                    <div class="address">105 N Regency Dr Ste 2, Bloomington, IL 61704, United States</div>
                            </div>
                            <div class="phone-details-wrapper">
                                <div class="phone-number">
                                    <Image src="https://test.gen3learning.com/static/media/phone.ad180b23ae89b7c997490cd63f0046b1.svg" class="footer-icon" alt=""/>
                                        <div class="address">+1 309-826-3787</div>
                                </div>
                                <div class="mail-warpper">
                                    <Image src="https://test.gen3learning.com/static/media/mail.bc0646037aea61d9fcdbe6c779fa7cb9.svg" class="footer-icon" alt=""/>
                                        <div class="address">xyz@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}