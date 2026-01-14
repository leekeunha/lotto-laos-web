import NumberMarblesCard from './NumberMarblesCard';
import { NumberMarblesCardsProps } from './types';

export default function NumberMarblesCards({ lines }: NumberMarblesCardsProps) {
    return (
        <div className="flex flex-col gap-3">
            {lines.map((line, index) => (
                <NumberMarblesCard
                    key={index}
                    numbers={line.numbers}
                    lineIndex={line.lineIdx ? `#${line.lineIdx}` : `#${index + 1}`}
                />
            ))}
        </div>
    );
}
