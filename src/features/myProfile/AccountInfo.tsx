import { NavLink } from 'react-router-dom';
import User from '../../models/User';
import BorderCard from '../../ui/BorderCard';
import Hr from '../../ui/Hr';
import SvgIcon from '../../ui/SvgIcon';

export default function AccountInfo({ user }: { user: User }) {
    return (
        <>
            <BorderCard>
                <p className="font-bold mb-4"> Account Information</p>
                <p>Phone Number</p>
                <p>{user.memberId}</p>
                <Hr className="my-2" />
                <div className="flex justify-between">
                    <p>Password</p>
                    <NavLink to="change-password">
                        <SvgIcon fileName="pencil"></SvgIcon>
                    </NavLink>
                </div>
                <p>********</p>
            </BorderCard>
        </>
    );
}
