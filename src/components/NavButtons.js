import React from "react";
import { useNavigate } from "react-router-dom";

function NavButtons() {
  let navigate = useNavigate();

  return (
    <>
    <button onClick={() => navigate(-1) }>
      Go back
    </button>
    
    {/* <button type="button" onClick={() => navigate.go(1) }>
      Go forward
    </button>
    <br /> */}

    <button onClick={() => navigate("/") }> 
      Go Home
    </button>
    </>
  );
}

export default NavButtons