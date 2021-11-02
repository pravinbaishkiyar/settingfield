import React from "react";
import "./style.css";

const ToggleSwitch = ({ defaultChecked, checked, disabled, onChange }) => {
  const classes = disabled ? `switch disabled` : `switch`;

  return (
    <label className={classes}>
      <input
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
