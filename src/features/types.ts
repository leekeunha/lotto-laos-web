import { MyBank } from './../models/MyBank';
import { TicketInfo } from './../services/types';
import { Announcement } from '../models/Announcement';
import { EventModel } from '../models/Event';
import { Faq } from '../models/Faq';
import { Result } from '../models/Result';
import User from '../models/User';
import { ReactNode } from 'react';
import { OrderHistory } from '../models/OrderHistory';
import { Message } from '../models/Message';
import { Prize } from '../models/Prize';
import { PointHistory } from '../models/PointHistoryItem';
import { Inquiry } from '../models/Inquiry';
import { Product } from '../models/Product';
import { PointMallOrderHistory } from '../models/PointMallOrderHistory';
import { Game } from '../models/Game';

export interface Notice {
    no: string;
    title: string;
    date: string;
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface NoticeResponse {
    kind: string;
    etag: string;
    items: Notice[];
    pageInfo: PageInfo;
    nextPageToken?: string;
}

export interface SearchStoreResponse {
    kind: string;
    etag: string;
    items: SearchStore[];
    pageInfo: PageInfo;
    nextPageToken?: string;
}

export interface SearchStore {
    distributor: string;
    tel: string;
    location: string;
    map: string;
}

export interface FaqResponse {
    kind: string;
    etag: string;
    items: Faq[];
    pageInfo: PageInfo;
    nextPageToken?: string;
}

export type PasswordCriteriaProps = {
    isMoreThanMinLength: boolean;
    hasCapitalLetterAndNumber: boolean;
};

export type SignOutFunction = () => void;

export interface IUseUser {
    user: User | null;
}

export interface Config {
    message: string;
    linkText: string;
    linkTo: string;
}

export interface SignButtonGroupProps {
    config: Config;
    children: ReactNode;
}

export interface SignupStep1Props {
    errorsFromServer: string;
    setErrorsFromServer: (error: string) => void;
}

export interface SignupStep2Props {
    onVerify: (isVerified: boolean) => void;
    startResendTimer: () => void;
    isResendTimerStarted: boolean;
    verificationCode: string;
}

export interface NoAccountLinkProps {
    message: string;
    linkText: string;
    linkTo: string;
}

export type HomeCardProps = {
    title: string;
    children?: ReactNode;
};

export type HomeRowSectionProps = {
    title: string;
    children?: ReactNode;
    redirectPath?: string;
};

export type CountDownProps = {
    className?: string;
};

export interface AnnouncementCardProps {
    announcement: Announcement;
}

export interface FaqCardProps {
    faq: Faq;
}

export interface EventCardProps {
    event: EventModel;
}

export interface FooterButtonItem {
    //imgUrl: string;
    title: string;
    link: string;
}

export interface FooterButtonsProps {
    items: FooterButtonItem[];
}

export interface ResultCardProps {
    result: Result;
}

export interface TicketCardProps {
    ticketInfo: TicketInfo;
}

export interface PointHistoryCardProps {
    pointHistory: PointHistory;
}

export interface PrizeCardProps {
    prize: Prize;
}

export interface OrderHistoryCardProps {
    orderHistory: OrderHistory;
}

export interface PointMallOrderHistoryCardProps {
    orderHistory: PointMallOrderHistory;
}

export interface MessageItemProps {
    message: Message;
}

export interface ProductItemProps {
    product: Product;
}

export interface InquiryCardProps {
    inquiry: Inquiry;
}

export interface MyBankCardProps {
    myBank: MyBank;
}

export interface GameItemProps {
    game: Game;
}
