import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, type, clickHandler, icon }) => (
  <button className={type} value={text} onClick={() => clickHandler(text)}>
    <div className="iconButton">{icon}</div>
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;

/* Git - Bisect To complete this challenge, Follow the below given instructions. Your local repository is local directory.    Step 1 : A repository is created, and a calculator project is cloned in Python. Read the contents of the file.   Step 2 : Check the previous commits. Find the commit in which line 2 is changed from 'b = 20' to 'b = 0.00000'.   Step 3 : Reset the bisect and Remove the bad commit by using Git Revert. Leave the commit message as is. Push to the remote repository */
