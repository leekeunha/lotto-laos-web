import { IconProps } from './types';

export default function ChevronDoubleRightIcon({
    className = '',
    width = 20,
    height = 20,
}: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.294 15.707a1 1 0 0 1 0-1.414L14.587 10l-4.293-4.293a1 1 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0z"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 15.707a1 1 0 0 1 0-1.414L8.586 10 4.293 5.707a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0z"
            />
        </svg>
    );
}
