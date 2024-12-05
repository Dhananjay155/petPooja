/* eslint-disable react/prop-types */
import DateInput from './DateInput';

const CustomDateRange = ({ fromDate, toDate, setFromDate, setToDate, onRangeChange }) => {
  const handleFromDateChange = (e) => {
    const newFromDate = e.target.value;
    setFromDate(newFromDate);
    onRangeChange({ preset: 'Custom Range', from: newFromDate, to: toDate });
  };

  const handleToDateChange = (e) => {
    const newToDate = e.target.value;
    setToDate(newToDate);
    onRangeChange({ preset: 'Custom Range', from: fromDate, to: newToDate });
  };

  return (
    <div className="custom-date-range">
      <DateInput label="From" value={fromDate} onChange={handleFromDateChange} />
      <DateInput label="To" value={toDate} onChange={handleToDateChange} />
    </div>
  );
};

export default CustomDateRange;
