import React, { useState } from "react";
import Input from "./Input";
import {
  SkipNextIcon,
  SkipPrevIcon,
  NextIcon,
  PrevIcon,
} from "../assets/icons";

function TableFooter({ value, onChange, page, totalPages, changePage }) {
  return (
    <tfoot>
      <tr className="border border-gray-500 justify-center items-center bg-gray-600 h-16">
        <td colSpan={6} className="text-left">
          <div className="flex items-center space-x-4 pl-4">
            <span className="text-sm">Records per Page:</span>
            <select
              value={value}
              onChange={onChange}
              className="p-2
                    text-black 
                    rounded-md bg-gray-200 
                    outline-none
                    border-none"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </td>
        <td colSpan={2} className="text-right">
          <div className="flex justify-end items-center space-x-4 pr-4">
            <button
              className="px-3 py-3 bg-blue-500 text-white rounded-md disabled:bg-blue-400 
              disabled:cursor-not-allowed"
              onClick={() => changePage("start")}
              disabled={page === 1}
            >
              <SkipPrevIcon />
            </button>
            <button
              className="px-3 py-3 bg-blue-500 text-white rounded-md disabled:bg-blue-400 disabled:cursor-not-allowed"
              onClick={() => changePage("previous")}
              disabled={page === 1}
            >
              <PrevIcon />
            </button>
            <span className="text-sm">
              Page: {page} of {totalPages}
            </span>
            <button
              className="px-3 py-3 bg-blue-500 text-white rounded-md disabled:bg-blue-400 
              disabled:cursor-not-allowed"
              onClick={() => changePage("next")}
              disabled={page === totalPages ? true : false}
            >
              <NextIcon />
            </button>
            <button
              className={`px-3 py-3 bg-blue-500 text-white rounded-md disabled:bg-blue-400 disabled:cursor-not-allowed 
              }`}
              onClick={() => changePage("last")}
              disabled={page === totalPages ? true : false}
            >
              <SkipNextIcon />
            </button>
          </div>
        </td>
      </tr>
    </tfoot>
  );
}

export default TableFooter;
