/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import PresetButtons from './PresetButtons';
import CustomDateRange from './CustomDateRange';
import '../../App.css';

const DatePickerContainer = ({ onDateChange, styles }) => {
  const [selectedPreset, setSelectedPreset] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handlePresetSelection = (preset) => {
    setSelectedPreset(preset);

    const today = new Date();
    let from = '';
    let to = '';

    switch (preset) {
      case 'Today':
        from = to = today.toISOString().split('T')[0];
        break;
      case 'Yesterday':
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        from = to = yesterday.toISOString().split('T')[0];
        break;
      case 'This Month':
        from = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];
        to = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().split('T')[0];
        break;
      case 'Last Month':
        from = new Date(today.getFullYear(), today.getMonth() - 1, 1).toISOString().split('T')[0];
        to = new Date(today.getFullYear(), today.getMonth(), 0).toISOString().split('T')[0];
        break;
      default:
        from = '';
        to = '';
    }

    setFromDate(from);
    setToDate(to);
    onDateChange({ preset, from, to });
  };

  return (
    <div className="date-picker-container" style={styles}>
      <PresetButtons selectedPreset={selectedPreset} onSelect={handlePresetSelection} />
      {selectedPreset === 'Custom Range' && (
        <CustomDateRange
          fromDate={fromDate}
          toDate={toDate}
          setFromDate={setFromDate}
          setToDate={setToDate}
          onRangeChange={onDateChange}
        />
      )}
    </div>
  );
};

export default DatePickerContainer;
