import React from 'react';
import { ReactSVG } from 'react-svg';

const SvgIcon = ({ name, width, height }) => {
    const iconPath = `/assets/icons/svg/${name}.svg`;

    return (
        <ReactSVG
            src={iconPath}
            beforeInjection={(svg) => {
                svg.setAttribute('width', width);
                svg.setAttribute('height', height);
            }}
            fallback={() => <span>Icon not found</span>}
            loading={() => <span>Loading...</span>}
        />
    );
};

export default SvgIcon;