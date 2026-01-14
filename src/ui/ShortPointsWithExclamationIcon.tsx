import ExclamationTriangleIcon from '../icons/ExclamationTriangleIcon';
import { ShortPointsWithExclamationIconProps } from './types';

export default function ShortPointsWithExclamationIcon({
    text = `We're sorry, but you need more points to complete this purchase.`,
}: ShortPointsWithExclamationIconProps) {
    return (
        <div className="flex justify-center items-center h-80 text-center w-full">
            <div className="flex flex-col gap-3 w-full justify-center">
                <div className="flex justify-center">
                    <ExclamationTriangleIcon width={40} height={40} />
                </div>
                <p className="text-red-500">{text}</p>
            </div>
        </div>
    );
}
