import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Update from "./update";


export default function Read() {
  const [APIData, setAPIData] = useState([]);
useEffect (() => {
    axios
      .get(`https://64095fb26ecd4f9e18aec05b.mockapi.io/contacts`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  return (
    <div>
        <button 
        
        type="submit" 
        className="btn btn-primary"
        >
          Get Names
        </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
           {APIData.map( (data, id) => {
            id = data.id
            return (
              
          <tr key={id}>
            <th scope="row" key={data.id}>{data.id}</th>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <link to='/update'></link>
            <td>
            <Update contactId={id}/>
            </td>
          </tr>)})}
        </tbody>
      </table>
    </div>
  );
}