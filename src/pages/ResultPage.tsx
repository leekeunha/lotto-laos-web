import ResultCards from '../features/result/ResultCards';
import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import ResultTableOperations from '../ui/ResultTableOperations';

export default function ResultPage() {
    return (
        <>
            <div className="flex flex-col w-full mb-5">
                <PageTitle title="RESULTS" showBackButton={false} showMoveHomeButton={true} />
                <PageContainer>
                    <ResultTableOperations />
                    <ResultCards />
                </PageContainer>
            </div>
        </>
    );
}
