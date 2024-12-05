/* eslint-disable react/prop-types */

const TextArea = ({ label, placeholder, value, onChange, error }) => (
  <div className="form-group">
    <label>{label}</label>
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`form-textarea ${error ? "error" : ""}`}
    />
    {error && <span className="error-text">{error}</span>}
  </div>
);

export default TextArea;
