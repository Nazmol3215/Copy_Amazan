import React from "react";
import { useNavigate } from "react-router-dom";

export default function DetailsButon() {
  const navigateTwo = useNavigate();
  return (
    <div>
      <button class=" See_Details_button" onClick={() => navigateTwo("/MobaileDetails")}>
        See Details
      </button>
  
    </div>
  );
}
