import { CurrentDrawInfo } from '../../models/CurrentDrawInfo';

type CurrentDrawChipProps = {
    currentDrawInfo: CurrentDrawInfo | null | undefined;
};

export default function CurrentDrawChip({ currentDrawInfo }: CurrentDrawChipProps) {
    if (!currentDrawInfo) return null;

    return (
        <span className="h-[26px] bg-white text-[#d51317] rounded-md font-bold flex justify-center items-center text-xs px-2">
            Draw {currentDrawInfo.currentDrawIdx}
        </span>
    );
}
