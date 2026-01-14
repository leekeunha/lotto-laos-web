export type RemoteResult = {
    drawIdx: string;
    winningDate: string;
    winningNumber: number[];
    bonusNumber: string;
    drawStartDate: string;
    drawEndDate: string;
    drawStatus: 'OPEN' | 'CLOSE';
    lastDrawIdx: string;
};
