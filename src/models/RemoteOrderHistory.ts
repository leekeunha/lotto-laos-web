export type RemoteOrderHistory = {
    orderIdx: string;
    gameName: string;
    drawIdx: string;
    createdAt: Date;
    totalPrice: number;
    currencyType: string;
    orderStatus: number;
};
