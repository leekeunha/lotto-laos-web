import StarIcon from '../icons/StarIcon';
import ChevronDoubleRightIcon from '../icons/ChevronDoubleRightIcon';
import EmojiSadIcon from '../icons/EmojiSadIcon';

export const renderTicketStatusIcon = (status: string) => {
    switch (status) {
        case 'Win':
            return <StarIcon className="text-gray-500" />;
        case 'Ongoing':
            return <ChevronDoubleRightIcon className="text-gray-500" />;
        case 'Lose':
            return <EmojiSadIcon className="text-gray-500" />;
        default:
            return null;
    }
};
