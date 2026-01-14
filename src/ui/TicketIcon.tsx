import { IconProps } from '../icons/types';

export default function TicketIcon({ className = '', width = 16, height = 17 }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M1.6 5.3a1.6 1.6 0 0 1 1.6-1.6h9.6a1.6 1.6 0 0 1 1.6 1.6v1.6a1.6 1.6 0 0 0 0 3.2v1.6a1.6 1.6 0 0 1-1.6 1.6H3.2a1.6 1.6 0 0 1-1.6-1.6v-1.6a1.6 1.6 0 0 0 0-3.2V5.3z" />
        </svg>
    );
}
