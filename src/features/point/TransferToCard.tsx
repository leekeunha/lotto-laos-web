import { useState } from 'react';
import { Card } from '@material-tailwind/react';
import SectionTitle from '../../ui/SectionTitle';
import { ValidationMessages } from '../../../constants/global';
import { useFormContext } from 'react-hook-form';
import QrCodeIcon from '../../icons/QrCodeIcon';
import RHFInput from '../../ui/RHFInput';
import QRCodeScanner from '../../ui/QrCodeScanner';

export default function TransferToCard() {
    const [isScannerOpen, setIsScannerOpen] = useState(false);
    const { setValue } = useFormContext();

    const handleScanSuccess = (scannedText: string) => {
        setValue('toMemberId', scannedText);
    };

    return (
        <>
            <Card className="p-4 flex flex-col gap-4">
                <SectionTitle title="To" />
                <div className="relative">
                    <RHFInput
                        type="text"
                        name="toMemberId"
                        label="Phone"
                        rules={{ required: ValidationMessages.REQUIRED }}
                    />
                    <div
                        className="absolute right-2.5 top-2.5 rounded"
                        onClick={() => setIsScannerOpen(true)}
                    >
                        <QrCodeIcon />
                    </div>
                </div>
            </Card>

            <QRCodeScanner
                isOpen={isScannerOpen}
                onClose={() => setIsScannerOpen(false)}
                onScanSuccess={handleScanSuccess}
            />
        </>
    );
}
