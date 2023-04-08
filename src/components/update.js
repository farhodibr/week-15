import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


export default function Update(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(props.contactId)

  const updateData = () => {
    axios.put(`https://64095fb26ecd4f9e18aec05b.mockapi.io/contacts/${id}`, {
      firstName,
      lastName,
      email,
    });
  };

  const deleteData = () => {
    axios.delete(`https://64095fb26ecd4f9e18aec05b.mockapi.io/contacts/${id}`, {
        
      });
  }
  useEffect( () => setId(props.contactId))
  console.log(id);
  console.log(firstName);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">First Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            onChange={(event) => setFirstName(event.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            onChange={(event) => setLastName(event.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Email</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div >
        <button onClick={updateData} >
          Submit
        </button>
        </div>
      </form>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={updateData}>
            Save Changes
          </Button>
          <Button  onClick={handleClose} type='submit'>
            Submit
          </Button>
          <Button  onClick={deleteData} type='submit'>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
