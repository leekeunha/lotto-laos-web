import MyBanks from '../features/bankAccounts/MyBanks';
import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';
import InformationCard from '../ui/InformationCard';

import AddBankAccountButton from '../features/bankAccounts/AddBankAccountButton';

export default function BankAccountsPage() {
    return (
        <>
            <PageTitle title="BANK ACCOUNTS" />
            <PageContainer>
                <InformationCard
                    className="mb-6"
                    description="Please register a bank account to receive prize money for tickets paid with points."
                />
                <MyBanks />
                <AddBankAccountButton />
            </PageContainer>
        </>
    );
}
