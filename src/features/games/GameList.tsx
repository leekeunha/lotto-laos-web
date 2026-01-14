/*----------------------------------------------------------------------------------

 * 게임 목록를 표시하는 UI 컴포넌트입니다.

 *---------------------------------------------------------------------------------*/
import { Game } from '../../models/Game';
import GameItem from './GameItem';
import useGameList from './useGameList';

export default function GameList() {
    const { gameList } = useGameList();

    return (
        <>
            {gameList?.map((game: Game) => {
                return <GameItem key={game.gameCode} game={game} />;
            })}
        </>
    );
}
