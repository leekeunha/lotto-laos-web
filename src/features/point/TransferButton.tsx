import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const TransferButton = () => {
    return (
        <Link className="col-span-2 mt-3" to={`/point/point-transfer`}>
            <Button className="w-full" variant="outlined">
                Transfer
            </Button>
        </Link>
    );
};

export default TransferButton;
