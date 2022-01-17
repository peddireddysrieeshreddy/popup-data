import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./page.css";

const Popup = ({ data1, state }) => {
  const [modal, setModal] = useState(false);
  console.log(data1);
  console.log(state);
  const showModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="pop-upPage">
      <h1>CLICK BELOW BUTTON TO SEE THE DETAILS </h1>
      <Button onClick={showModal}>Button</Button>
      <Modal show={modal}>
        <Modal.Header>Entered Employee Information</Modal.Header>
        <Modal.Body>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Employee Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">NAME</th>
                <td>
                  {data1.firstName}
                  {"_"}
                  {data1.secondName}
                </td>
              </tr>
              <tr>
                <th scope="row">ADDRESS</th>
                <td>{data1.address}</td>
              </tr>
              <tr>
                <th scope="row">CITY</th>
                <td colSpan="2">{data1.city}</td>
              </tr>
              <tr>
                <th scope="row">COUNTRY</th>
                <td colSpan="2">{data1.country}</td>
              </tr>
              <tr>
                <th scope="row">EMPLOYEE NAME</th>
                <td colSpan="2">{state.empName}</td>
              </tr>
              <tr>
                <th scope="row">EMPLOYEE ADDRESS</th>
                <td colSpan="2">{state.empAddress}</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          Thanks For Submitting The Details
          <Button onClick={closeModal} className="btn btn-danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Popup;
