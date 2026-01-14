import { RemoteWinningNumbers } from '../services/types';

export class WinningNumber {
    #drawIdx: string;
    #winningDate: Date | null;
    #winningNumber: string;
    #bonusNumber: string;
    #prizingConfirmDate: Date;
    #prizingStartDate: Date;
    #prizingEndDate: Date;
    #drawStartDate: Date;
    #drawEndDate: Date;

    constructor(remoteWinningNumbers: RemoteWinningNumbers) {
        this.#drawIdx = remoteWinningNumbers.drawIdx;
        this.#winningDate = remoteWinningNumbers.winningDate
            ? new Date(remoteWinningNumbers.winningDate)
            : null;
        this.#winningNumber = remoteWinningNumbers.winningNumber;
        this.#bonusNumber = remoteWinningNumbers.bonusNumber;
        this.#prizingConfirmDate = new Date(remoteWinningNumbers.prizing_confirm_date);
        this.#prizingStartDate = new Date(remoteWinningNumbers.prizing_start_date);
        this.#prizingEndDate = new Date(remoteWinningNumbers.prizing_end_date);
        this.#drawStartDate = new Date(remoteWinningNumbers.draw_start_date);
        this.#drawEndDate = new Date(remoteWinningNumbers.draw_end_date);
    }

    get drawIdx(): string {
        return this.#drawIdx;
    }

    get winningDate(): Date | null {
        return this.#winningDate;
    }

    get winningNumber(): number[] {
        return this.#winningNumber.split('|').map(Number);
    }

    get bonusNumber(): string {
        return this.#bonusNumber;
    }

    get prizingConfirmDate(): Date {
        return this.#prizingConfirmDate;
    }

    get prizingStartDate(): Date {
        return this.#prizingStartDate;
    }

    get prizingEndDate(): Date {
        return this.#prizingEndDate;
    }

    get drawStartDate(): Date {
        return this.#drawStartDate;
    }

    get drawEndDate(): Date {
        return this.#drawEndDate;
    }
}
