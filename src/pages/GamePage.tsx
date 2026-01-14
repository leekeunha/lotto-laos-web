/*----------------------------------------------------------------------------------

 * 게임 목록를 표시하는 UI 컴포넌트입니다.

 *---------------------------------------------------------------------------------*/
import GameList from '../features/games/GameList';
import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';

export default function GamePage() {
    return (
        <>
            <div className="flex flex-col w-full mb-5">
                <PageTitle title="HAPPY GAMES" />
                <PageContainer>
                    <GameList />
                </PageContainer>
            </div>
        </>
    );
}
