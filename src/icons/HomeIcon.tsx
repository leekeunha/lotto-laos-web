import { IconProps } from './types';

export default function HomeIcon({ className = '', width = 20, height = 20 }: IconProps) {
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
                d="M13.348 3.252a1.2 1.2 0 0 0-1.697 0l-8.4 8.4a1.2 1.2 0 0 0 1.697 1.697l.352-.352V20.9a1.2 1.2 0 0 0 1.2 1.2h2.4a1.2 1.2 0 0 0 1.2-1.2v-2.4a1.2 1.2 0 0 1 1.2-1.2h2.4a1.2 1.2 0 0 1 1.2 1.2v2.4a1.2 1.2 0 0 0 1.2 1.2h2.4a1.2 1.2 0 0 0 1.2-1.2v-7.903l.351.351a1.2 1.2 0 0 0 1.697-1.696l-8.4-8.4z"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    );
}
