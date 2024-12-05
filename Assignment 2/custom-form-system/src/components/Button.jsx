import React from "react";
import '../App.css'
const Button = ({ label, onClick, type = "button" }) => (
  <button type={type} className="form-button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
