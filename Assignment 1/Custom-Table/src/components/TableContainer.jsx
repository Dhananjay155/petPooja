/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "../App.css";

const TableContainer = ({ data, columns, styles }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [filters, setFilters] = useState({});
  
  const sortedData = useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter((row) =>
      Object.keys(filters).every((key) => {
        const filter = filters[key];
        return row[key]?.toString().toLowerCase().includes(filter.toLowerCase());
      })
    );
  }, [sortedData, filters]);

  const handleSort = (key) => {
    setSortConfig((prev) =>
      prev && prev.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" }
    );
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="table-container">
      <table style={{ ...styles }}>
        <TableHeader
          columns={columns}
          sortConfig={sortConfig}
          onSort={handleSort}
          onFilterChange={handleFilterChange}
        />
        <TableBody data={filteredData} columns={columns} />
      </table>
    </div>
  );
};

export default TableContainer;
