import HomeTitleRow from '../features/home/HomeTitleRow';
import CountDown from '../features/home/CountDown';
import HomeButtons from '../features/home/HomeButtons';
import PageContainer from '../ui/PageContainer';
import { useUser } from '../features/authentication/useUser';
import ColumnGrid from '../ui/ColumnGrid';
import Header from '../ui/Header';
import { informationItems, noticeItems } from '../global/listItems';
import { HOME_COLUMN_LENGTH, MEMBER, PARTNER } from '../../constants/global';
import PartnerIconButtons from '../features/home/PartnerIconButtons';
import { MemberIconButtons } from '../features/home/MemberIconButtons';
import BannerCarousel from '../features/home/BannerCarousel';

export default function HomePage() {
    const { user } = useUser();

    const informationItemsToShow = informationItems;
    const noticeItemsToShow = noticeItems;

    return (
        <div>
            <Header className="p-4" />
            <section>
                <CountDown className="mb-1" />
            </section>

            <PageContainer>
                {user && user.memberType === MEMBER && <MemberIconButtons />}

                {user && user.memberType === PARTNER && <PartnerIconButtons />}

                {(!user || user.memberType === MEMBER) && (
                    <>
                        <HomeTitleRow title={'Information'}>
                            <ColumnGrid cols={HOME_COLUMN_LENGTH}>
                                <HomeButtons items={informationItemsToShow} />
                            </ColumnGrid>
                        </HomeTitleRow>
                        <HomeTitleRow title={'Notice'}>
                            <ColumnGrid cols={HOME_COLUMN_LENGTH}>
                                <HomeButtons items={noticeItemsToShow} />
                            </ColumnGrid>
                        </HomeTitleRow>
                    </>
                )}

                <BannerCarousel />
            </PageContainer>
        </div>
    );
}
