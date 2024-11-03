import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AccasorisForcomputer() {
  const ssss = useNavigate();
  return (
    <div>
      
  <h1>this is AccasorisForcomputer page</h1>



<button class="add-to-cart" onClick={() => ssss("/About")}>
         Order Now
      </button>


    </div>
  )
}
