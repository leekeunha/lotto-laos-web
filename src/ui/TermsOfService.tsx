import React, { useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { TERMSCONTENT } from '../../constants/termsContent';
import TermsOfServiceCheckbox from './TermsOfServiceCheckbox';
import { useFormContext } from 'react-hook-form';
import { TERMSOFSERVICE } from '../../constants/global';
import CustomModal from './CustomModal';

export default function TermsOfService(): JSX.Element {
    const { setValue, trigger } = useFormContext();

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setOpenModal(true);
    };

    const handleCancel = async () => {
        setOpenModal(false);
        setValue(TERMSOFSERVICE, false);
        await trigger(TERMSOFSERVICE);
    };

    const handleConfirm = async () => {
        setOpenModal(false);
        setValue(TERMSOFSERVICE, true);
        await trigger(TERMSOFSERVICE);
    };

    return (
        <>
            <TermsOfServiceCheckbox
                name={TERMSOFSERVICE}
                label={
                    <div className="flex font-medium">
                        I agree with the
                        <Typography color="red" className="font-medium">
                            &nbsp;terms and conditions
                        </Typography>
                        .
                    </div>
                }
                containerProps={{ className: '-ml-2.5' }}
                onClick={handleOpenModal}
                rules={{ required: 'You must accept the terms and conditions' }}
            />
            <CustomModal
                open={openModal}
                title="Terms of Service"
                onCancel={handleCancel}
                onConfirm={handleConfirm}
                confirmText={'Confirm'}
            >
                <Typography className="font-normal">{TERMSCONTENT}</Typography>
            </CustomModal>
        </>
    );
}
