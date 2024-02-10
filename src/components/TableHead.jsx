import React, { useEffect } from "react";
import { UpIcon } from "../assets/icons";
import { tableColumns } from "../constants";

function TableHead({
  column,
  setColumn,
  sortOrder,
  setSortOrder,
  setSortedUsers,
  sortedUsers,
}) {
  const sortData = (column) => {
    const sorted = sortedUsers.sort((a, b) => {
      if (sortOrder === "asc") {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });

    setColumn(column);
    setSortedUsers(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByDate = (column) => {
    console.log(sortOrder);
    const sorted = sortedUsers.sort((a, b) => {
      const dateA = new Date(a.birthDate);
      const dateB = new Date(b.birthDate);
      if (sortOrder === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    setColumn(column);
    setSortedUsers(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    sortData(column);
  }, [column]);

  return (
    <thead className="">
      <tr className="bg-gray-600 h-16 border border-gray-400">
        {tableColumns.map((col) => (
          <th
            key={col.id}
            className="text-center font-medium tracking-wider px-4 py-2"
          >
            <div
              className="flex justify-center items-center space-x-2"
              onClick={
                col.sortable ? () => sortData(col.name.toLowerCase()) : null
              }
            >
              <span>{col.name}</span>
              {col.sortable && (
                <span>
                  <UpIcon
                    isRotated={
                      sortOrder === "desc" && column === col.name.toLowerCase()
                        ? true
                        : false
                    }
                  />
                </span>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;

{
  /* <th className="text-center font-medium tracking-wider px-4 py-2">
          <div
            className="flex justify-center items-center space-x-2"
            onClick={() => sortData("id")}
          >
            <span>Id</span>
            <span>
              <UpIcon
                isRotated={
                  sortOrder === "desc" && column === "id" ? true : false
                }
              />
            </span>
          </div>
        </th>
        <th className="text-center font-medium tracking-wider px-8">
          <span>Avatar</span>
        </th>
        <th>
          <div
            className="flex justify-center items-center space-x-2"
            onClick={() => sortData("firstName")}
          >
            <span>Fullname</span>
            <span>
              <UpIcon
                isRotated={
                  sortOrder === "desc" && column === "firstName" ? true : false
                }
              />
            </span>
          </div>
        </th>
        <th className="px-8">
          <div
            className="flex justify-center items-center space-x-2"
            onClick={() => sortData("gender")}
          >
            <span>Gender</span>
            <span>
              <UpIcon
                isRotated={
                  sortOrder === "desc" && column === "gender" ? true : false
                }
              />
            </span>
          </div>
        </th>
        <th className="w-[150]">
          <div
            className="flex justify-center items-center space-x-2"
            onClick={() => sortByDate("date")}
          >
            <span>Date of Birth</span>
            <span>
              <UpIcon
                isRotated={
                  sortOrder === "desc" && column === "date" ? true : false
                }
              />
            </span>
          </div>
        </th>
        <th>
          <div
            className="flex justify-center items-center space-x-2"
            onClick={() => sortData("email")}
          >
            <span>Email</span>
            <span>
              <UpIcon
                isRotated={
                  sortOrder === "desc" && column === "email" ? true : false
                }
              />
            </span>
          </div>
        </th>
        <th className="">
          <div
            className="flex justify-center items-center space-x-2"
            onClick={() => sortData("university")}
          >
            <span>University</span>
            <span>
              <UpIcon
                isRotated={
                  sortOrder === "desc" && column === "university" ? true : false
                }
              />
            </span>
          </div>
        </th> */
}
