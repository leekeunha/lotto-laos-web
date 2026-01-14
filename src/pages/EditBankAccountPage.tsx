import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import InformationCard from '../ui/InformationCard';
import EditBankAccountForm from '../features/bankAccounts/EditBankAccountForm';

export default function EditBankAccountPage() {
    return (
        <>
            <PageTitle title="BANK ACCOUNT EDIT" showBackButton={true} showMoveHomeButton={false} />
            <PageContainer>
                <InformationCard
                    className="mb-4"
                    description="Please enter your bank account information correctly. If you enter it incorrectly, your receipt of the prize may be restricted."
                />
                <EditBankAccountForm></EditBankAccountForm>
            </PageContainer>
        </>
    );
}
