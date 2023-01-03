import React, { useState , useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Show(props) {
  const [show, setShow] = useState(false);


  const handleClose = () =>{ setShow(false)

props.setList([...props.list,
  {
  name:tit.current.value,
  rate:rat.current.value,
  imgsr:url.current.value,
 }
])
};
const handleShow = () => setShow(true);
  const tit=useRef()
  const rat=useRef()
  const url=useRef()

 
  
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <input type={"text"} ref={tit} placeholder="name  movie "></input>
      <input type={"text"} ref={rat} placeholder="rate  movie "></input>
      <input type={"text"} ref={url} placeholder="Image link "></input>
      
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default  Show;