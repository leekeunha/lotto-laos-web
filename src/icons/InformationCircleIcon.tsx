import { IconProps } from './types';

export default function InformationCircleIcon({
    className = '',
    width = 20,
    height = 20,
}: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.1 12.5a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0zm-8.4-4.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zm-2.4 3.6a1.2 1.2 0 1 0 0 2.4v3.6a1.2 1.2 0 0 0 1.2 1.2h1.2a1.2 1.2 0 1 0 0-2.4v-3.6a1.2 1.2 0 0 0-1.2-1.2h-1.2z"
            />
        </svg>
    );
}
