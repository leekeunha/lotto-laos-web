import { IconProps } from './types';

export default function ChatAltIcon({ className = '', width = 20, height = 20 }: IconProps) {
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
                d="M14.402 4.5v6.4a1.6 1.6 0 0 1-1.6 1.6h-4l-4 3.2v-3.2h-1.6a1.6 1.6 0 0 1-1.6-1.6V4.5a1.6 1.6 0 0 1 1.6-1.6h9.6a1.6 1.6 0 0 1 1.6 1.6zm-8.8 2.4h-1.6v1.6h1.6V6.9zm1.6 0h1.6v1.6h-1.6V6.9zm4.8 0h-1.6v1.6h1.6V6.9z"
            />
        </svg>
    );
}
