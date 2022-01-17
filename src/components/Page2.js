import React, { useState } from "react";
import "./page.css";
import Popup from "./Popup";

const Page2 = ({ data1 }) => {
  console.log(data1);
  const [toggle, setToggle] = useState(true);
  const [state, setstate] = useState({
    empName: "",
    empAddress: "",
  });
  const [data, setData] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (state) {
      setData([...data, { state }]);
    }
    setToggle(false);
  };

  const onFormChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };
  return (
    <>
      {toggle && (
        <div className="container">
          <div className="container2">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>FIRST PAGE DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">NAME</th>
                  <td colSpan="2">
                    {data1.firstName}
                    {"_"}
                    {data1.secondName}
                  </td>
                </tr>
                <tr>
                  <th scope="row">ADDRESS</th>
                  <td colSpan="2">{data1.address}</td>
                </tr>
                <tr>
                  <th scope="row">CITY</th>
                  <td colSpan="2">{data1.city}</td>
                </tr>
                <tr>
                  <th scope="row">COUNTRY</th>
                  <td colSpan="2">{data1.country}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>PLEASE FILL THE FOLLOWING DETAILS</h2>
          <div className="input">
            <form>
              <input
                type="text"
                required
                className="input"
                name="empName"
                placeholder="Employee Name"
                onChange={onFormChange}
              />
              <input
                type="text"
                required
                className="input"
                name="empAddress"
                placeholder="Employee Address"
                onChange={onFormChange}
              />
            </form>

            <div>
              <button className="button" onClick={formSubmit}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      )}
      <div>{!toggle && <Popup data1={data1} state={state} />}</div>
    </>
  );
};

export default Page2;
