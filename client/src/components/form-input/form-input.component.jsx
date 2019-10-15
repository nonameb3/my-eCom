import React from "react";
import "./form-input.style.scss";

export default function({label, handleOnChange, ...props }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleOnChange} {...props} />
      {label.length && (
        <label className={`form-input-label ${props.value.length?'shrink':''}`}>
          {label}
        </label>
      )}
    </div>
  );
}
