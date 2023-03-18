/* eslint-disable react/prop-types */
import React from "react";
import EachCard from "./card";

function CardContainer({ cardArr, handleClick }) {
  return (
    <div className="grid text-center container" style={{ padding: "2rem" }}>
      <div
        className="row row-cols-6 justify-content-evenly"
        style={{ gap: "5px" }}
      >
        {cardArr.map((card) => {
          return (
            <EachCard card={card} key={card.id} handleClick={handleClick} />
          );
        })}
      </div>
    </div>
  );
}

export default CardContainer;
