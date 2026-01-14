import { RemoteAnnouncement } from '../models/RemoteAnnouncement';
import { RemoteCarryOverPrize } from '../models/RemoteCarryOverPrize';
import { RemotePreviousDrawInfo } from '../models/RemotePreviousDrawInfo';
import { RemoteAnnouncementDetail } from '../models/RemoteAnnouncementDetail';
import { Announcement } from '../models/Announcement';
import { RemoteFaq } from '../models/RemoteFaq';
import { Faq } from '../models/Faq';
import { AxiosResponse } from 'axios';
import { RemoteInquiryDetail } from '../models/RemoteInquiryDetail';
import { RemoteEvent } from '../models/RemoteEvent';
import { EventModel } from '../models/Event';
import { RemoteCurrentDrawInfo } from '../models/RemoteCurrentDrawInfo';
import { RemoteResult } from '../models/RemoteResult';
import { RemoteDrawInfo } from '../models/RemoteDrawInfo';
import { OrderHistory } from '../models/OrderHistory';
import { LineInPayment } from '../pages/types';
import { RemotePrize } from '../models/RemotePrize';
import { RemoteMyPoints } from '../models/RemoteMyPoints';
import { RemotePointHistoryItem } from '../models/RemotePointHistoryItem';
import { RemoteInquiry } from '../models/RemoteInquiry';
import { Message } from '../models/Message';
import { Product } from '../models/Product';
import { PointMallOrderHistory } from '../models/PointMallOrderHistory';
import { Game } from '../models/Game';

interface PaginationParams {
    pageNumber: number;
    pageRows: number;
}

export type SignupApiRequest = {
    identifier: string;
    password: string;
};

export type SendVerificationCodeApiRequest = {
    identifier: string;
    requestType?: string;
};

export type VerifyCodeApiRequest = {
    identifier: string;
    verifyCode: string;
};

export type CheckSendVerificationCodeApiRequest = {
    identifier: string;
};

export type CheckDuplicateApiRequest = {
    identifier: string;
};

export type SaveFcmTokenApiRequest = {
    fcmToken: string;
};

export type VerifyCurrentPasswordApiRequest = {
    password: string;
};

export type SignInApiRequest = {
    identifier: string;
    password: string;
    memberType: string;
};

export type EditProfileApiRequest = {
    name: string;
    email: string;
    gender: string;
    addressA: string;
    addressB: string;
    addressC: string;
    addressD: string;
    profilePhoto?: File;
};

export type TransferApiRequest = {
    pointType: string;
    points: string;
    toMemberId: string;
};
export type TransferApiResponse = {
    //TODO: 아래 오타 있음. 백엔드로가 수정해 주면 같이 수정해야 함
    data: {
        historyIdx: string;
    };
};

export type ActivateBankApiRequest = {
    memberBankIdx: string;
    active: boolean;
};

export type RemoveBankApiRequest = {
    memberBankIdx: string;
};

export type AddBankApiRequest = {
    bankName: string;
    holderName: string;
    accountNumber: string;
};

export type EditBankApiRequest = {
    memberBankIdx: string;
    bankName: string;
    holderName: string;
    accountNumber: string;
};

export type GetBankDetailRequest = {
    memberBankIdx: string;
};

export type GetPointHistoryApiRequest = PaginationParams & {
    useType: string;
    pointType: string;
    sortOrder: string;
};

export type SignupApiResponse = {
    data: RemoteUser;
};

export interface RemoteUser {
    memberType?: string;
    memberIdx: number;
    memberId?: string;
    memberEmail?: string;
    memberName?: string;
    accessToken?: string;
    accessTokenExpire?: string;
    refreshToken?: string;
    languageType: string;
    refreshTokenExpire?: string;
    emailVerified?: boolean;
    kycVerified?: boolean;
    memberProfilePhotoUrl: string;
    referralCode: string;
    bankCount: number;
    state: {
        id: string;
        name: string;
    };
    district: {
        id: string;
        name: string;
    };
    addressDetail: string;
    memberGender: string;
}

export type GetWinningNumbersApiResponse = {
    data: RemoteWinningNumbers[];
};

export type GetWinningNumbersApiRequest = {
    page: number;
    offset: number;
};

export type GetDrawVideosApiRequest = {
    page: number;
    offset: number;
};

export type RemoteWinningNumbers = {
    drawIdx: string;
    winningDate: string | null;
    winningNumber: string;
    bonusNumber: string;
    prizing_confirm_date: string;
    prizing_start_date: string;
    prizing_end_date: string;
    draw_start_date: string;
    draw_end_date: string;
};

export type GetDrawVideosApiResponse = {
    data: RemoteDrawVideo[];
};

export type RemoteDrawVideo = {
    draw_video_idx: string;
    draw_video_url: string;
    draw_idx: string;
    winning_date: string | null;
};

export type GetAnnouncementsApiRequest = PaginationParams & {
    languageType: string;
    q?: string;
};

export type GetInquiriesApiRequest = PaginationParams & {
    sortOrder: string;
};

export type GetInquiriesApiResponse = {
    data: {
        totalCount: number;
        items: RemoteInquiry[];
    };
};

export type GetAnnouncementDetailApiRequest = {
    languageType: string;
    boardIdx?: string;
};

export type GetAnnouncementDetailApiResponse = {
    data: RemoteAnnouncementDetail;
};

export type GetOneToOneInquiryDetailApiRequest = {
    inquiry_idx: number;
};

export type GetOneToOneInquiryDetailApiResponse = {
    data: RemoteInquiryDetail;
};

export type GetPreviousDrawResponse = {
    data: RemotePreviousDrawInfo;
};

export type GetCurrentDrawResponse = {
    data: RemoteCurrentDrawInfo;
};

export type GetCarryOverPrizeResponse = {
    data: RemoteCarryOverPrize;
};

export type SendVerificationCodeApiResponse = {
    data: {
        Result: string;
    };
};

export type VerifyCodeApiResponse = {
    data: {
        Result: boolean;
    };
};

export interface GoogleUserInfo {
    id: string;
    email: string;
    given_name: string;
    family_name: string;
}

export type GetAnnouncementsApiResponse = {
    data: {
        totalCount: number;
        items: RemoteAnnouncement[];
    };
};

export type GetFaqsApiRequest = PaginationParams & {
    languageType: string;
    q: string;
    category?: string;
};

export type AddInquiryApiRequest = {
    title: string;
    content: string;
    category: string;
};

export type GetInquiresApiRequest = {
    pageRows: number;
    pageNumber: number;
    sortOrder: string;
};

export type AddNewOneToOneInquiryApiResponse = {
    data: {
        Result: boolean;
    };
};

export type GetOneToOneInquiresInfoApiResponse = AxiosResponse<{
    totalCount: number;
    items: RemoteInquiry[];
}>;

export type GetFaqsApiResponse = {
    data: {
        totalCount: number;
        items: RemoteFaq[];
    };
};

export type AnnouncementsInfo = {
    totalCount: number;
    announcements: Announcement[];
};

export interface InfiniteQueryData<T> {
    pages: T[][];
    pageParams: number[];
}

export type FaqsInfo = {
    totalCount: number;
    faqs: Faq[];
};

export type EventInfo = {
    totalCount: number;
    items: EventModel[];
};

export type GetEventsApiRequest = PaginationParams & {
    languageType: string;
    q?: string;
    operatingType?: string;
};

export type GetEventApiResponse = {
    data: {
        totalCount: number;
        items: RemoteEvent[];
    };
};

export type GetEventDetailApiRequest = {
    languageType: string;
    boardIdx?: string;
};

export type sendResetPasswordCodeApiRequst = {
    phone: string;
    redirectUrl: string;
};

export type SendResetPasswordEmailApiResponse = {
    data: {
        Result: boolean;
    };
};

export type ChangePasswordApiRequest = {
    identifier: string;
    password: string;
};

export interface ErrorResponse {
    errorCode: string;
    errorMessage: string;
    statusCode: number;
}

export interface ChangeLanguageApiRequst {
    languageType: string;
}

export type GetResultApiRequest = PaginationParams & {
    gameIdx: number;
    sortOrder: string;
};

export type GetResultApiResponse = {
    data: {
        totalCount: number;
        items: RemoteResult[];
    };
};

export type GetResultDetailApiRequest = {
    drawIdx: string;
};

export type VerifyReferralCodeApiResponse = {
    data: {
        referralMemberIdx: string;
    };
};

export type PostReferralCodeApiRequest = {
    identifier: string;
    referralCode: string;
};

export type GetReferrersApiRequest = PaginationParams & {
    sortOrder: string;
};

export type GetTicketsApiRequest = PaginationParams & {
    sortOrder: string;
    gameSelectFilter: string;
};

export type GetPointDetailApiRequest = {
    historyIdx: number;
};

export type GetPrizesApiRequest = PaginationParams & {
    sortOrder: string;
    gameSelectFilter: string;
    paymentSelectFilter: string;
    claimedSelectFilter: string;
};

export type GetPrizeDetailApiRequest = {
    lineIdx: number;
};

export type GetPrizesApiResponse = {
    data: { items: RemotePrize[] };
};

export type GetMyPointsApiResponse = {
    data: RemoteMyPoints;
};

export type GetUserInfoByPhoneApiResponse = {
    data: RemoteUser;
};

export type GetPrizeDetailApiResponse = {
    data: RemotePrize;
};

export type GetTicketDetailApiRequest = {
    ticketIdx: number;
};

export type GetTicketsApiResponse = {
    data: {
        totalCount: number;
        items: RemoteDrawInfo[];
    };
};

export type GetPointHistoryApiResponse = {
    data: {
        totalCount: number;
        items: RemoteMonthlyHistoryItem[];
    };
};

export type RemoteMonthlyHistoryItem = {
    yearMonth: string;
    historyItems: RemotePointHistoryItem[];
};

export type TicketInfo = {
    ticketIdx: number;
    serialNumber: string;
    count: number;
    status: string;
};

export type GetOrderHistoryApiRequest = PaginationParams & {
    sortOrder: string;
    gameSelectFilter?: number;
};

export type GetOrderHistoryApiResponse = {
    data: {
        totalCount: number;
        items: OrderHistory[];
    };
};

export type GetOrderHistoryDetailApiRequest = {
    orderIdx: string;
};

export type GetPointMallOrderHistoryApiRequest = PaginationParams & {
    sortStatus: string;
    sortOrder: string;
};

export type GetPointMallOrderHistoryApiResponse = {
    data: PointMallOrderHistory[];
};

export type GetPointMallOrderHistoryDetailApiRequest = {
    orderIdx: number;
};

export type GetMessagesApiRequest = PaginationParams;

export type GetMessagesApiResponse = {
    data: Message[];
};

export type GetMessageDetailApiRequest = {
    messageIdx: number;
};

export type GetProductsApiRequest = PaginationParams & {
    sortOrder: string;
};

export type GetProductsApiResponse = {
    data: {
        totalCount: number;
        items: Product[];
    };
};

export type GetProductDetailApiRequest = {
    productIdx: number;
};

export type BuyProductApiRequest = {
    productIdx: string;
    quantity: number;
};

export type BuyProductApiResponse = {
    OrderNumber: string;
    PurchasedDate: string;
};

export type RemovePointMallOrderApiRequest = {
    orderIdx: number;
};

export type BuyLinesApiRequest = {
    gameIdx: number;
    drawIdx: number;
    issueNumber: LineInPayment[];
};

export type GetMyBanksApiRequest = PaginationParams;

export type GetGamesApiResponse = {
    data: Game[];
};

export type GetBannerApiRequest = {
    languageType: string;
};
