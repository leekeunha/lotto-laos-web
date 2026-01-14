import React from 'react';
import { IconImageProps } from './types';

const SvgIcon: React.FC<IconImageProps> = ({ fileName, className = '' }) => {
    return <img src={`/icons/${fileName}.svg`} className={className} alt={fileName} />;
};

export default SvgIcon;
