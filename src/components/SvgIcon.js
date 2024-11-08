// src/components/Icon.js
import React from 'react';
import { icons } from './icons';

// const requireSvg = require.context('../assets/icons/svg', false, /\.svg$/);

// // Create an object to hold the imported icons
// const icons = requireSvg.keys().reduce((acc, iconPath) => {
//     const iconName = iconPath.replace('./', '').replace('.svg', ''); // Get the icon name
//     acc[iconName] = requireSvg(iconPath).default; // Add the icon to the accumulator
//     return acc;
// }, {});

const SvgIcon = ({ name, width, height }) => {
    const IconSvg = icons[name];

    if (!IconSvg) {
        console.warn(`Icon "${name}" not found.`);
        return null; // Return null if the icon is not found
    }

    return (
        <img src={IconSvg} alt={name} width={width} height={height} />
    );
};

export default SvgIcon;
