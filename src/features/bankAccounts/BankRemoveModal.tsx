import { Typography } from '@material-tailwind/react';
import CustomModal from '../../ui/CustomModal';
import { BankRemoveModalProps } from './types';

export default function BankRemoveModal({ open, onCancel, onConfirm }: BankRemoveModalProps) {
    return (
        <CustomModal
            open={open}
            title="Remove?"
            onCancel={onCancel}
            onConfirm={onConfirm}
            confirmText="Remove"
            cancelText="CANCEL"
        >
            <Typography className="font-normal">
                Would you like to delete your registered bank account? If there is no registered
                bank account, prize payout may be restricted.
            </Typography>
        </CustomModal>
    );
}
