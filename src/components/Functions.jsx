import {React,  Fragment } from "react";
import PropTypes from "prop-types";
import Button from "./Button/Button";
import { FiDelete } from "react-icons/fi";

const Functions = ({ onDelete, onContentClear }) => (
  <Fragment className="functions">
    <Button icon={<FiDelete />} clickHandler={onDelete} type="delete-button" />
    <Button icon={"C"} clickHandler={onContentClear} type="button-long-text" />
  </Fragment>
);

Functions.propTypes = {
  onContentClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Functions;
