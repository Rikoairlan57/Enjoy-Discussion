import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const ThreadAddButton = () => {
  return (
    <div className="relative">
      <div className="fixed right-10 bottom-10 z-40">
        <Link to="/add">
          <button
            type="button"
            className="w-12 h-12 bg-yellow-500 dark:bg-green-dark hover:bg-yellow-600 rounded-2xl cursor-pointer shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] hover:shadow-none"
          >
            <span className="text-white flex justify-center">
              <FaPlus />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThreadAddButton;
