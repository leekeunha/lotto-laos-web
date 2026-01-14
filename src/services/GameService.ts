import { GetGamesApiResponse } from './types';
import GameClient from '../httpClient/GameClient';
import { Game } from '../models/Game';
import { RemoteGame } from '../models/RemoteGame';

// GameService 클래스는 game 데이터를 가져오기 위한 서비스입니다.
export class GameService {
    private gameClient: GameClient;

    // GameService 생성자입니다. GameClient 인스턴스를 받습니다.
    constructor(apiClient: GameClient) {
        this.gameClient = apiClient;
    }

    /**
     * Game 데이터를 가져옵니다.
     * @returns Promise<Game[]> - Game 데이터의 배열
     */
    async getGames(): Promise<Game[]> {
        const apiResponse: GetGamesApiResponse = await this.gameClient.getGames();
        const remoteResults: RemoteGame[] = apiResponse.data;
        const resultData = remoteResults.map((data) => new Game(data));

        return resultData;
    }
}
