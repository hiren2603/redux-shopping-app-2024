import React from "react";

function TableBody({ user }) {
  const dob = user.birthDate;
  const date = new Date(dob)
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    .replace(/(\d+)(th|st|nd|rd)/, "$1");

  return (
    <tr className="border border-gray-400 bg-gray-600">
      <td className=" w-20 text-center">{user.id}</td>
      <td className="flex justify-center items-center h-16">
        <img
          src={user.image}
          alt={user.name}
          className="h-[50px] w-[50px] rounded-full bg-gray-300 p-2"
        />
      </td>
      <td className="px-4">
        {user.firstName} {user.lastName}
      </td>
      <td className="text-center">{user.gender}</td>
      <td className="px-4">{date}</td>
      <td className="px-4">{user.email}</td>
      <td className="px-4">{user.university}</td>
    </tr>
  );
}

export default TableBody;
