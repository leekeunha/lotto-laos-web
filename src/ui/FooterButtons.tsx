import { Link, useLocation } from 'react-router-dom';
import { FooterButtonsProps } from '../features/types';
import HomeIcon from '../icons/HomeIcon';
import PresentationChartBarIcon from '../icons/PresentationChartBarIcon';
import TicketIcon from './TicketIcon';
import PlayCircleIcon from '../icons/PlayCircleIcon';
import UserCircleIcon from '../icons/UserCircleIcon';
import DatabaseIcon from '../icons/DatabaseIcon';

export default function FooterButtons({ items }: FooterButtonsProps) {
    const location = useLocation();

    const renderIcon = (title: string, isActive: boolean) => {
        const iconColorClass = isActive ? 'text-red-600' : 'text-gray-500';
        const iconSizeClass = 'w-6 h-6';

        switch (title) {
            case 'Home':
                return <HomeIcon className={`${iconSizeClass} ${iconColorClass}`} />;
            case 'Result':
                return (
                    <PresentationChartBarIcon className={`${iconSizeClass} ${iconColorClass}`} />
                );
            case 'Buy':
                return <TicketIcon className={`${iconSizeClass} ${iconColorClass}`} />;
            case 'Game':
                return <PlayCircleIcon className={`${iconSizeClass} ${iconColorClass}`} />;
            case 'My account':
                return <UserCircleIcon className={`${iconSizeClass} ${iconColorClass}`} />;
            case 'Points':
                return <DatabaseIcon className={`${iconSizeClass} ${iconColorClass}`} />;
            case 'Info':
                return <UserCircleIcon className={`${iconSizeClass} ${iconColorClass}`} />;

            default:
                return null;
        }
    };

    return (
        <>
            {items.map((item, index) => {
                const isActive = location.pathname === item.link;

                return (
                    <Link to={item.link} key={index} className="home-button">
                        <div className="flex justify-center">
                            {renderIcon(item.title, isActive)}
                        </div>
                        <p
                            className={`text-xs text-center ${isActive ? 'text-red-600' : 'text-gray-400'}`}
                        >
                            {item.title}
                        </p>
                    </Link>
                );
            })}
        </>
    );
}
