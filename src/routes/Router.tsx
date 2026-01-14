import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate, useLocation } from 'react-router-dom';
import { ProtectedRoute } from '../ui/ProtectedRoute';
import { Spinner } from '@material-tailwind/react';
import protectedRoutes from './ProtectedRoutes';
import SignInPage from '../pages/SignInPage';
import FaqPage from '../pages/FaqPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ResetPasswordSentPage from '../pages/ResetPasswordSentPage';
import NewPasswordPage from '../pages/NewPasswordPage';
import NewPasswordCompletedPage from '../pages/NewPasswordCompletedPage';
import NewPasswordExpiredPage from '../pages/NewPasswordExpiredPage';
import NewPasswordInvalidPage from '../pages/NewPasswordInvalidPage';
import AppLayout from '../ui/AppLayout';
import AboutHappy545Page from '../pages/AboutHappy545Page';
import HowToPlayPage from '../pages/HowToPlayPage';
import HowToClaimPage from '../pages/HowToClaimPage';
import PrizeRulesPage from '../pages/PrizeRulesPage';
import AboutUsPage from '../pages/AboutUsPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import TermsOfServicePage from '../pages/TermsOfServicePage';
import HomePage from '../pages/HomePage';
import InfoPage from '../pages/InfoPage';
import ResultPage from '../pages/ResultPage';
import ResultDetailPage from '../pages/ResultDetailPage';
import SignUpStepsPage from '../pages/SignUpStepsPage';
import WelcomeSignUpPage from '../pages/WelcomeSignUpPage';
import EventPage from '../pages/EventPage';
import EventDetailPage from '../pages/EventDetailPage';
import AnnouncementPage from '../pages/AnnouncementPage';
import AnnouncementDetailPage from '../pages/AnnouncementDetailPage';
import SignUpFailedPage from '../pages/SignUpFailedPage';
function RedirectToHome() {
    const location = useLocation();
    const [path, setPath] = useState('');

    useEffect(() => {
        const search = location.search;
        setPath(`/home${search}`);
    }, [location]);

    return path ? <Navigate to={path} replace /> : null;
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <RedirectToHome />,
    },
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { path: 'home', element: <HomePage /> },
            { path: 'infor', element: <InfoPage /> },
            { path: 'result', element: <ResultPage /> },
            { path: 'result/detail/:id', element: <ResultDetailPage /> },
            //Information
            { path: '/information/about-happy545', element: <AboutHappy545Page /> },
            { path: '/information/how-to-play', element: <HowToPlayPage /> },
            { path: '/information/how-to-claim', element: <HowToClaimPage /> },
            { path: '/information/prize-rules', element: <PrizeRulesPage /> },
            { path: '/notice/faq', element: <FaqPage /> },

            //company-information
            { path: '/company-information/about-us', element: <AboutUsPage /> },
            { path: '/company-information/privacy-policy', element: <PrivacyPolicyPage /> },
            { path: '/company-information/terms-of-service', element: <TermsOfServicePage /> },

            //notice
            { path: 'notice/event', element: <EventPage /> },
            { path: 'notice/event/:id', element: <EventDetailPage /> },
            { path: 'notice/announcements', element: <AnnouncementPage /> },
            { path: 'notice/announcements/:id', element: <AnnouncementDetailPage /> },
            {
                path: 'auth',
                children: [
                    { path: 'sign-in', element: <SignInPage /> },
                    { path: 'welcome-sign-up', element: <WelcomeSignUpPage /> },
                    { path: 'signup/failed', element: <SignUpFailedPage /> },
                    { path: 'signup-steps', element: <SignUpStepsPage /> },
                    { path: 'reset-password', element: <ResetPasswordPage /> },
                    { path: 'reset-password/sent', element: <ResetPasswordSentPage /> },
                    {
                        path: 'reset-password/new-password',
                        element: <NewPasswordPage />,
                    },
                    {
                        path: 'reset-password/new-password/completed',
                        element: <NewPasswordCompletedPage />,
                    },
                    {
                        path: 'reset-password/new-password/expired',
                        element: <NewPasswordExpiredPage />,
                    },
                    {
                        path: 'reset-password/new-password/invalid',
                        element: <NewPasswordInvalidPage />,
                    },
                ],
            },
            ...protectedRoutes.map((route) => ({
                path: route.path,
                element: <ProtectedRoute>{route.element}</ProtectedRoute>,
            })),
        ],
    },
]);

export default function Router() {
    return (
        <React.Suspense
            fallback={
                <div className="flex justify-center items-center h-screen">
                    <Spinner color="red" className="h-12 w-12" />
                </div>
            }
        >
            <RouterProvider router={router} />
        </React.Suspense>
    );
}
