import { IconButton } from '@material-tailwind/react';

export default function HambuggerButton({ toggleDrawer }: { toggleDrawer: () => void }) {
    return (
        <IconButton
            variant="text"
            className="text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
            ripple={false}
            onClick={toggleDrawer}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="{2}"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </IconButton>
    );
}
