import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import PrizesTableOperations from '../ui/PrizeTableOperations';
import PrizesCards from '../features/happy545Lottery/PrizesCards';

export default function PrizesPage() {
    return (
        <div className="flex flex-col w-full mb-5">
            <PageTitle title="PRIZES" />
            <PageContainer>
                <PrizesTableOperations />
                <PrizesCards />
            </PageContainer>
        </div>
    );
}
