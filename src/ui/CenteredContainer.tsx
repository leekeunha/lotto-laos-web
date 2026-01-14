import React from 'react';
import { CenteredContainerProps } from './types';

const CenteredContainer: React.FC<CenteredContainerProps> = ({ children }) => {
    return (
        <section className="flex flex-col justify-center items-center w-full h-full">
            {children}
        </section>
    );
};

export default CenteredContainer;
