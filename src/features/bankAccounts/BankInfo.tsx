import React from 'react';
import { renderBankIcon } from '../../global/renderBankIcon';
import { BankInfoProps } from './types';

const BankInfo: React.FC<BankInfoProps> = ({ myBank }: BankInfoProps) => {
    return (
        <div className="flex">
            <div>{renderBankIcon(myBank.bankName)}</div>
            <div className="flex flex-col">
                <div className="ml-2 my-auto">
                    <p className="text-xs">{myBank.bankName}</p>
                    <p className="text-xs text-gray-500">{myBank.accountNumber}</p>
                </div>
            </div>
        </div>
    );
};

export default BankInfo;
