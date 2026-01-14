import { IconProps } from './types';

export default function CashIcon({ className = '', width = 20, height = 20 }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.2 3.7a1.6 1.6 0 0 0-1.6 1.6v3.2a1.6 1.6 0 0 0 1.6 1.6V5.3h8a1.6 1.6 0 0 0-1.6-1.6H3.2zm1.6 4.8a1.6 1.6 0 0 1 1.6-1.6h6.4a1.6 1.6 0 0 1 1.6 1.6v3.2a1.6 1.6 0 0 1-1.6 1.6H6.4a1.6 1.6 0 0 1-1.6-1.6V8.5zm4.8 3.2a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z"
            />
        </svg>
    );
}
