import React from 'react'; 
import { useNavigate } from 'react-router-dom';

export default function AccasorisForcomputer33() {
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate("/About");
  };

  return (
    <div>
      <h1>This is the AccasorisForcomputer page</h1>
      
      <button className="add-to-cart" onClick={handleOrderNowClick}>
        Order Now
      </button>
    </div>
  );
}
