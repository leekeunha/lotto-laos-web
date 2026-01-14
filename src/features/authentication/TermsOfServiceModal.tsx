import { useState } from 'react';
import CustomModal from '../../ui/CustomModal';
import { TERMSCONTENT } from '../../../constants/termsContent';
import { Typography } from '@material-tailwind/react';

export default function TermsOfServiceModal() {
    const [openModal, setOpenModal] = useState(false);

    const handleCancel = () => {
        setOpenModal(false);
    };

    const handleConfirm = () => {
        setOpenModal(false);
    };

    return (
        <CustomModal
            open={openModal}
            title="Terms of Service"
            onCancel={handleCancel}
            onConfirm={handleConfirm}
            confirmText="Agree"
        >
            <Typography className="font-normal">{TERMSCONTENT}</Typography>
        </CustomModal>
    );
}
