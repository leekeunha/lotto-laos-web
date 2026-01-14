import { useQuery } from '@tanstack/react-query';
import GameClient from '../../httpClient/GameClient';
import { GameService } from '../../services/GameService';
import i18n from '../../../translation/i18n';

export default function useGameList() {
    const gameClient = new GameClient();
    const gameService = new GameService(gameClient);

    const { data: gameList, isLoading } = useQuery({
        queryKey: ['game', i18n.language],
        queryFn: () => gameService.getGames(),
    });
    return { gameList, isLoading };
}
