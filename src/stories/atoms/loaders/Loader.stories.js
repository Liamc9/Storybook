// src/stories/Loader.stories.jsx

import React from 'react';
import Loader from '../../../components/atoms/loaders/Loader';
import Loader2 from '../../../components/atoms/loaders/Loader2';
import TruckLoader from '../../../components/atoms/loaders/TruckLoader';
import SkeletonLoader from '../../../components/atoms/loaders/SkeletonLoader';
import SkeletonLoader2 from '../../../components/atoms/loaders/SkeletonLoader2';

export default {
  title: 'Atoms/Loaders',
  tags: ['autodocs'],
  
};

export const XLoader = () => <Loader />;
export const XLoader2 = () => <Loader2 />;
export const XTruckLoader = () => <TruckLoader />;
export const XSkeletonLoader = () => <SkeletonLoader />;
export const XSkeletonLoader2 = () => <SkeletonLoader2 />;
