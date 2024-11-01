// src/stories/IconGallery.stories.jsx

import React from 'react';
import * as Icons from '../../assets/Icons';

export default {
  title: 'Branding/Icons',
};

export const IconGallery = () => {
  const iconNames = Object.keys(Icons);
  return (
    <div className="flex flex-wrap">
      {iconNames.map((iconName) => {
        const IconComponent = Icons[iconName];
        return (
          <div key={iconName} className="m-4 text-center">
            <IconComponent className="w-10 h-10 mx-auto" />
            <p className="mt-2">{iconName}</p>
          </div>
        );
      })}
    </div>
  );
};
