import { UserIcon, DocumentIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { FooterButtonItem } from '../features/types';

export const stepIconsInfo = [
    { icon: <DocumentIcon className="h-5" />, label: 'Step 1' },
    { icon: <UserIcon className="h-5" />, label: 'Step 2' },
    { icon: <CheckCircleIcon className="h-5" />, label: 'Step 3' },
];

export const footerItems: FooterButtonItem[] = [
    { title: 'Home', link: '/home' },
    { title: 'Result', link: '/result' },
    { title: 'Info', link: '/infor' },
];

export const loggedInFooterItems: FooterButtonItem[] = [
    { title: 'Home', link: '/home' },
    { title: 'Result', link: '/result' },
    { title: 'Buy', link: '/happy545-lottery/buy' },
    { title: 'Game', link: '/game' },
    { title: 'My account', link: '/my-account' },
];

export const loggedInPartnerFooterItems: FooterButtonItem[] = [
    { title: 'Home', link: '/home' },
    { title: 'Points', link: '/point/points' },
    { title: 'My account', link: '/my-account' },
];
