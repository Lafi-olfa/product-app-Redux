import React from "react";

const Filter = ({ rating, handelRate }) => {
  const stars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => handelRate(i)}
          >
            {" "}
            ★
          </span>
        );
      } else {
        stars.push(
          <span
            style={{ color: "black", cursor: "pointer" }}
            onClick={() => handelRate(i)}
          >
            {" "}
            ☆
          </span>
        );
      }
    }
    return stars;
  };
  return <div>{stars(rating)}</div>;
};

export default Filter;
