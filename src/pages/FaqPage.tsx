import PageTitle from '../ui/PageTitle';
import FaqTableOperations from '../ui/FaqTableOperations';
import FaqCards from '../features/information/FaqCards';
import PageContainer from '../ui/PageContainer';

export default function FaqPage() {
    return (
        <>
            <PageTitle
                title="FAQ"
                subtitle="무엇이든 물어보세요"
                showBackButton={false}
                showMoveHomeButton={true}
            />
            <PageContainer>
                <FaqTableOperations />
                <FaqCards />
            </PageContainer>
        </>
    );
}
