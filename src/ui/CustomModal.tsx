import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button,
    IconButton,
} from '@material-tailwind/react';
import { CustomModalProps } from './types';

export default function CustomModal({
    open,
    title,
    onCancel,
    onConfirm,
    cancelText = 'Cancel',
    confirmText = 'Confirm',
    children,
    showCloseButton = false,
}: CustomModalProps) {
    return (
        <Dialog className="overflow-x-hidden min-w-80 max-w-[300px]" open={open} handler={() => {}}>
            <DialogHeader className="flex flex-col">
                {showCloseButton && (
                    <IconButton
                        className="flex self-end"
                        color="blue-gray"
                        size="sm"
                        variant="text"
                        onClick={onCancel}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                )}
                {title && <p className="self-start"> {title} </p>}
            </DialogHeader>
            <DialogBody className="min-w-80 max-w-[300px] max-h-[30rem] overflow-scroll">
                {children}
            </DialogBody>
            {!showCloseButton && (onCancel || onConfirm) && (
                <DialogFooter className="space-x-2">
                    {onCancel && (
                        <Button variant="outlined" color="red" onClick={onCancel}>
                            {cancelText}
                        </Button>
                    )}
                    {onConfirm && (
                        <Button variant="gradient" color="red" onClick={onConfirm}>
                            {confirmText}
                        </Button>
                    )}
                </DialogFooter>
            )}
        </Dialog>
    );
}
