export class CarryOverPrize {
    #drawIdx: number;
    #carryoverPrizeAmount: string;

    constructor(drawIdx: number, carryoverPrizeAmount: string) {
        this.#drawIdx = drawIdx;
        this.#carryoverPrizeAmount = carryoverPrizeAmount;
    }

    get drawIdx(): number {
        return this.#drawIdx;
    }

    get carryoverPrizeAmount(): string {
        //숫자 3자리마다 콤마 찍기
        return this.#carryoverPrizeAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}
