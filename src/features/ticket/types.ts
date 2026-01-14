import { LineInTicket } from '../../models/LineInTicket';
import { TicketDetail } from '../../models/TicketDetail';

export type SerialNumberCardProps = {
    ticketDetail?: TicketDetail;
};

export type LinesInTicketDetailProps = {
    ticketDetail?: TicketDetail;
};

export type NumberMarblesCardsInTicketProps = {
    ticketDetail: TicketDetail;
};

export type NumberMarblesCardsInTicketsProps = {
    ticketDetail?: TicketDetail;
};

export type TotalAmountCardProps = {
    ticketDetail?: TicketDetail;
};

export interface NumberMarbleCardProps {
    line: LineInTicket;
    ticketDetail: TicketDetail;
    index: number;
}
