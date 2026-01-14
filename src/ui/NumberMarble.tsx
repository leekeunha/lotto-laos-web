import { NumberMarbleProps } from './types';

export default function NumberMarble({
    number,
    onClick,
    editable = false,
    isHighlighted = false,
    marbleSize = 10,
    textClass = '',
}: NumberMarbleProps) {
    return (
        <button
            className={`rounded-full h-${marbleSize} w-${marbleSize} ${isHighlighted ? 'bg-red-900' : 'bg-red-100'}`}
            onClick={editable ? onClick : undefined}
        >
            <span className={`${isHighlighted ? 'text-white' : 'text-red-800'} ${textClass}`}>
                {number}
            </span>
        </button>
    );
}
