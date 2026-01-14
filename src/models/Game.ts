import { RemoteGame } from './RemoteGame';

export class Game {
    #gameCode: string;
    #gameName: string;

    constructor(remoteGame: RemoteGame) {
        this.#gameCode = remoteGame.gameCode;
        this.#gameName = remoteGame.gameName;
    }

    get gameCode(): string {
        return this.#gameCode;
    }

    get gameName(): string {
        return this.#gameName;
    }
}
