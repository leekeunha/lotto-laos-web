import { HAPPY545_GAME_ID } from '../../constants/global';
import CurrentDrawChip from '../features/home/CurrentDrawInfo';
import useCurrentDrawInfo from '../features/home/useCurrentDrawInfo';
import { CustomSpinner } from './CustomSpinner';

export default function LottoLaosGlobalBanner() {
    const {
        currentDrawInfoQuery: { isLoading, error, data: currentDrawInfo },
    } = useCurrentDrawInfo(Number(HAPPY545_GAME_ID));

    return (
        <>
            {isLoading && <CustomSpinner />}
            {error && <p>{error.message}</p>}

            <div className="relative h-20 flex justify-between items-center text-white p-3 bg-cover bg-center bg-[url('/images/home/youtube_thumnail.png')] rounded-b-lg">
                <div className="absolute inset-0 bg-black opacity-80 rounded-b-lg"></div>{' '}
                <div className="relative flex justify-between items-center w-full">
                    <img
                        src="/images/home/laos-lottery-global-logo.svg"
                        className="h-6"
                        alt="Laos Lottery Global"
                    />
                    <CurrentDrawChip currentDrawInfo={currentDrawInfo} />
                </div>
            </div>
        </>
    );
}
