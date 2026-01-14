import { useEffect, useState } from 'react';
import { useUser } from '../features/authentication/useUser.ts';
import { FooterButtonItem } from '../features/types.ts';
import ColumnGrid from './ColumnGrid.tsx';

import FooterButtons from './FooterButtons.tsx';
import Hr from './Hr.tsx';
import { footerItems, loggedInFooterItems, loggedInPartnerFooterItems } from './listItems.tsx';
import { MEMBER, PARTNER } from '../../constants/global.ts';

export default function Footer() {
    const { user } = useUser();

    const [footerItemsToShow, setFooterItemsToShow] = useState<FooterButtonItem[]>(footerItems);

    useEffect(() => {
        if (user && user.memberType === MEMBER) {
            setFooterItemsToShow(loggedInFooterItems);
        } else if (user && user.memberType === PARTNER) {
            setFooterItemsToShow(loggedInPartnerFooterItems);
        } else {
            setFooterItemsToShow(footerItems);
        }
    }, [user]);

    const cols = footerItemsToShow.length;

    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full bg-white z-40 max-w-[512px] min-w-80 mx-auto pb-2">
            <Hr className="pt-2" />
            <ColumnGrid cols={cols}>
                <FooterButtons items={footerItemsToShow} />
            </ColumnGrid>
        </footer>
    );
}
