import EmojiSadIcon from '../icons/EmojiSadIcon';
import { NoDataWithSadIconProps } from './types';

export default function NoDataWithSadIcon({ text = 'there is no data' }: NoDataWithSadIconProps) {
    return (
        <div className="flex justify-center items-center h-80 text-center w-full">
            <div className="flex flex-col gap-3 w-full justify-center">
                <div className="flex justify-center">
                    <EmojiSadIcon width={40} height={40} className="text-gray-500" />
                </div>
                <p>{text}</p>
            </div>
        </div>
    );
}
