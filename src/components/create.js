import React, { useState } from "react";
import axios from "axios";
import Read from "./read";
import { event } from "jquery";

export const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  

  console.log(firstName);

  const postData = (event) => {
    event.preventDefault();
    axios
      .post(`https://64095fb26ecd4f9e18aec05b.mockapi.io/contacts`, {
        firstName,
        lastName,
        email,
      })
      .then((res) => {
        console.log(res);
        event.forceUpdate() ;
      })
      .catch((err) => {
        console.log(err);
      });
      
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="text">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Email</label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div onClick={postData}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <Read/>
    </div>
  );
};
