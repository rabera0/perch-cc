import React from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';

function Proceed() {
    return (
      <div className="Proceed">
        <h1>THE AT&T PERCH LIVING MURAL</h1>
        <br></br>
        <p>Where are you from?</p>
      
        <br></br>
        <br></br>
        <br></br>
        <Link to='/international'>
          <button>International Visitors</button>
        </Link>
        <br></br>
        <br></br>
        <Link to='/zipcode'>
          <button>National Visitors</button>
        </Link>
      </div>
    );
  }
  
  export default Proceed;
