import React, { useState } from "react";
import "./page.css";
import Page2 from "./Page2";

const Page1 = ({ data1, setData1 }) => {
  const [toggle, setToggle] = useState(false);
  const [state, setstate] = useState({
    firstName: "",
    secondName: "",
    address: "",
    city: "",
    country: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    if (state) {
      setData1(state);
      console.log(data1);
    }
    if (data1) {
      setToggle(true);
    }
  };

  const onFormChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      {!toggle && (
        <div className="container">
          <h2>PLEASE FILL THE FOLLOWING DETAILS</h2>
          <div className="input">
            <form>
              <input
                type="text"
                required
                className="input"
                name="firstName"
                placeholder="First Name"
                onChange={onFormChange}
              />
              <input
                type="text"
                required
                className="input"
                name="secondName"
                placeholder="Second Name"
                onChange={onFormChange}
              />
              <input
                type="text"
                required
                className="input"
                name="address"
                placeholder="Address"
                onChange={onFormChange}
              />
              <input
                type="text"
                required
                className="input"
                name="city"
                placeholder="City"
                onChange={onFormChange}
              />
              <input
                type="text"
                required
                className="input"
                name="country"
                placeholder="Country"
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
      {toggle && <Page2 data1={data1} />}
    </>
  );
};

export default Page1;
