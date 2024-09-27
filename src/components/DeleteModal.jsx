import React, { useState } from "react";

// DeleteModal Component
const DeleteModal = ({ onCancel, onConfirm, title, message }) => {
  return (
    <div className="group relative flex w-[250px] select-none flex-col items-center justify-center rounded-2xl border border-gray-300 bg-white p-4 shadow-lg">
      <div className="flex-auto justify-center p-3 text-center">
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="mx-auto flex h-12 w-12 items-center fill-red-500 text-gray-600 group-hover:animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            fillRule="evenodd"
          ></path>
        </svg>
        <h2 className="py-4 text-xl font-bold text-gray-800">
          {title || "Are you sure?"}
        </h2>
        <p className="px-2 text-sm font-bold text-gray-600">
          {message ||
            "Do you really want to continue? This process cannot be undone."}
        </p>
      </div>
      <div className="mt-2 space-x-1 p-2 text-center md:block">
        <button
          onClick={onCancel}
          className="mb-2 rounded-full border-2 border-gray-300 bg-gray-200 px-5 py-2 text-sm font-medium tracking-wider text-gray-600 shadow-sm transition duration-300 ease-in hover:border-gray-400 hover:bg-gray-300 hover:shadow-lg md:mb-0"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="ml-4 rounded-full border-2 border-red-500 bg-red-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm transition duration-300 ease-in hover:border-red-500 hover:bg-transparent hover:text-red-500 hover:shadow-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
export default DeleteModal

//**********************************

