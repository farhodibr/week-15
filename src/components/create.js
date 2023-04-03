import React, { useState } from "react";
import axios from "axios";
import Read from "./read";




export const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
 // const [email, setEmail] = useState("");

  console.log(firstName);

  const postData = () => {
    axios.post(`https://64095fb26ecd4f9e18aec05b.mockapi.io/contacts`, {
      firstName ,
      lastName,
    })
    /*.then((response) => {
        console.log(response.status, response.data.token);
      });*/
  };

  
    


  return (
    <div>
      <form onSubmit={postData}>
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

        <button 
        type="submit" 
        className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      
    </div>
  );
};
