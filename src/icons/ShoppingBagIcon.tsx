import { IconProps } from './types';

export default function ShoppingBagIcon({ width = 20, height = 20, className = '' }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 2.1a3.2 3.2 0 0 0-3.2 3.2v.8H4a.8.8 0 0 0-.795.712l-.8 7.2a.8.8 0 0 0 .795.888h9.6a.8.8 0 0 0 .796-.888l-.8-7.2A.8.8 0 0 0 12 6.1h-.8v-.8A3.2 3.2 0 0 0 8 2.1zm1.6 4v-.8a1.6 1.6 0 1 0-3.2 0v.8h3.2zM4.8 8.5a.8.8 0 1 1 1.601 0 .8.8 0 0 1-1.6 0zm5.6-.8a.8.8 0 1 0 .001 1.6.8.8 0 0 0 0-1.6z"
                fill="currentColor"
            />
        </svg>
    );
}
