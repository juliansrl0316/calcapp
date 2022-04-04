// eslint-disable-next-line
import { React, Fragment } from "react";
import PropTypes, { element } from "prop-types";

const Result = ({ operation, result }) => (
  <Fragment>
    <div className="operation">{operation}</div>
    <div className="result">{result}</div>
  </Fragment>
);

Result.protTypes = {
  value: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};

Result.defaultProps = {
  value: "0",
  result: "0",
};

export default Result;
