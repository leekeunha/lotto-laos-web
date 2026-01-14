import ReferredCounts from '../features/referral/ReferredCounts';
import ReferrerList from '../features/referral/ReferrerList';
import RefferralCodeCard from '../features/referral/RefferralCodeCard';
import { useReferralOverview } from '../features/referral/useReferralOverview';
import { CustomSpinner } from '../ui/CustomSpinner';
import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';

export default function ReferralPage() {
    const { referralOverview, isPending } = useReferralOverview();

    if (isPending) {
        return <CustomSpinner />;
    }

    if (!referralOverview) {
        return (
            <>
                <PageTitle title="REFERRALS" />
                <div>No Data</div>
            </>
        );
    }

    return (
        <>
            <PageTitle title="REFERRAL" />
            <PageContainer className="flex flex-col gap-5">
                <ReferredCounts></ReferredCounts>

                <RefferralCodeCard referralCode={referralOverview.referralCode}></RefferralCodeCard>

                <ReferrerList></ReferrerList>
            </PageContainer>
        </>
    );
}
