import SvgIcon from '../../ui/SvgIcon';
import Hr from '../../ui/Hr';
import { MyAccountMenuItemProps } from './types';

import { useSignOut } from '../authentication/useSignOut';
import { useNavigate } from 'react-router-dom';

export default function MyAccountMenuItem({ item, bankCount }: MyAccountMenuItemProps) {
    const { svgFileName, label, type, link } = item;

    const { signOut } = useSignOut();
    const navigate = useNavigate();

    const handleItemClick = () => {
        if (type === 'signOut') {
            signOut();
            return;
        }

        navigate(link);
    };

    return (
        <>
            <li className="flex gap-2 cursor-pointer" onClick={handleItemClick}>
                <SvgIcon className="w-4" fileName={svgFileName} />
                <div className="flex justify-between w-full">
                    <p>{label}</p>
                    {type === 'badge' && bankCount && (
                        <p className="ml-2 bg-gray-300 rounded-lg px-1.5 text-xs my-auto">{`${bankCount}`}</p>
                    )}
                </div>
            </li>

            <Hr className="my-4" />
        </>
    );
}
