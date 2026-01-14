/*----------------------------------------------------------------------------------

 * 메시지 상세 정보를 표시하는 UI 컴포넌트입니다.

 *---------------------------------------------------------------------------------*/
import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import { useMessageDetail } from '../features/messages/useMessageDetail';
import MessageDetailCard from '../features/messages/MessageDetailCard';

export default function MessageDetailPage() {
    const { messageDetail } = useMessageDetail();

    return (
        <>
            <PageTitle title="MESSAGE DETAILS" />
            {messageDetail && (
                <PageContainer>
                    <MessageDetailCard messageDetail={messageDetail} />
                </PageContainer>
            )}
        </>
    );
}
