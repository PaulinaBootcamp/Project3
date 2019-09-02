
import React from "react";
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import "./style.css";




function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
      {props.modalHeading} 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AddUnitModal(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>     
      <span  className="edit-btn" variant="primary" onClick={() => setModalShow(true)}>
{props.buttonContent}     
</span>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
          modalHeading={props.modalHeading}    >
        {props.children}
      </MyVerticallyCenteredModal>
    </ButtonToolbar>
  );
}

export default AddUnitModal;