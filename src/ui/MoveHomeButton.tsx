import { Typography } from '@material-tailwind/react';
import { useMoveHome } from './useMoveHome';
import { MoveHomeButtonProps } from './types';

export default function MoveHomeButton({ text }: MoveHomeButtonProps): JSX.Element {
    const moveHome = useMoveHome();

    return (
        <button className="flex items-center" type="button" onClick={moveHome}>
            <img src={'/icons/left-arrow.svg'} className="w-5 h-5 text-3xl ml-3" alt="home-icon" />
            {text && (
                <Typography className="ml-3 " color="black">
                    {text}
                </Typography>
            )}
        </button>
    );
}
