import React from "react";
import '../App.css'
const DateInput = ({ label, value, onChange, error }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`form-input ${error ? "error" : ""}`}
    />
    {error && <span className="error-text">{error}</span>}
  </div>
);

export default DateInput;
