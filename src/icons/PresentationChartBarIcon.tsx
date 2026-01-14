import { IconProps } from './types';

export default function PresentationChartBarIcon({
    className = '',
    width = 20,
    height = 20,
}: IconProps) {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.1 4.1a1.2 1.2 0 0 0 0 2.4v9.6a2.4 2.4 0 0 0 2.4 2.4h3.103L8.052 20.05a1.2 1.2 0 1 0 1.696 1.697l2.752-2.752 2.752 2.752a1.2 1.2 0 0 0 1.696-1.697L15.397 18.5H18.5a2.4 2.4 0 0 0 2.4-2.4V6.5a1.2 1.2 0 1 0 0-2.4H4.1zm13.2 4.8a1.2 1.2 0 1 0-2.4 0v4.8a1.2 1.2 0 1 0 2.4 0V8.9zm-3.6 1.2a1.2 1.2 0 1 0-2.4 0v3.6a1.2 1.2 0 1 0 2.4 0v-3.6zm-3.6 1.2a1.2 1.2 0 1 0-2.4 0v2.4a1.2 1.2 0 1 0 2.4 0v-2.4z"
            />
        </svg>
    );
}
