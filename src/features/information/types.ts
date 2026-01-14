import { EventDetail } from '../../models/EventDetail';
import { AccountMenuItem } from '../../pages/types';

export interface EventDetailCardProps {
    eventDetail: EventDetail;
}

export interface EventOverProps {
    imageUrl: string;
}

export interface MyAccountMenuItemProps {
    item: AccountMenuItem;
    referralCode?: string;
    bankCount?: number;
}
