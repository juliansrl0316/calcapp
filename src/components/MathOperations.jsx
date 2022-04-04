import {React,  Fragment } from "react";
import Button from "./Button/Button";
import PropTypes from "prop-types";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CgMathEqual, CgMathDivide } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";

const MathOperations = ({ onClickOperation, onClickEqual }) => {
  return (
    <Fragment className="math-operations">
      <Button
      type="math-button"
        text="/"
        icon={<CgMathDivide />}
        clickHandler={onClickOperation}
      />
      <Button type="math-button" text="*" icon={<RiCloseFill />} clickHandler={onClickOperation} />
      <Button type="math-button" text="-" icon={<BiMinus />} clickHandler={onClickOperation} />
      <Button type="math-button" text="+" icon={<BiPlus />} clickHandler={onClickOperation} />
      <Button type="math-button" text="=" icon={<CgMathEqual />} clickHandler={onClickEqual} />
    </Fragment>
  );
};

MathOperations.prototypes = {
  onClickEqual: PropTypes.func.isRequired,
  onClickOperation: PropTypes.func.isRequired,
};

export default MathOperations;
