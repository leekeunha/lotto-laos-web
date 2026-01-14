import GoldDatabaseIcon from '../../icons/GoldDatabaseIcon';
import FormatCurrency from '../../ui/FormatCurrency';

interface GoldPointsProps {
    amount: number;
}

const GoldPoints: React.FC<GoldPointsProps> = ({ amount }) => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                <GoldDatabaseIcon className="text-gray-500" />
                <p>Gold Point</p>
            </div>
            <FormatCurrency amount={amount} />
        </div>
    );
};

export default GoldPoints;
