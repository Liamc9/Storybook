import React, { useState } from 'react';
// CustomCheckbox Component
const CheckedItem = ({ label, svg, onChange, checked }) => {
  return (
    <div className="flex flex-wrap justify-center items-center w-11/12 mx-auto select-none gap-2 max-w-[500px]">
      <label className="text-slate-400 relative cursor-pointer">
        <input
          type="checkbox"
          className="h-[1px] opacity-0 overflow-hidden absolute whitespace-nowrap w-[1px] peer"
          onChange={onChange}
          checked={checked}
        />
        <span className="peer-checked:border-blue-500 peer-checked:shadow-blue-500/10 peer-checked:text-blue-500 peer-checked:before:border-blue-500 peer-checked:before:bg-blue-500 peer-checked:before:opacity-100 peer-checked:before:scale-100 peer-checked:before:content-['✓'] flex flex-col items-center justify-center w-28 min-h-[7rem] rounded-lg shadow-lg transition-all duration-200 border-slate-300 border-[3px] bg-white before:absolute before:block before:w-5 before:h-5 before:border-[3px] before:rounded-full before:top-1 before:left-1 before:opacity-0 before:transition-transform before:scale-0 before:text-white before:text-xs before:flex before:items-center before:justify-center hover:border-blue-500 hover:before:scale-100 hover:before:opacity-100">
          <span className="transition-all duration-100">
            {svg}
          </span>
          <span className="transition-all duration-300 text-center">{label}</span>
        </span>
      </label>
    </div>
  );
};
export default CheckedItem

