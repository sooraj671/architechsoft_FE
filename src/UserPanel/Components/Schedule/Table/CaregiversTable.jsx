import React, { useMemo } from "react";
import { useTable } from "react-table"; // Import react-table's useTable hook
import caregiversData from "./caregiversData"; // Your existing caregivers data

const CaregiversTable = ({ searchValue }) => {
  if (!searchValue) {
    searchValue = "";
  }
  // Filter the caregiversData based on the searchValue
  const filteredData = useMemo(() => {
    return caregiversData.filter((caregiver) =>
      caregiver.name.toLowerCase().includes(searchValue?.toLowerCase())
    );
  }, [searchValue]);

  // Define table columns using useMemo to avoid unnecessary re-renders
  const columns = useMemo(
    () => [
      {
        Header: "Caregiver",
        accessor: "name", // Corresponds to `caregiver.name`
      },
      {
        Header: "S",
        accessor: "scheduled", // Corresponds to `caregiver.scheduled`
      },
      {
        Header: "C",
        accessor: "completed", // Corresponds to `caregiver.completed`
      },
      {
        Header: "P",
        accessor: "projected", // Corresponds to `caregiver.projected`
      },
      {
        Header: "Canceled",
        accessor: "canceled", // Corresponds to `caregiver.canceled`
      },
      {
        Header: "Open",
        accessor: "open", // Corresponds to `caregiver.open`
      },
      {
        Header: "Mon",
        accessor: "week.mon", // Corresponds to `caregiver.week.mon`
      },
      {
        Header: "Tue",
        accessor: "week.tue", // Corresponds to `caregiver.week.tue`
      },
      {
        Header: "Wed",
        accessor: "week.wed", // Corresponds to `caregiver.week.wed`
      },
      {
        Header: "Thu",
        accessor: "week.thu", // Corresponds to `caregiver.week.thu`
      },
      {
        Header: "Fri",
        accessor: "week.fri", // Corresponds to `caregiver.week.fri`
      },
      {
        Header: "Sat",
        accessor: "week.sat", // Corresponds to `caregiver.week.sat`
      },
      {
        Header: "Sun",
        accessor: "week.sun", // Corresponds to `caregiver.week.sun`
      },
    ],
    []
  );

  const data = useMemo(() => filteredData, [filteredData]);

  // Use the useTable hook provided by react-table to create the table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="overflow-auto">
      {/* Apply table props */}
      {rows.length > 0 ? (
        <table
          {...getTableProps()}
          className="min-w-full table-auto border-collapse border border-gray-300"
        >
          <thead>
            {/* Loop over header groups */}
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="bg-gray-100"
              >
                {/* Render each header cell */}
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-4 py-2 border border-gray-300"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {/* Loop over table rows */}
            {rows.map((row) => {
              prepareRow(row); // Prepare the row for rendering
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-50">
                  {/* Render each cell */}
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-2 border border-gray-300"
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
        <div className="text-center py-4 text-gray-500">No records found</div>
      )}
    </div>
  );
};

export default CaregiversTable;
