import { Button, Dialog } from '@material-tailwind/react';
import QRScanArea from './QRScanArea';
import { useQRScanner } from './useQrScanner';
import { QRCodeScannerProps } from './types';

export default function QRCodeScanner({ isOpen, onClose, onScanSuccess }: QRCodeScannerProps) {
    const { videoRef } = useQRScanner({ isOpen, onScanSuccess, onClose });

    return (
        <Dialog
            open={isOpen}
            handler={onClose}
            className="w-full h-full flex items-center justify-center"
            size="xl"
        >
            <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
                <div className="relative w-full h-full">
                    <video
                        ref={videoRef}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <QRScanArea />
                </div>
                <Button
                    variant="text"
                    fullWidth
                    className="fixed bottom-10 bg-white text-red-500 w-11/12"
                    onClick={onClose}
                >
                    Close
                </Button>
            </div>
        </Dialog>
    );
}
