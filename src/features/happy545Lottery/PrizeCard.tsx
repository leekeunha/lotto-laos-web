import { Card } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { PrizeCardProps } from '../types';
import { renderGameIcon } from '../../global/renderGameIcon';
import FormatCurrency from '../../ui/FormatCurrency';
import { HAPPY545_GAME_ID } from '../../../constants/global';
import ClaimStatus from './ClaimeStatus';

export default function PrizeCard({ prize }: PrizeCardProps) {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/happy545-lottery/prizes/${prize.lineIdx}`, {
            state: { prize },
        });
    };

    return (
        <Card className="mb-2 bg-white rounded-lg p-3 text-sm" onClick={handleCardClick}>
            <div className="grid grid-cols-[min-content_3fr_2fr] grid-rows-2">
                <div className="flex row-span-2 p-2 items-center mr-3 border rounded-lg">
                    {renderGameIcon(Number(HAPPY545_GAME_ID))}
                </div>
                <div className="flex">
                    <span className="text-start">
                        <FormatCurrency
                            amount={prize.prizePrice || 0}
                            currency="kip"
                        ></FormatCurrency>
                    </span>
                </div>
                <ClaimStatus status={prize.claimedStatus} />
                <div className="flex gap-2">
                    <div className="text-gray-500 text-xs self-center">
                        Draw {prize.drawIdx} ({prize.serialNumber})
                    </div>
                </div>
            </div>
        </Card>
    );
}
