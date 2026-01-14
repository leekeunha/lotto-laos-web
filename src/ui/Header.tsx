import { Link } from 'react-router-dom';
import Logo from './Logo';
import { HeaderProps } from './types';
import HeaderButtonGroup from '../features/authentication/HeaderButtonGroup';

export default function Header({ className }: HeaderProps) {
    return (
        <header className={`${className}`}>
            <div className="flex w-full justify-between h-10">
                <Link to="/home" className="flex items-center">
                    <Logo className="h-6" />
                </Link>
                <HeaderButtonGroup className="flex items-center" />
            </div>
        </header>
    );
}
