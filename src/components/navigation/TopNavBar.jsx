// IMPORTS
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// CREATE FUNCTION
export default function TopNavBar() {
  // STATE VAIRABLES
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // Ref for the dropdown
  const [userPhoto, setUserPhoto] = useState("");

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // HTML
  return (
    <>
      <head></head>
      <body>
        <div className="absolute top-0 z-30 w-full">
          <nav className="bg-white shadow">
            <div className=" flex items-center justify-between px-2 md:px-6">
              <div className="flex flex-row items-center pb-2 pt-2 md:pt-4">
                
                <a className=" ml-1 text-3xl font-bold text-gray-800" href="/">
                  <p>Lettz</p>
                </a>
              </div>
              <div className="flex w-[30%] justify-end text-center">
          
                
                    <Link
                      to="/login"
                      className="w-28 transform rounded-md bg-purple-500 px-1 py-1 font-medium text-white transition-colors duration-200 hover:bg-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-300 md:px-2 md:py-2"
                    >
                      Sign In
                    </Link>
               
              </div>
            </div>
          </nav>
        </div>
      </body>
    </>
  );
}
