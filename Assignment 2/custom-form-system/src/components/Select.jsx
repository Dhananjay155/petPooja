import React from "react";
import '../App.css'
const Select = ({ label, options, value, onChange, error }) => (
  <div className="form-group">
    <label>{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`form-select ${error ? "error" : ""}`}
    >
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <span className="error-text">{error}</span>}
  </div>
);

export default Select;
