import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function ModalComponent({title, image, author, publisher, date, desc,...props}) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
      <Container>
          <Row>
            <Col xs={6} md={4}>
                <img src={image} alt="image" />
            </Col>
            <Col xs={12} md={8}>
                <p>title: {title}</p>
                <p>Author: {author}</p>
                <p>Publisher: {publisher}</p>
                <p>Publish Date: {date}</p>
                
            </Col>
          </Row>
          <Row>
            <Col xs={18} md={12}>
              <p className='mt-5'>Description: </p>
              <p className='text-start'>{desc}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent