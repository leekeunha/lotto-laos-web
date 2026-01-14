import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthTokens } from '../features/authentication/useAuthTokens';

export function ProtectedRoute({ children }: PropsWithChildren) {
    const authTokens = useAuthTokens();

    if (!authTokens) {
        return <Navigate to="/auth/sign-in" replace />;
    }

    return <>{children}</>;
}
