export type RemotePrize = {
    ticketIdx: string;
    gameName: string;
    drawIdx: string;
    claimedStatus: 'Expired' | 'Claimed';
    createdAt: string;
    prizePrice: number | null;
    currencyType: 'Points';
    lineStatus: number;
    lineIdx: number;
    winningRank: number;
    serialNumber: string;
};
