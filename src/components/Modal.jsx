import React, { useState, useEffect } from "react";
import { XIcon } from "../assets/Icons";

// Modal Component
const Modal = ({ isModalOpen, closeModal, height = 'h-96', width = 'w-96', children }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`rounded-lg bg-white shadow-lg ${height} ${width}`}>
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 text-lg text-gray-500"
          >
            <XIcon />
          </button>
          <div className="m-8 my-4 md:my-8 md:mt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal
