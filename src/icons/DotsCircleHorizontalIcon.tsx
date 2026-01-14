import { IconProps } from './types';

export default function DotsCircleHorizontalIcon({
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
                d="M10 18a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            />
        </svg>
    );
}
