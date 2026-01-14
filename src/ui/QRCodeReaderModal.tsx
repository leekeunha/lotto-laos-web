import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import CustomModal from './CustomModal';
import CopyToClipboard from './CopyToClipboard';
import { QRCodeReaderModalProps } from './types';

const QRCodeReaderModal: React.FC<QRCodeReaderModalProps> = ({ open, onCancel, value }) => {
    return (
        <CustomModal
            open={open}
            onCancel={onCancel}
            confirmText="Success"
            cancelText="Failure"
            showCloseButton
        >
            <section className="flex flex-col">
                <p className="text-3xl self-center text-black">QR Code</p>
                <p className="text-xs self-center my-2">
                    You can easily transmit your ID using a QR code.
                </p>
                <QRCodeSVG value={value} className="w-full my-10" level="Q" />
                <div className="border-2 flex self-center p-2 rounded-md w-1/2">
                    <CopyToClipboard className="mx-auto" value={value}></CopyToClipboard>
                </div>
            </section>
        </CustomModal>
    );
};

export default QRCodeReaderModal;
