import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { EditBankAccountButtonProps } from './types';

export default function EditBankAccountButton({ myBank }: EditBankAccountButtonProps) {
    return (
        <Link to={`edit/${myBank.memberBankIdx}`}>
            <Button variant="outlined" size="sm">
                Edit
            </Button>
        </Link>
    );
}
