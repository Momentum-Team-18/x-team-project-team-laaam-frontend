import React from "react";
import { Link } from "react";


function Test() {
  return (
    <>
       <div>
        <h2>
          <Link to="/newcard" className="button" onClick={() => console.log("CLICK! - NEWCARD")}>
            Create New Card
          </Link>
          <br></br>
          <Link to="/test" className="button" onClick={() => console.log("CLICK! - TEST")}>
            Test
          </Link>
        </h2>
      </div>

      <h1>Testing Testing</h1>
    </>
  );
}

export default Test;
