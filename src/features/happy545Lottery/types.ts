import { Prize } from '../../models/Prize';

export interface ViewTicketButtonProps {
    ticketIdx: string;
}

export type ClaimeStatusProps = {
    status: 'Unclaimed' | 'Claimed' | 'Expired';
};

export interface PrizeDetailCardProps {
    prizeDetail: Prize;
}
