/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
function EachCard({ card, handleClick }) {
  return (
    <>
      <div
        className="card btn btn-outline-warning"
        style={{ width: "15rem" }}
        onClick={() => handleClick(card)}
      >
        <h5 className="card-title" style={{ color: "#a3882e" }}>
          {card.name.toUpperCase()}
        </h5>
        <img src={card.src} className="rounded" alt="..."></img>
      </div>
    </>
  );
}

export default EachCard;
