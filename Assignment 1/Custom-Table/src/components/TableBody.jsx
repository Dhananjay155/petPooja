/* eslint-disable react/prop-types */

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((row, idx) => (
        <tr key={idx}>
          {columns.map((column) => (
            <td key={column.key}>{row[column.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
