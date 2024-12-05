import TableContainer from "./components/TableContainer";
import { tableData, tableColumns } from "./data/tableData";

const App = () => {
  return (
    <div className="App">
      <h1>Custom Table Component</h1>
      <TableContainer
        data={tableData}
        columns={tableColumns}
        styles={{
          fontSize: "14px",
          backgroundColor: "#fff",
          color: "#000",
        }}
      />
    </div>
  );
};

export default App;
