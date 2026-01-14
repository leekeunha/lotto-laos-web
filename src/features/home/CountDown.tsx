import { HAPPY545_GAME_ID } from '../../../constants/global';
import { CountDownProps } from '../types';
import useCurrentDrawInfo from './useCurrentDrawInfo';
import DateFormatter from '../../ui/DateFormatter';
import { useTranslation } from 'react-i18next';
import { CustomSpinner } from '../../ui/CustomSpinner';
import { CountDownTimeDisplay } from './CountDownTimeDisplay';
import { useCountDown } from './useCountDown';

import CurrentDrawChip from './CurrentDrawInfo';

export default function CountDown({ className }: CountDownProps) {
    const { t } = useTranslation();

    const {
        currentDrawInfoQuery: { isLoading, error, data: currentDrawInfo },
    } = useCurrentDrawInfo(Number(HAPPY545_GAME_ID));

    const timeLeft = useCountDown(currentDrawInfo?.currentDrawEndDate ?? undefined);

    if (isLoading) return <CustomSpinner />;
    if (error) return <p>{error.message}</p>;

    return (
        <div className={`relative ${className}`}>
            <div
                className="bg-cover bg-center bg-no-repeat h-[80px] rounded-lg relative w-full"
                style={{ backgroundImage: `url('/images/home/youtube_thumnail.png')` }}
            >
                <div className="absolute inset-0 flex p-4 bg-[#191F28] bg-opacity-90 rounded-b-xl">
                    <div className="flex flex-col gap-1">
                        <CurrentDrawChip currentDrawInfo={currentDrawInfo} />
                        <div className="text-white font-bold text-xs whitespace-nowrap text-center">
                            <DateFormatter date={currentDrawInfo?.currentDrawEndDate} />
                        </div>
                    </div>
                    <div className="ml-auto flex gap-2 mr-2 items-center">
                        <CountDownTimeDisplay label={t('days')} value={timeLeft.days} />
                        <div className="text-white text-2xl">:</div>
                        <CountDownTimeDisplay label={t('hours')} value={timeLeft.hours} />
                        <div className="text-white text-2xl">:</div>
                        <CountDownTimeDisplay label={t('minutes')} value={timeLeft.minutes} />
                        <div className="text-white text-2xl">:</div>
                        <CountDownTimeDisplay label={t('seconds')} value={timeLeft.seconds} />
                    </div>
                </div>
            </div>
        </div>
    );
}
