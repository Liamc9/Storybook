import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SideNav from './navigation/SideNav';

const TopNavBar2 = ({ menuItems, activeTab: propActiveTab, onTabClick }) => {
  const [activeTab, setActiveTab] = useState(propActiveTab);

  // Update the internal state if the propActiveTab changes
  useEffect(() => {
    setActiveTab(propActiveTab);
  }, [propActiveTab]);

  const handleTabClick = (item) => {
    setActiveTab(item); // Update internal state to reflect the clicked tab
    if (onTabClick) {
      onTabClick(item); // Pass the new active tab to the parent component
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 ml -16 flex items-center h-[62px] whitespace-nowrap font-semibold text-[15px] border-b border-opacity-25 border-[#2c2d2a] bg-[var(--beach-bg)]">
      <SideNav/>
      <img
        className="w-[116px] logo ml-16"
        src="https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993"
        alt="Closca Logo"
      />
      <div className="hidden sm:flex ml-auto items-center space-x-8 header-menu">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => handleTabClick(item)}
            className={`${
              item === activeTab
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-black'
            } transition-all duration-300 hover:text-blue-400`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="ml-auto mr-8 flex items-center header-icons">
        <button className="rounded-full bg-black text-white p-2 px-6 hover:bg-gray-800 hover:scale-105 transition-all duration-300 focus:translate-y-[2px]">
          Sign In
        </button>
      </div>
    </div>
  );
};

TopNavBar2.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired, // Expecting an array of menu item strings
  activeTab: PropTypes.string, // Expecting the active tab to be a string
  onTabClick: PropTypes.func, // Function to handle tab click events
};

TopNavBar2.defaultProps = {
  activeTab: '',
  onTabClick: null,
};

export default TopNavBar2;
