import { Typography } from '@material-tailwind/react';
import { useMoveBack } from '../hooks/useMoveBack';
import { BackButtonProps } from './types';
import { useNavigate } from 'react-router-dom';

export default function BackButton({ text, backTo }: BackButtonProps): JSX.Element {
    const moveBack = useMoveBack();
    const navigate = useNavigate();

    const goBackOrNavigate = () => {
        if (backTo) {
            navigate(backTo);
        } else {
            moveBack();
        }
    };

    return (
        <button className="flex items-center" type="button" onClick={goBackOrNavigate}>
            <img src={'/icons/left-arrow.svg'} className="w-5 h-5 text-3xl ml-3" alt="left-arrow" />
            {text && (
                <Typography className="ml-3 " color="black">
                    {text}
                </Typography>
            )}
        </button>
    );
}
