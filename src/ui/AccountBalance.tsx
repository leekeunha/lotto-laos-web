import { Typography } from '@material-tailwind/react';

export default function AccountBalance() {
    return (
        <>
            <img src="/icons/database.svg" className="h-6" alt="database" />
            <Typography variant="h4" className="text-start">
                13,000.00
            </Typography>
        </>
    );
}
