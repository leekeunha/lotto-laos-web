import { Button } from '@material-tailwind/react';
import { LineInPayment } from '../../pages/types';
import React, { useState } from 'react';
import CustomModal from '../../ui/CustomModal';
import NumberMarblesCards from '../../ui/NumberMarblesCards';

export interface SelectedLinesInPaymentPageProps {
    lines: LineInPayment[];
}

export default function SelectedLinesInPaymentPage({ lines }: SelectedLinesInPaymentPageProps) {
    const countOfLine: number = lines.length;

    const [openModal, setOpenModal] = useState(false);

    const handleCancel = async () => {
        setOpenModal(false);
    };

    const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpenModal(true);
    };

    return (
        <section className="flex justify-between">
            <div className="flex gap-2">
                <img src={'/icons/view-list.svg'} className="w-7 h-7 text-3xl" alt="left-arrow" />
                <div className="flex items-center">{countOfLine} Lines</div>
            </div>
            <Button color="red" size="sm" onClick={handleOpenModal}>
                View all
            </Button>

            <CustomModal open={openModal} title="Lines" onCancel={handleCancel} confirmText={''}>
                <NumberMarblesCards lines={lines} chipColor="red" />
            </CustomModal>
        </section>
    );
}
