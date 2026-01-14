import { TicketInfo } from '../services/types';

export type RemoteDrawInfo = {
    drawIdx: string;
    lines: TicketInfo[];
};
