import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index} onClick={() => onClick(index)} style={style}>
          {rating > index ? (
            <FaStar fontSize={"15px"} />
          ) : (
            <FaRegStar fontSize={"15px"} />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
