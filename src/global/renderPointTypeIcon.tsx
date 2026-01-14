import { GOLD, SILVER } from '../../constants/global';
import SvgIcon from '../ui/SvgIcon';

export const renderPointTypeIcon = (type: string) => {
    switch (type) {
        case GOLD:
            return <SvgIcon fileName="gold-database" className="w-10 h-10" />;
        case SILVER:
            return <SvgIcon fileName="database" />;

        default:
            return null;
    }
};
