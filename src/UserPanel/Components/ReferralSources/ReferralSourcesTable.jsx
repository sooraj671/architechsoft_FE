// ReferralSourcesTable.jsx
import React, { useMemo } from "react";
import { useTable } from "react-table";
import referralSources from "./referralSourcesData"; // Import data

const ReferralSourcesTable = ({ searchValue }) => {
  // Filter the data based on search input
  const filteredData = useMemo(() => {
    return referralSources.filter((source) =>
      source.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Timestamp",
        accessor: "timestamp",
      },
    ],
    []
  );

  const data = useMemo(() => filteredData, [filteredData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="overflow-x-auto">
      {rows.length > 0 ? (
        <table
          {...getTableProps()}
          className="min-w-full bg-white border border-gray-200"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="bg-gray-100"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-50">
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="py-2 px-4 border-b border-gray-200 text-sm text-gray-600"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="text-center py-4 text-gray-500 bg-[#fff]">
          No record found
        </div>
      )}
    </div>
  );
};

export default ReferralSourcesTable;
