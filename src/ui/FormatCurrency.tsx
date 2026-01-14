import { FormatCurrencyProps } from './types';

export default function FormatCurrency({
    amount,
    currency = '',
    color = 'text-black',
    fontWeight = 'font-normal',
}: FormatCurrencyProps) {
    const formattedAmount = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);

    return (
        <span className={`${color} ${fontWeight}`}>
            {formattedAmount} {currency}
        </span>
    );
}
