import DatePickerContainer from './components/DatePicker/DatePickerContainer';

const App = () => {
  const handleDateChange = (selectedRange) => {
    console.log('Selected Date/Range:', selectedRange);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Custom Date Picker</h1>
      <DatePickerContainer
        onDateChange={handleDateChange}
        styles={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}
      />
    </div>
  );
};

export default App;
