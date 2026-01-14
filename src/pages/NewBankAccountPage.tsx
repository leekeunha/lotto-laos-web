import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';
import InformationCard from '../ui/InformationCard';
import AddBankAccountForm from '../features/bankAccounts/AddBankAccountForm';

export default function NewBankAccountPage() {
    return (
        <>
            <PageTitle title="ADD BANK ACCOUNT" showBackButton={false} showMoveHomeButton={true} />
            <PageContainer>
                <InformationCard
                    className="mb-4"
                    description="Please enter your bank account information correctly. If you enter it incorrectly, your receipt of the prize may be restricted."
                />
                <AddBankAccountForm></AddBankAccountForm>
            </PageContainer>
        </>
    );
}
