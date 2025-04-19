import React, { useState } from "react";

function PlantItem({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  const toggleSoldOut = () => {
    setIsSoldOut(!isSoldOut);
  };

  return (
    <div className="plant-item">
      <h2>{plant.name}</h2>
      <img src={plant.image} alt={plant.name} />
      <p>Price: ${plant.price}</p>
      <button onClick={toggleSoldOut}>
        {isSoldOut ? "Sold Out" : "Available"}
      </button>
    </div>
  );
}

export default PlantItem;