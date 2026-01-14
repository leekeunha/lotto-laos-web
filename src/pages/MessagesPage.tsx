/*----------------------------------------------------------------------------------

 * 메시지 정보를 표시하는 리스트 UI 컴포넌트입니다.

 *---------------------------------------------------------------------------------*/
import PageTitle from '../ui/PageTitle';
import MessageList from '../features/messages/MessageList';
import PageContainer from '../ui/PageContainer';

export default function MessagesPage() {
    return (
        <>
            <div className="flex flex-col w-full mb-5">
                <PageTitle title="MESSAGES" showBackButton={false} showMoveHomeButton={true} />
                <PageContainer className="!p-0">
                    <MessageList />
                </PageContainer>
            </div>
        </>
    );
}
