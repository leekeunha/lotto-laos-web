import { Card } from '@material-tailwind/react';
import NumberMarble from './NumberMarble';

interface NumberMarbleCardProps {
    numbers: number[];
    lineIndex?: string;
}

export default function NumberMarblesCard({ numbers, lineIndex }: NumberMarbleCardProps) {
    return (
        <Card className={`flex p-4 transition-transform duration-300`}>
            <div className="flex gap-3">
                <span className="my-auto">{lineIndex}</span>
                <div className="flex gap-1 my-auto">
                    {numbers.map((number, i) => (
                        <NumberMarble key={i} number={number} editable={false} />
                    ))}
                </div>
            </div>
        </Card>
    );
}
