import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../att-logo.png';
//import { Link } from 'react-router-dom';
// import '../App.css';

function Atlanta({ zip }) { 
  const location = useLocation();
  const zipcode = location.state?.zipcode;
  console.log(zipcode);

    return (
      <div className="Atlanta">
        <h1>THE AT&T PERCH LIVING MURAL</h1>
        <h2> Connecting Neighborhoods... </h2>
        <p>Your zipcode is: {zipcode}</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>    
      </div>
    );
  }
  
  export default Atlanta;