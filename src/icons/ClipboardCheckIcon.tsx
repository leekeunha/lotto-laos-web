interface IconProps {
    color?: string;
    width?: string;
    height?: string;
}

export default function ClipboardCheckIcon({
    color = 'currentColor',
    width = '16',
    height = '17',
}: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M7.2 2.1a.8.8 0 1 0 0 1.6h1.6a.8.8 0 0 0 0-1.6H7.2z" fill={color} />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.2 4.5a1.6 1.6 0 0 1 1.6-1.6 2.4 2.4 0 0 0 2.4 2.4h1.6a2.4 2.4 0 0 0 2.4-2.4 1.6 1.6 0 0 1 1.6 1.6v8.8a1.6 1.6 0 0 1-1.6 1.6H4.8a1.6 1.6 0 0 1-1.6-1.6V4.5zm7.766 4.566a.8.8 0 0 0-1.131-1.131L7.2 10.569 6.166 9.535a.8.8 0 0 0-1.131 1.131l1.6 1.6a.8.8 0 0 0 1.13 0l3.2-3.2z"
                fill={color}
            />
        </svg>
    );
}
