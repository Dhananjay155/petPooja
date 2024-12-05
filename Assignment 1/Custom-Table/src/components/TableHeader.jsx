/* eslint-disable react/prop-types */
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import FilterInput from "./FilterInput";

const TableHeader = ({ columns, sortConfig, onSort, onFilterChange }) => {
  const renderSortIcon = (key) => {
    if (!sortConfig || sortConfig.key !== key) return <FaSort />;
    return sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />;
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.key}>
            <div className="header-cell">
              <span onClick={() => column.sortable && onSort(column.key)}>
                {column.title} {column.sortable && renderSortIcon(column.key)}
              </span>
              {column.filterable && (
                <FilterInput
                  placeholder={`Filter ${column.title}`}
                  onChange={(value) => onFilterChange(column.key, value)}
                />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
