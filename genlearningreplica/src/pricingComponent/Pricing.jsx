import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './pricing.css'

function Pricing(props) {

    return (
        <>
                    <Card style={{ backgroundColor: '#121c1f' }}>
                        <Card.Body>
                            <Card.Title className='title'>{props.head}</Card.Title>
                            <Card.Text className='text'>
                                {props.body}
                                &nbsp;&nbsp;<Button variant="outline-warning">Get Started</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
        </>
    );
}

export default Pricing;