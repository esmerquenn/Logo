import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

function Stars({ countFull, countEmpty }) {
  return (
    <p className="star">
      {Array.from({ length: countFull }, (_, index) => (
        <FaStar key={index} />
      ))}
      {Array.from({ length: countEmpty }, (_, index) => (
        <FaRegStar key={index} />
      ))}
    </p>
  );
}

export default Stars;
