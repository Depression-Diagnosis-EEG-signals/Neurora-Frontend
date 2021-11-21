import './Upoad.css';
import Form from 'react-bootstrap/Form';
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'


function Upload() {
    return (
      <div className="Upload">
        
          <p className="head">Upload EEG Signals</p>

      <div className="uform"> 
      <Form> 
      <div className="row"> 
        <div className="col-sm-6 left">
        <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="2">
      Doctor ID
    </Form.Label>
    <Col sm="10">
      <Form.Control type="doctorid"   placeholder="Enter Doctor ID" />
    </Col>
  </Form.Group>
        </div>
          
        <div className="col-sm-6 right">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Date of recording EEG
    </Form.Label>
    <Col sm="10">
      <Form.Control type="date" placeholder="dd/mm/yyyy" />
    </Col>
  </Form.Group>
  </div>
  </div>
  <div className="row"> 
  <div className="col-sm-6 left">


  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Patient ID
    </Form.Label>
    <Col sm="10">
      <Form.Control type="patientid"  placeholder="Enter patient ID" />
    </Col>
  </Form.Group>
  </div>
  <div className="col-sm-6 right">
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Time of recording EEG
    </Form.Label>
    <Col sm="10">
      <Form.Control type="recording"  placeholder="hh:mm" />
    </Col>
  </Form.Group>
  </div>
  </div>
  <div className="row"> 
  <div className="col-sm-6 left">

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Patient Name
    </Form.Label>
    
    <Col sm="10">
      <Form.Control type="name" placeholder="Enter patient name" />
    </Col>
  </Form.Group>
  </div>
  <div className="col-sm-6 right">
  
  
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Recording Type
    </Form.Label>
    <Col sm="10">
      <Form.Control type="name"  placeholder="Enter format of recorded eeg signals" />
    </Col>
  </Form.Group>
  </div>
  </div>
  <div className="row"> 
  <div className="col-sm-6 left">

  <Form.Group controlId="formFile"  className="mb-3 ">
    <Form.Label>Upload recording</Form.Label>
    <Form.Control type="file"    />
  </Form.Group>
  </div>
  <div className="col-sm-6 ">
  <div className="btt">
<Button variant="success" >Submit</Button>{' '}
</div>
</div>
  </div>
</Form>

</div>

</div>

     
      
      
    );
    
  }
  
  export default Upload;
  