import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export default function WriteInquiryButton() {
    return (
        <Link to="new">
            <Button color="red" fullWidth className="mb-5">
                Write inquiry
            </Button>
        </Link>
    );
}
