// BottomDrawer.jsx

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function BottomDrawer({ isOpen, onClose, children }) {
  const drawerRef = useRef();

  // Close the drawer when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Background overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer content */}
      <div
        ref={drawerRef}
        className={`w-full max-w-lg bg-white rounded-t-2xl shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Drawer handle */}
        <div className="flex justify-center p-2">
          <div className="w-12 h-1 rounded-full bg-gray-300"></div>
        </div>
        {/* Drawer content area */}
        <div className="p-6">{children}</div>
      </div>
    </div>,
    document.body
  );
}
