import React from "react";
import PropTypes from "prop-types";
import Button from "./Button/Button";

const numbers = ["9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "0"];

const Numbers = ({ onClickNumber }) => (
  <div className="numbers">
    {numbers.map((number) => (
        <Button
          key={number}
          text={number}
          icon={number}
          clickHandler={onClickNumber}
          type="number"
        />
    ))}
  </div>
);

Numbers.propTypes = {
  onClickNumber: PropTypes.func.isRequired,
};

export default Numbers;
