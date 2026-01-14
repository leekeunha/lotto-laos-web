import SilverDatabaseIcon from '../../icons/SilverDatabaseIcon';
import FormatCurrency from '../../ui/FormatCurrency';

interface SilverPointsProps {
    amount: number;
}

const SilverPoints: React.FC<SilverPointsProps> = ({ amount }) => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                <SilverDatabaseIcon />
                <p>Silver Point</p>
            </div>
            <FormatCurrency amount={amount} />
        </div>
    );
};

export default SilverPoints;
