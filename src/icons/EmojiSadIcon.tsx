import { IconProps } from './types';

export default function EmojiSadIcon({ className = '', width = 20, height = 20 }: IconProps) {
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
                d="M10 18a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18zM7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-7.536 5.879a1 1 0 0 0 1.415 0 3 3 0 0 1 4.242 0 1 1 0 1 0 1.415-1.415 5.001 5.001 0 0 0-7.072 0 1 1 0 0 0 0 1.415z"
            />
        </svg>
    );
}
