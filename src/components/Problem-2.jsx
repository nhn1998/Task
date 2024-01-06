import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Problem2 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div className="container">

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal A</Modal.Title>
          
        </Modal.Header>
        <Button className='mt-4' variant="success">Modal button A</Button>
        <Button className='mt-4' variant="success">Modal button B</Button>
        <Button className='mt-4' variant="success">Modal button C</Button>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button onClick={handleShow} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>
                
            </div>
        </div>
    );
};

export default Problem2;