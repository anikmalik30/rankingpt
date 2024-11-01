import React from 'react';

const Icons = ({ name, size = 24, color = 'currentColor', className = '' }) => {
  return (
    <svg className={`icon ${className}`} width={size} height={size} fill={color}>
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
};

export default Icons;
