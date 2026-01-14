import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import { useUser } from '../features/authentication/useUser';
import MyAccountMenuItem from '../features/information/MyAccountMenuItem';
import { AccountMenuItem } from './types';
import { useNavigate } from 'react-router-dom';
import { myAccountMenuItems, partnerMyAccountMenuItems } from '../global/listItems';
import { PARTNER } from '../../constants/global';

export default function MyAccountPage() {
    const { user } = useUser();
    const navigate = useNavigate();

    if (!user) {
        navigate('/auth/sign-in');
        return;
    }

    const { fullName, referralCode, bankCount, memberType } = user;

    const menuItems: AccountMenuItem[] =
        memberType === PARTNER ? partnerMyAccountMenuItems : myAccountMenuItems;

    return (
        <>
            <PageTitle title="MY ACCOUNT" />
            <PageContainer className="mt-5">
                <p className="text-xl">{fullName},</p>
                <p className="text-xl">Have a day full of luck!</p>
                <ul className="my-5">
                    {menuItems.map((item: AccountMenuItem) => (
                        <MyAccountMenuItem
                            key={item.svgFileName}
                            referralCode={referralCode}
                            bankCount={bankCount}
                            item={item}
                        />
                    ))}
                </ul>
            </PageContainer>
        </>
    );
}
