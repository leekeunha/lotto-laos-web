import { Typography } from '@material-tailwind/react';
import CustomModal from '../../ui/CustomModal';
import { OrderRemoveModalProps } from './types';

export default function BankRemoveModal({ open, onCancel, onConfirm }: OrderRemoveModalProps) {
    return (
        <CustomModal
            open={open}
            title="Order Cancel"
            onCancel={onCancel}
            onConfirm={onConfirm}
            confirmText="Yes"
            cancelText="No"
        >
            <Typography className="font-normal">
                Are you sure you want to cancel your order?
            </Typography>
        </CustomModal>
    );
}
