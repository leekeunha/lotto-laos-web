import { RemoteResultDetail } from './RemoteResultDetail';

export class ResultDetail {
    #drawIdx: string;
    #winningDate: Date;
    #winningNumber: number[];
    #bonusNumber: string;
    #drawStartDate: Date;
    #drawEndDate: Date;
    #drawStatus: string;
    #carryoverPrizeAmount: number;
    #grade1TotalPrizeAmount: number;
    #grade1TotalPlayer: number;
    #grade1PrizeAmountPerPlayer: number;
    #grade1PrizeRateORFixed: string;
    #grade2TotalPrizeAmount: number;
    #grade2TotalPlayer: number;
    #grade2PrizeRateORFixed: string;
    #grade3PrizeRateORFixed: string;
    #grade3TotalPlayer: number;
    #grade3TotalPrizeAmount: number;
    #grade4PrizeRateORFixed: string;
    #grade4TotalPlayer: number;
    #grade4TotalPrizeAmount: number;
    #drawVideoUrl: string;
    #totalLinePrice: number;
    #totalLines: string;
    #videoUseTag: string;

    constructor(remoteResultDetail: RemoteResultDetail) {
        this.#drawIdx = remoteResultDetail.drawIdx;
        this.#winningDate = new Date(remoteResultDetail.winningDate);
        this.#winningNumber = remoteResultDetail.winningNumber;
        this.#bonusNumber = remoteResultDetail.bonusNumber;
        this.#drawStartDate = new Date(remoteResultDetail.drawStartDate);
        this.#drawEndDate = new Date(remoteResultDetail.drawEndDate);
        this.#drawStatus = remoteResultDetail.drawStatus;
        this.#carryoverPrizeAmount = remoteResultDetail.carryoverPrizeAmount;
        this.#grade1TotalPrizeAmount = remoteResultDetail.grade1TotalPrizeAmount;
        this.#grade1TotalPlayer = remoteResultDetail.grade1TotalPlayer;
        this.#grade1PrizeAmountPerPlayer = remoteResultDetail.grade1PrizeAmountPerPlayer;
        this.#grade1PrizeRateORFixed = remoteResultDetail.grade1PrizeRateORFixed;
        this.#grade2TotalPrizeAmount = remoteResultDetail.grade2TotalPrizeAmount;
        this.#grade2TotalPlayer = remoteResultDetail.grade2TotalPlayer;
        this.#grade2PrizeRateORFixed = remoteResultDetail.grade2PrizeRateORFixed;
        this.#grade3PrizeRateORFixed = remoteResultDetail.grade3PrizeRateORFixed;
        this.#grade3TotalPlayer = remoteResultDetail.grade3TotalPlayer;
        this.#grade3TotalPrizeAmount = remoteResultDetail.grade3TotalPrizeAmount;
        this.#grade4PrizeRateORFixed = remoteResultDetail.grade4PrizeRateORFixed;
        this.#grade4TotalPlayer = remoteResultDetail.grade4TotalPlayer;
        this.#grade4TotalPrizeAmount = remoteResultDetail.grade4TotalPrizeAmount;
        this.#drawVideoUrl = remoteResultDetail.drawVideoUrl;
        this.#totalLinePrice = remoteResultDetail.totalLinePrice;
        this.#totalLines = remoteResultDetail.totalLines;
        this.#videoUseTag = remoteResultDetail.videoUseTag;
    }

    get drawIdx(): string {
        return this.#drawIdx;
    }

    get winningDate(): Date {
        return this.#winningDate;
    }

    get winningNumber(): number[] {
        return this.#winningNumber;
    }

    get bonusNumber(): string {
        return this.#bonusNumber;
    }

    get drawStartDate(): Date {
        return this.#drawStartDate;
    }

    get drawEndDate(): Date {
        return this.#drawEndDate;
    }

    get drawStatus(): string {
        return this.#drawStatus;
    }

    get carryoverPrizeAmount(): number {
        return this.#carryoverPrizeAmount;
    }

    get grade1TotalPrizeAmount(): number {
        return Number(this.#grade1TotalPrizeAmount);
    }

    get grade1TotalPlayer(): number {
        return Number(this.#grade1TotalPlayer);
    }

    get grade1PrizeAmountPerPlayer(): number {
        return this.#grade1PrizeAmountPerPlayer;
    }

    get grade1PrizeRateORFixed(): string {
        return this.#grade1PrizeRateORFixed;
    }

    get grade2TotalPrizeAmount(): number {
        return Number(this.#grade2TotalPrizeAmount);
    }

    get grade2TotalPlayer(): number {
        return Number(this.#grade2TotalPlayer);
    }

    get grade2PrizeRateORFixed(): string {
        return this.#grade2PrizeRateORFixed;
    }

    get grade3PrizeRateORFixed(): string {
        return this.#grade3PrizeRateORFixed;
    }

    get grade3TotalPlayer(): number {
        return Number(this.#grade3TotalPlayer);
    }

    get grade3TotalPrizeAmount(): number {
        return Number(this.#grade3TotalPrizeAmount);
    }

    get grade4PrizeRateORFixed(): string {
        return this.#grade4PrizeRateORFixed;
    }

    get grade4TotalPlayer(): number {
        return Number(this.#grade4TotalPlayer);
    }

    get grade4TotalPrizeAmount(): number {
        return Number(this.#grade4TotalPrizeAmount);
    }

    get drawVideoUrl(): string {
        return this.#drawVideoUrl;
    }

    get totalLinePrice(): number {
        return this.#totalLinePrice;
    }

    get totalLines(): string {
        return this.#totalLines;
    }

    get videoUseTag(): string {
        return this.#videoUseTag;
    }

    get totalWinners(): number {
        return (
            this.#grade1TotalPlayer +
            this.#grade2TotalPlayer +
            this.#grade3TotalPlayer +
            this.#grade4TotalPlayer
        );
    }

    get totalPrizeAmount(): number {
        return (
            this.#grade1TotalPrizeAmount +
            this.#grade2TotalPrizeAmount +
            this.#grade3TotalPrizeAmount +
            this.#grade4TotalPrizeAmount
        );
    }
}
