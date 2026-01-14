import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export default function AddBankAccountButton() {
    return (
        <Link to="new">
            <Button color="red" fullWidth className="mb-5">
                Add Bank Account
            </Button>
        </Link>
    );
}
