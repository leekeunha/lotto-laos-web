import { IconProps } from './types';

export default function ShoppingCartIcon({ width = 20, height = 20, className = '' }: IconProps) {
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
                d="M2.402 1.3a.8.8 0 0 0 0 1.6h.976l.244.977a.804.804 0 0 0 .008.034l1.086 4.344-.714.714c-1.008 1.008-.295 2.73 1.13 2.73h6.87a.8.8 0 0 0 0-1.6h-6.87l.8-.8h5.27a.8.8 0 0 0 .715-.442l2.4-4.8a.8.8 0 0 0-.715-1.157H5.026l-.248-.995a.8.8 0 0 0-.776-.605h-1.6zm10.4 12.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zm-7.6 1.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z"
                fill="currentColor"
            />
        </svg>
    );
}
