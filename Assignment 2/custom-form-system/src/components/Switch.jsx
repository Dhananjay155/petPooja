import React from "react";

const Switch = ({ label, value, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type="checkbox"
      checked={value}
      onChange={(e) => onChange(e.target.checked)}
      className="form-switch"
    />
  </div>
);

export default Switch;
