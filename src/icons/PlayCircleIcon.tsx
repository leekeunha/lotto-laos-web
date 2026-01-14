import { IconProps } from './types';

export default function PlayCircleIcon({ className = '', width = 20, height = 20 }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 25 25"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12.5 22.1a9.6 9.6 0 1 0 0-19.199 9.6 9.6 0 0 0 0 19.2zm-.534-12.998a1.2 1.2 0 0 0-1.866.998v4.8a1.2 1.2 0 0 0 1.866.999l3.6-2.4a1.2 1.2 0 0 0 0-1.997l-3.6-2.4z"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    );
}
