import { MEMBER } from '../../constants/global';
import { useUser } from '../features/authentication/useUser';
import AccountInfo from '../features/myProfile/AccountInfo';
import PersonalInfoView from '../features/myProfile/PersonalInfoView';
import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';

export default function MyProfilePage() {
    const { user } = useUser();

    if (!user) {
        return;
    }

    const { memberType } = user;

    return (
        <>
            <PageTitle title="MY PROFILE" />
            <PageContainer className="flex flex-col gap-3">
                <AccountInfo user={user}></AccountInfo>
                {memberType === MEMBER && <PersonalInfoView user={user}></PersonalInfoView>}
            </PageContainer>
        </>
    );
}
