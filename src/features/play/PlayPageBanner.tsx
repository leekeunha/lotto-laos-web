import useCurrentDrawInfo from '../home/useCurrentDrawInfo';
import { HAPPY545_GAME_ID } from '../../../constants/global';
import { CustomSpinner } from '../../ui/CustomSpinner';

import CurrentDrawChip from '../home/CurrentDrawInfo';

export default function BuyPageBanner() {
    const {
        currentDrawInfoQuery: { isLoading, error, data: currentDrawInfo },
    } = useCurrentDrawInfo(Number(HAPPY545_GAME_ID));

    return (
        <>
            {isLoading && <CustomSpinner />}
            {error && <p>{error.message}</p>}

            <div
                className="bg-cover bg-center bg-no-repeat h-[58px] rounded-lg"
                style={{ backgroundImage: `url('/images/home/youtube_thumnail.png')` }}
            >
                <div className="flex p-4 bg-[#191F28] bg-opacity-90 rounded-b-xl ">
                    <div className="flex justify-between w-full">
                        <img
                            src="/icons/laos-lottery-global.svg"
                            className="h-6"
                            alt="laos-lottery-global"
                        />
                        <CurrentDrawChip currentDrawInfo={currentDrawInfo} />
                    </div>
                </div>
            </div>
        </>
    );
}
