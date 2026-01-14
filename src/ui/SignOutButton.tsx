import React from 'react';
import { useSignOut } from '../features/authentication/useSignOut';
import { Button } from '@material-tailwind/react';

const SignOutButton: React.FC = () => {
    const { signOut } = useSignOut();

    const handleSignout = () => {
        signOut();
    };

    return (
        <Button variant="outlined" fullWidth onClick={handleSignout}>
            Sign Out
        </Button>
    );
};

export default SignOutButton;
