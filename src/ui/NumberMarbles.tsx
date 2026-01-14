import NumberMarble from './NumberMarble';
import { NumberMarblesProps } from './types';

export default function NumberMarbles({
    numbers,
    highlightNumbers = [],
    marbleSize = 10,
    textClass = '',
}: NumberMarblesProps) {
    return (
        <div className="flex gap-1 my-auto">
            {numbers.map((number, i) => (
                <NumberMarble
                    key={i}
                    number={number}
                    isHighlighted={highlightNumbers.includes(number)}
                    marbleSize={marbleSize}
                    textClass={textClass}
                />
            ))}
        </div>
    );
}
