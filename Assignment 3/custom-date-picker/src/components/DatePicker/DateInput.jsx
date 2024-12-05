/* eslint-disable react/prop-types */

const DateInput = ({ label, value, onChange }) => (
  <div className="date-input">
    <label>{label}</label>
    <input type="date" value={value} onChange={onChange} />
  </div>
);

export default DateInput;
