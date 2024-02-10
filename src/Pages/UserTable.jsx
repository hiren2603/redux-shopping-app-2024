import React, { useState, useEffect } from "react";
import { TableHead } from "../components";
import TableBody from "../components/TableBody";
import TableFooter from "../components/TableFooter";
import { fetchUsers } from "../api";
import { Loading } from "../assets/icons";

const UserTable = () => {
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [column, setColumn] = useState("id");
  const offset = limit * (page - 1);

  // shorting functionality

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const result = await fetchUsers(limit, offset);
      setTotalPages(result.total / limit);
      setSortedUsers(result.users);
      setLoading(false);
    };
    getUsers();
  }, [limit, page]);

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
    setPage(1);
  };

  const handlePageChange = (order) => {
    if (order === "next") {
      setPage((prevPage) => prevPage + 1);
    } else if (order === "previous") {
      setPage((prev) => prev - 1);
    } else if (order === "start") {
      setPage(1);
    } else if (order === "last") {
      setPage(totalPages);
    }
  };

  return (
    <div className="container mx-auto w-[90%] mt-5 max-h-[80vh]">
      <table className="table-auto w-full border-collapse border border-gray-400">
        <caption className="caption-top text-gray-300 text-4xl py-2">
          All Users
        </caption>
        <TableHead
          column={column}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          setColumn={setColumn}
          sortedUsers={sortedUsers}
          setSortedUsers={setSortedUsers}
        />
        {loading ? (
          <tbody className="overflow-y-auto w-full h-[55vh] flex justify-center items-center transition-opacity">
            <tr>
              <td className="text-center absolute left-[50%] top-[50%] translate-x-[-50%]">
                <Loading />
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody className="overflow-y-auto w-full h-[55vh]">
            {sortedUsers.map((user) => (
              <TableBody user={user} key={user.id} />
            ))}
          </tbody>
        )}
        <TableFooter
          value={limit}
          onChange={handleLimitChange}
          changePage={handlePageChange}
          page={page}
          totalPages={totalPages}
        />
      </table>
    </div>
  );
};

export default UserTable;
