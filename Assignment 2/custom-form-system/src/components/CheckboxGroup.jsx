/* eslint-disable react/prop-types */

const CheckboxGroup = ({ label, options, value, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    {options.map((opt) => (
      <label key={opt} className="checkbox-label">
        <input
          type="checkbox"
          value={opt}
          checked={value.includes(opt)}
          onChange={(e) => {
            const checked = e.target.checked;
            const newValue = checked
              ? [...value, opt]
              : value.filter((v) => v !== opt);
            onChange(newValue);
          }}
        />
        {opt}
      </label>
    ))}
  </div>
);

export default CheckboxGroup;
