import "../App.css";

// eslint-disable-next-line react/prop-types
const FilterInput = ({ placeholder, value, onChange }) => {
  return (
    <div className="filter-input-container">
      <input
        type="text"
        className="filter-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
