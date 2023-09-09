import Card from 'react-bootstrap/Card';
import './program.css'

function Program(props) {
  return (
    <Card style={{ backgroundColor:'#121c1f' }}>
      <Card.Body>
        <Card.Title className='title'>{props.head}</Card.Title>
        <Card.Text className='text'>
         {props.data}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Program;