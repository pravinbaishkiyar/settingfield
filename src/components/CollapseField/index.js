import React, { useState, useCallback } from "react";
import ToggleSwitch from "./../ToggleSwitch";
import { Collapse } from "reactstrap";
import "./style.css";

const CollapseField = ({
  label,
  avatar,
  renderField,
  collapsible,
  children,
  className
}) => {
  const [expand, setExpand] = useState(false);
  const Field =
    renderField && typeof renderField === "function" ? renderField : null;

  const Avatar = avatar && typeof avatar === "function" ? avatar : null;

  const onExpandClick = useCallback(() => {
    setExpand(!expand);
  }, [expand]);
  const expandClasses = expand
    ? "expand-trigger expanded"
    : "expand-trigger collapsed";

  const classes = `toggle-field ${className}`;

  return (
    <>
      <div className={classes}>
        <div className="toggle-field-left">
          {Avatar ? (
            <div className="toggle-field-avatar">
              <Avatar />
            </div>
          ) : null}
          <div className="toggle-field-label">{label}</div>
        </div>

        <div className="toggle-field-right">
          {Field ? <Field /> : null}
          {collapsible ? (
            <div className={expandClasses} onClick={onExpandClick} />
          ) : null}
        </div>
      </div>
      <Collapse isOpen={expand}>
        <div className="collapse-body">{children}</div>
      </Collapse>
    </>
  );
};

export default CollapseField;
