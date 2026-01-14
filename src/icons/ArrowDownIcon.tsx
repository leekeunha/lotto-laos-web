import { IconProps } from './types';

export default function ArrowDownIcon({ className = '', width = 20, height = 20 }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 25 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.55 12.352a1.2 1.2 0 0 1 0 1.697l-7.2 7.2a1.2 1.2 0 0 1-1.698 0l-7.2-7.2a1.2 1.2 0 1 1 1.697-1.697l5.152 5.152V3.6a1.2 1.2 0 1 1 2.4 0v13.904l5.151-5.152a1.2 1.2 0 0 1 1.697 0z"
            />
        </svg>
    );
}
