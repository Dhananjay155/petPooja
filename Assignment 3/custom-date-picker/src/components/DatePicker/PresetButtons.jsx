/* eslint-disable react/prop-types */

const PresetButtons = ({ selectedPreset, onSelect }) => {
  const presets = ['Today', 'Yesterday', 'This Month', 'Last Month', 'Custom Range'];

  return (
    <div className="preset-buttons">
      {presets.map((preset) => (
        <button
          key={preset}
          className={`preset-button ${selectedPreset === preset ? 'active' : ''}`}
          onClick={() => onSelect(preset)}
        >
          {preset}
        </button>
      ))}
    </div>
  );
};

export default PresetButtons;
