/* ----------------------------------------------------------------------
 
 *   추천인 코드를 표시하는 카드 UI 컴포넌트입니다.
  
 * ---------------------------------------------------------------------- */

import { Card } from '@material-tailwind/react';
import { QRCodeSVG } from 'qrcode.react';
import CopyToClipboard from '../../ui/CopyToClipboard';
import { useState } from 'react';
import { RefferralCodeCardProps } from './types';
import QRCodeReaderModal from '../../ui/QRCodeReaderModal';

export default function RefferralCodeCard({ referralCode }: RefferralCodeCardProps) {
    const [openModal, setOpenModal] = useState(false);

    const handleCancel = () => {
        setOpenModal(false);
    };

    return (
        <>
            <Card className="p-4 bg-gray-200">
                <div className="grid grid-cols-2 grid-rows-1">
                    <div>
                        <p className="text-gray-500 text-sm">Referral Code</p>
                        <div className="flex">
                            <CopyToClipboard value={referralCode}></CopyToClipboard>
                        </div>
                    </div>
                    <div className="row-span-2" onClick={() => setOpenModal(true)}>
                        <QRCodeSVG value={referralCode} className="w-full" level="Q" />
                    </div>
                </div>
            </Card>
            <QRCodeReaderModal open={openModal} onCancel={handleCancel} value={referralCode} />
        </>
    );
}
