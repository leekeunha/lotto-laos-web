export type RemoteInquiryDetail = {
    inquiryIdx: string;
    category: string;
    title: string;
    content: string;
    answer: string | null;
    memberType: string;
    memberIdx: string;
    adminMemberIdx: string | null;
    status: string;
    createdAt: string;
    answeredAt: string | null;
};
