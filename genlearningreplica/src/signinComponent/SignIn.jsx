import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

function SignIn() {
  const [show, setShow] = useState(false);
  const [showerror, setShowError] = useState(false);

  const handleSumit = () => {
    //setShow(false);
    setShowError(true);
  }
  const handleClose = () => {
    setShow(false);
    setShowError(true);
  }
  const handleShow = () => {
    setShow(true);
    setShowError(false);
  }

  return (
    <>
      <Button variant="outline-warning" onClick={handleShow}>
        Sign In
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
    </Form>
    {
    showerror ? (
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
        <Alert.Heading>You got an error!</Alert.Heading>
        <p>
        Error Signing In.
        </p>
      </Alert>
    ): ''
}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSumit}>
            SignIn
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignIn;