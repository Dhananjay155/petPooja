import React from "react";

const RadioGroup = ({ label, options, value, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    {options.map((opt) => (
      <label key={opt} className="radio-label">
        <input
          type="radio"
          name={label}
          value={opt}
          checked={value === opt}
          onChange={(e) => onChange(e.target.value)}
        />
        {opt}
      </label>
    ))}
  </div>
);

export default RadioGroup;
