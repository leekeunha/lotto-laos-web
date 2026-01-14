import { IconProps } from './types';

export default function CreditCardIcon({ className = '', width = 20, height = 20 }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M3.2 3.7a1.6 1.6 0 0 0-1.6 1.6v.8h12.8v-.8a1.6 1.6 0 0 0-1.6-1.6H3.2z" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4 7.7H1.6v4a1.6 1.6 0 0 0 1.6 1.6h9.6a1.6 1.6 0 0 0 1.6-1.6v-4zM3.2 10.9a.8.8 0 0 1 .8-.8h.8a.8.8 0 0 1 0 1.6H4a.8.8 0 0 1-.8-.8zm4-.8a.8.8 0 0 0 0 1.6H8a.8.8 0 0 0 0-1.6h-.8z"
            />
        </svg>
    );
}
