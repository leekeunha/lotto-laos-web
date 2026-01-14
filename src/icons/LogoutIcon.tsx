import { IconProps } from './types';

export default function LogoutIcon({
    className = '',
    color = '#90A4AE',
    width = 20,
    height = 20,
}: IconProps) {
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
                d="M2.4 2.9a.8.8 0 0 0-.8.8v9.6a.8.8 0 1 0 1.6 0V3.7a.8.8 0 0 0-.8-.8zm8.234 7.434a.8.8 0 0 0 1.131 1.132l2.4-2.4a.8.8 0 0 0 0-1.132l-2.4-2.4a.8.8 0 1 0-1.131 1.131L11.668 7.7H5.6a.8.8 0 0 0 0 1.6h6.068l-1.034 1.034z"
                fill={color}
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    );
}
