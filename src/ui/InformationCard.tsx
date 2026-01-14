import React from 'react';
import { Card } from '@material-tailwind/react';
import SvgIcon from './SvgIcon';
import { InformationCardProps } from './types';

const InformationCard: React.FC<InformationCardProps> = ({ description, className }) => {
    return (
        <Card className={`p-4 text-sm ${className}`}>
            <div className="flex">
                <SvgIcon fileName="information-circle" className="w-6 h-6 mr-2" />
                <p>{description}</p>
            </div>
        </Card>
    );
};

export default InformationCard;
