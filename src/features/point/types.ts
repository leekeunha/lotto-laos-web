import { PointDetail } from '../../models/PointDetail';

export type TransferConfimationFromCardProps = {
    pointType: string;
    amount: number;
};

export enum PointType {
    gold = 'gold',
    silver = 'silver',
}

export type MyPointCardProps = {
    point: number;
    pointType: string;
    isEnough: boolean;
};

export type TransferConfimationToCardProps = {
    toMemberId: string;
    pointType: string;
    points: string;
    userName: string;
};

export interface PointDetailCardProps {
    pointDetail: PointDetail;
}
