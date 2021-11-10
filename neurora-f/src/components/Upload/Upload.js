import './Upoad.css';
import Form from 'react-bootstrap/Form';
import { Row, Col } from "react-bootstrap";
import Navi from '../Navbar/Navbar';


function Upload() {
    return (
      <div className="Upload">
         <Navi/>
          <p className="head">Upload EEG Signals</p>

      <div className="form">  
          <Form>
  <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
    <Form.Label column sm="2">
      Doctor ID
    </Form.Label>
    <Col sm="10">
      <Form.Control type="email" size="lg" placeholder="Enter Doctor ID" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Patient ID
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" size="lg" placeholder="Enter patient ID" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Patient Name
    </Form.Label>
    <Col sm="10">
      <Form.Control type="name" size="lg" placeholder="Enter patient name" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Date of recording EEG
    </Form.Label>
    <Col sm="10">
      <Form.Control type="date" size="lg" placeholder="dd/mm/yyyy" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Time of recording EEG
    </Form.Label>
    <Col sm="10">
      <Form.Control type="recording" size="lg" placeholder="hh:mm" />
    </Col>
  </Form.Group>
  <Form.Group controlId="formFile"  className="mb-3">
    <Form.Label>Upload recording in csv format-</Form.Label>
    <Form.Control type="file" size="lg" />
  </Form.Group>
</Form>


</div>
      </div>
    );
  }
  
  export default Upload;
  