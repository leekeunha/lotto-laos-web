import { Card } from '@material-tailwind/react';
import NumberMarbles from '../../ui/NumberMarbles';
import FormatCurrency from '../../ui/FormatCurrency';
import { NumberMarbleCardProps } from './types';

export default function NumberMarblesCardInTicket({
    line,
    ticketDetail,
    index,
}: NumberMarbleCardProps) {
    const cardBorderClass = line.prizeAmount > 0 ? 'border border-red-600' : '';

    return (
        <Card className={`flex fl p-3 transition-transform duration-300 ${cardBorderClass}`}>
            <div className="grid grid-rows-1 grid-cols-[1fr_2fr_2fr]">
                {line.lineIdx && <span className="text-xs my-auto text-center">#{index + 1}</span>}
                <NumberMarbles
                    numbers={line.issueNumber}
                    highlightNumbers={ticketDetail.winningNumber}
                    marbleSize={8}
                    textClass="text-xs"
                ></NumberMarbles>
                {line.prizeAmount > 0 && (
                    <div className="flex flex-col text-xs text-end">
                        <span className="font-bold">
                            <FormatCurrency
                                amount={line.prizeAmount}
                                currency={line.prizeAmountCurrency}
                            ></FormatCurrency>
                        </span>
                        {line.status}
                    </div>
                )}
            </div>
        </Card>
    );
}
