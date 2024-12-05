import React from "react";

const TextInput = ({ label, placeholder, value, onChange, error }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`form-input ${error ? "error" : ""}`}
    />
    {error && <span className="error-text">{error}</span>}
  </div>
);

export default TextInput;
