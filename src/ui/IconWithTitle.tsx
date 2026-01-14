import React from 'react';
import { IconWithTitleProps } from './types';

const IconWithTitle: React.FC<IconWithTitleProps> = ({
    svgFileName,
    title,
    iconClassName = '',
    titleClassName = 'font-bold',
}) => {
    return (
        <div className="flex gap-2 mb-3">
            <img src={`/icons/${svgFileName}.svg`} className={iconClassName} alt={title} />
            <p className={titleClassName}>{title}</p>
        </div>
    );
};

export default IconWithTitle;
