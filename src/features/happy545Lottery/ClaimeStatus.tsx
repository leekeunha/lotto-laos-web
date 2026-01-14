import React from 'react';
import { ClaimeStatusProps } from './types';

const ClaimStatus: React.FC<ClaimeStatusProps> = ({ status }) => {
    return (
        <div
            className={`row-span-2 justify-self-end self-center ${
                status === 'Unclaimed' ? 'text-red-700' : ''
            }`}
        >
            {status}
        </div>
    );
};

export default ClaimStatus;
