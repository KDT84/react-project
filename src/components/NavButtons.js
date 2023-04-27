import React from "react";
import { useHistory } from "react-router-dom";

function NavButtons() {
  let history = useHistory();

  return (
    <>
    <button type="button" onClick={() => history.go(-1) }>
      Go back
    </button>
    
    <button type="button" onClick={() => history.go(1) }>
      Go forward
    </button>
    <br />
    
    <button type="button" onClick={() => history.push("/") }> 
      Go Home
    </button>
    </>
  );
}

export default NavButtons